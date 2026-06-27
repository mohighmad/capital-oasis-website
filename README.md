# Capital Oasis Website

Professional bilingual website for Capital Oasis Woodworking Company, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Run Locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Checks

```bash
npm run build
```

## Media Assets

- Live website images, posters, and project videos are stored under `public/images/`.
- Keep those public assets in place unless they are intentionally moved to external hosting.

## Environment Variables

- No environment variables are currently required for local development or production build.
- If that changes later, use a local `.env` file and do not commit real secrets.

## Deploy

1. Push this project to a Git repository.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
3. Keep the detected framework as Next.js and the build command as `npm run build`.
4. Deploy, then connect `capitaloasisgroup.com` under Project Settings > Domains.
5. Point the domain DNS records to Vercel using the values shown in the Vercel domain screen.

No environment variables, backend, or database are required.
