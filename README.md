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

### Build performance & cost

Amplify Hosting is billed per build minute, so the build is kept lean. Some of this
lives in `amplify.yml` (version-controlled); the rest is Amplify console configuration
that can't be committed and is recorded here so it isn't lost.

Already in `amplify.yml`:

- `nvm install --skip-default-packages` — the image's nvm ships a `default-packages`
  list (Amplify CLI, Cypress, Hugo, VuePress, Yarn, Bower, grunt-cli, ~1690 packages)
  that reinstalls on every fresh Node 24 provision and dominated the build (~65s). None
  of it is used here; `npm` ships with Node. This is the single biggest saving.
- `npm ci --prefer-offline --no-audit --no-fund` — installs from the cached `~/.npm`
  tarballs and skips the audit network round-trip (GitHub Actions already gates audits).
- `cache: ~/.npm` and `~/.nvm/.cache` — reuse the npm tarballs and the Node 24 download
  across builds.
- Lint, typecheck and image/WebP processing are deliberately **not** in the Amplify
  build — they run in GitHub Actions and offline (`npm run images:build`) respectively.

Recommended Amplify console settings (App settings → Build settings):

- **Ignore build settings** — skip a billed build entirely when a commit changes nothing
  the deployed site cares about. Exit `0` = skip, exit `1` = build:

  ```bash
  git diff --quiet HEAD^ HEAD -- . ':(exclude).github' ':(exclude)scripts' \
    ':(exclude)README.md' ':(exclude).vscode' ':(exclude).editorconfig' && exit 0 || exit 1
  ```

- **Build image settings → package override `Node.js = 24`** — ships Node 24 in the
  image so `nvm install` finds it already present and skips the download.
- **PR previews** — leave off unless the preview URLs are needed; GitHub Actions already
  validates every PR, so previews just double the build count during active work.
