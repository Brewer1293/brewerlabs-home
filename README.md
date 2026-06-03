# Brewerlabs Home

Project index for `home.brewerlabs.uk`.

## Live URLs

- Project index: `https://home.brewerlabs.uk`
- FM Recruitment Lab: `https://fmapp.brewerlabs.uk/`

## Repository Layout

- `src/` - Vite/React project index shown at the root domain.
- `public/` - static files published by the root site.
- `CHANGELOG.md` - release/change history. Update this before each live push.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

Cloudflare Pages runs the root build:

```bash
npm run build
```

That command builds the project index into `dist`.

Cloudflare Pages should publish `dist` from the `main` branch.

## Deployment

Push `main` to GitHub. Cloudflare Pages is connected to the repository and deploys automatically to `home.brewerlabs.uk`.

Before each live push, update `CHANGELOG.md` with the changes being released.

FM Recruitment Lab now lives in its own repository and Cloudflare Pages project:

```text
https://github.com/Brewer1293/fm-recruitment-lab
https://fmapp.brewerlabs.uk/
```
