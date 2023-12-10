<!----- BEGIN GHOST DOCS HEADER ----->
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
