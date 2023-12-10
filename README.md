<!----- BEGIN GHOST DOCS HEADER ----->

# npm-demo-layout

[![npm-version](https://img.shields.io/npm/v/@jill64/npm-demo-layout)](https://npmjs.com/package/@jill64/npm-demo-layout) [![npm-license](https://img.shields.io/npm/l/@jill64/npm-demo-layout)](https://npmjs.com/package/@jill64/npm-demo-layout) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/npm-demo-layout)](https://npmjs.com/package/@jill64/npm-demo-layout) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/npm-demo-layout)](https://npmjs.com/package/@jill64/npm-demo-layout) [![ci.yml](https://github.com/jill64/npm-demo-layout/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/npm-demo-layout/actions/workflows/ci.yml)

🎨 My Svelte layout template for npm library demo site

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i @jill64/npm-demo-layout
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
