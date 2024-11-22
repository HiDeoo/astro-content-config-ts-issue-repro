# astro-content-config-ts-issue-repro

## Steps to reproduce

1. Clone this repository
1. Run `pnpm install`
1. Move to the `__docs__` directory (`cd __docs__`)
1. Run `pnpm dev` and visit `http://localhost:4321/`
   - This is a 404 page
   - The terminal should log that `The collection "docs" does not exist or is empty.`
1. Stop the dev server
1. Rename the content config file to the legacy name (`mv src/content.config.ts src/content/config.ts`)
1. Run `pnpm dev` and visit `http://localhost:4321/`

Everything should work as expected now.

Note that to reproduce the issue again after renaming to the legacy name, you probably want to `rm -rf .astro node_modules/.astro`
