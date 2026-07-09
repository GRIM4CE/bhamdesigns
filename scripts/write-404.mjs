// Nitro always writes .output/public/404.html as an empty SPA shell, which would
// leave crawlers and no-JS visitors with a blank page. The real error page is
// prerendered at /404, so copy it over the shell after `nuxt generate`.
//
// Runs automatically via the `postgenerate` npm lifecycle hook, including on Amplify.
import { copyFile, readFile } from 'node:fs/promises'

const SOURCE = new URL('../.output/public/404/index.html', import.meta.url)
const TARGET = new URL('../.output/public/404.html', import.meta.url)

const html = await readFile(SOURCE, 'utf8')

// Guard against silently shipping the shell if the prerendered route ever moves.
if (!html.includes('could not be found')) {
  throw new Error('Prerendered /404 is missing its error copy — did the route change?')
}

await copyFile(SOURCE, TARGET)
console.log('Copied prerendered /404 over .output/public/404.html')
