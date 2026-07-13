# cPanel deployment through GitHub Actions

This repository is prepared for a manual GitHub Actions deployment to the existing Capital Oasis cPanel Node.js app.

## Deployment model

GitHub Actions performs the production install and build on Ubuntu using Node.js 22. It then creates a clean Next.js standalone runtime and uploads the runtime contents into the existing cPanel app root over SSH/SFTP-compatible rsync.

cPanel only receives the already-built runtime and restarts the Node.js app. It must not install dependencies or build the application.

Current cPanel paths:

- App root: `/home/capitalo/capital-oasis-app`
- Public HTML: `/home/capitalo/public_html`
- Startup file: `server.js`
- Node version: `22.22.3`
- Mode: Production

## Workflow trigger

The workflow is manual only:

1. Push the workflow file to the repository when you are ready.
2. Open GitHub → Actions → **Deploy standalone app to cPanel**.
3. Select **Run workflow**.
4. Review the build and upload logs before restarting or testing the site.

There is intentionally no `push` trigger yet.

## Required GitHub Secrets

Create these repository or environment secrets before running the workflow:

- `CPANEL_HOST`
- `CPANEL_PORT`
- `CPANEL_USER`
- `CPANEL_SSH_KEY`
- `CPANEL_APP_PATH` — expected later: `/home/capitalo/capital-oasis-app`
- `CPANEL_PUBLIC_HTML` — expected later: `/home/capitalo/public_html`

The workflow does not contain host credentials, private keys, or hardcoded Windows paths.

## What GitHub uploads

After `npm ci` and `npm run build`, the workflow assembles `deploy-out/` from:

- `.next/standalone/*`
- `.next/static/`
- `public/`

The upload root contains:

- `server.js`
- `package.json`
- `.next/`
- `public/`
- `node_modules/`

The workflow validates the required runtime files before connecting to cPanel. It uploads the contents of `deploy-out/` into `${CPANEL_APP_PATH}/` and never removes or recreates the app root folder itself.

The rsync cleanup is limited to the app-root contents and excludes `tmp/`, `stderr.log`, and `*.log` so restart and local diagnostic files are retained. Receiver-side files under `public/videos/` are protected from deletion because some large production videos remain server-only until they can be compressed, moved to Git LFS, or served from CDN/object storage. New tracked videos present in `deploy-out/public/videos/` can still upload normally.

### Server-only production videos

The deployment workflow protects `/public/videos/` on the cPanel receiver during rsync. This prevents large server-only videos from being deleted when they are intentionally absent from the GitHub repository. Manage those files separately for now; future options include compressing the videos, tracking them with Git LFS, or moving them to CDN/object storage.

After upload, the remote step:

- backs up an existing real `public_html/_next/static` folder with a timestamp before linking it;
- safely replaces an existing `_next/static` symlink;
- backs up an existing real `public_html/images` folder before linking it;
- safely replaces an existing `images` symlink;
- creates `tmp/` inside the app root;
- touches `tmp/restart.txt` to request a Passenger/Node restart.

## Never do these on cPanel

- Do not run `npm install`.
- Do not run `npm run build`.
- Do not move, delete, rename, or recreate `/home/capitalo/capital-oasis-app`.
- Do not use cPanel Git Deployment as the build system.
- Do not replace the cPanel Node.js app record or its configured app root.

The deployment must update files inside the existing app root only. Moving the folder can break the cPanel Node.js app record and its environment.

## Rollback

Keep the previous standalone tar.gz package and the timestamped `public_html` backups until this workflow has been proven in production. If a deployment fails, restore the previous runtime contents inside the same app root and retain the cPanel app record.
