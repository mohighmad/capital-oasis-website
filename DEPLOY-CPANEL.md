# Capital Oasis cPanel Deployment

- cPanel app root: `/home/capitalo/capital-oasis-app`
- cPanel repo path: `/home/capitalo/repositories/capital-oasis-app`
- startup file: `server.js`
- Node.js version: `22.22.3`
- application URL: [https://capitaloasisgroup.com](https://capitaloasisgroup.com/)

## Deployment flow

1. Commit and push changes to GitHub.
2. In cPanel Git Version Control, click `Update from Remote`.
3. Click `Deploy HEAD Commit`.
4. Go to the Node.js app page.
5. Confirm `package.json` exists in `/home/capitalo/capital-oasis-app`.
6. Run `NPM Install`.
7. Build the app:

```bash
source /home/capitalo/nodevenv/capital-oasis-app/22/bin/activate && cd /home/capitalo/capital-oasis-app
npm run build
```

8. Restart the Node.js app.
9. Verify [https://capitaloasisgroup.com](https://capitaloasisgroup.com/).

## Notes

- `.cpanel.yml` deploys only runtime site folders and required config files.
- It intentionally does not deploy local-only folders such as `node_modules`, `.next`, `reports`, raw source media folders, `MUSIC`, `LOGO`, or `PHOENIXFLOW LOGO`.
- If cPanel still shows `No uncommitted changes must exist on the checked-out branch`, make sure the repository branch in cPanel is clean after `Update from Remote`.
