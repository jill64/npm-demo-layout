<!----- BEGIN GHOST DOCS HEADER ----->

# @jill64/npm-demo-layout

<!----- BEGIN GHOST DOCS BADGES ----->

<a href="https://npmjs.com/package/@jill64/npm-demo-layout"><img src="https://img.shields.io/npm/v/@jill64/npm-demo-layout" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/npm-demo-layout"><img src="https://img.shields.io/npm/l/@jill64/npm-demo-layout" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/npm-demo-layout"><img src="https://img.shields.io/npm/dm/@jill64/npm-demo-layout" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/npm-demo-layout"><img src="https://img.shields.io/bundlephobia/min/@jill64/npm-demo-layout" alt="npm-min-size" /></a> <a href="https://github.com/jill64/npm-demo-layout/actions/workflows/ci.yml"><img src="https://github.com/jill64/npm-demo-layout/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a> <a href="https://npm-demo-layout.jill64.dev"><img src="https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fnpm-demo-layout.jill64.dev" alt="website" /></a>

<!----- END GHOST DOCS BADGES ----->

🎨 My Svelte layout template for npm library demo site

## [Demo](https://npm-demo-layout.jill64.dev)

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i @jill64/npm-demo-layout
```

If you have problems building with pnpm, try the following

```sh
pnpm i -D @jill64/universal-sanitizer
```

## Usage

```svelte
<!-- +layout.svelte -->
<script lang="ts">
  import { Layout } from '@jill64/npm-demo-layout'
</script>

<Layout>
  <slot />
</Layout>
```

```ts
// hooks.server.ts
import { hooks } from '@jill64/npm-demo-layout'

export const handle = hooks
```

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

[MIT](LICENSE)

<!----- END GHOST DOCS FOOTER ----->
