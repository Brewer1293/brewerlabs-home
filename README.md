# Brewerlabs Home

Project index for `home.brewerlabs.uk`, including the FM Recruitment Lab app.

## Live URLs

- Project index: `https://home.brewerlabs.uk`
- FM Recruitment Lab: `https://home.brewerlabs.uk/fm-recruitment/`

## Repository Layout

- `src/` - Vite/React project index shown at the root domain.
- `fm-recruitment/` - static Next.js FM24 recruitment app.
- `scripts/sync-fm-recruitment.mjs` - copies the exported FM app into `public/fm-recruitment` before the root Vite build.
- `public/` - static files published by the root site.

## Local Development

Root project index:

```bash
npm install
npm run dev
```

FM Recruitment Lab:

```bash
npm --prefix fm-recruitment install
npm --prefix fm-recruitment run dev -- --hostname 127.0.0.1 --port 4175
```

## Production Build

Cloudflare Pages runs the root build:

```bash
npm run build
```

That command:

1. Installs the nested FM app dependencies.
2. Builds the FM app with `NEXT_PUBLIC_BASE_PATH=/fm-recruitment`.
3. Syncs the static FM export into `public/fm-recruitment`.
4. Builds the root Vite project into `dist`.

Cloudflare Pages should publish `dist` from the `main` branch.

## Deployment

Push `main` to GitHub. Cloudflare Pages is connected to the repository and deploys automatically to `home.brewerlabs.uk`.

The FM app includes a small version badge in the bottom-right corner so the live build can be checked after a deployment.
