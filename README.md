<!----- BEGIN GHOST DOCS HEADER ----->

# npm-demo-layout

[![npm-version](https://img.shields.io/npm/v/@jill64/npm-demo-layout)](https://npmjs.com/package/@jill64/npm-demo-layout) [![npm-license](https://img.shields.io/npm/l/@jill64/npm-demo-layout)](https://npmjs.com/package/@jill64/npm-demo-layout) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/npm-demo-layout)](https://npmjs.com/package/@jill64/npm-demo-layout) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/npm-demo-layout)](https://npmjs.com/package/@jill64/npm-demo-layout) [![ci.yml](https://github.com/jill64/npm-demo-layout/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/npm-demo-layout/actions/workflows/ci.yml) [![website](https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fnpm-demo-layout.jill64.dev)](https://npm-demo-layout.jill64.dev)

🎨 My Svelte layout template for npm library demo site

## [Demo](https://npm-demo-layout.jill64.dev)

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
