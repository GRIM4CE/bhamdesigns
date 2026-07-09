# bhamdesigns.com

Portfolio site for Jon Leibham, built with [Nuxt 4](https://nuxt.com) and statically
generated (SSG). Every page — including each gallery — is prerendered to HTML at build
time, so the whole site is crawlable and fast.

## Requirements

- Node `>= 22.12` (see `.nvmrc` — run `nvm use`)
- npm

## Scripts

```bash
npm install       # install deps (runs `nuxt prepare` afterwards)
npm run dev       # dev server at http://localhost:3000
npm run generate  # prerender the static site to .output/public
npm run preview   # preview the generated site locally
npm run lint      # eslint (nuxt flat config)
npm run typecheck # vue-tsc type check
```

## Project structure

```
app/            # application code (Nuxt 4 srcDir)
  assets/       # global SCSS + icon set
  components/   # DImg, DIcon, ProjectCard, Header, Sidebar, Footer
  composables/  # useSeo() — per-page SEO/OpenGraph/canonical
  layouts/      # default layout
  pages/        # index + gallery/[slug]
  error.vue     # 404 / error screen
shared/         # data + types shared by the app and the build config
  data/         # projects + galleries (source of truth)
  types/        # Project / Gallery interfaces
public/         # static assets served at the site root (images, favicon, robots.txt)
nuxt.config.ts  # modules, prerender routes, site/SEO config
amplify.yml     # AWS Amplify build settings
```

## Content

Projects and galleries are plain data. To add or change one, edit:

- `shared/data/projects.ts` — cards on the home page (a project links to a gallery when it has a `slug.path`)
- `shared/data/galleries.ts` — gallery pages
- `public/thumbnails/<type>/` and `public/galleries/<path>/` — the matching images

New galleries are picked up automatically: their routes are prerendered and added to
`sitemap.xml` (unless the gallery has `noIndex: true`).

## SEO

- SSG (`ssr: true` + prerendering) renders real HTML for every route.
- `useSeo()` sets title, description, Open Graph, Twitter card, canonical and robots meta.
- `@nuxtjs/sitemap` generates `/sitemap.xml`; `noIndex` galleries are excluded.
- `public/robots.txt` points crawlers at the sitemap.

## Deployment (AWS Amplify)

Hosted on AWS Amplify Hosting as a static site.

1. In the Amplify console, connect this GitHub repo (branch `main`).
2. Amplify auto-detects `amplify.yml`:
   - build command: `npm run generate`
   - output directory: `.output/public`
3. Every push to `main` triggers an Amplify build + deploy.

GitHub Actions (`.github/workflows/ci.yml`) runs lint, typecheck and a build on every
push/PR — deployment itself is handled by Amplify.
