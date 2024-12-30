<script lang="ts">
  import { Layout } from '$lib'
  import packageJson from '../../package.json'
  import README from '../../README.md?raw'

  let { children } = $props()
</script>

<Layout {packageJson} {README}>
  {@render children()}
</Layout>
