<script lang="ts">
  import { Layout } from '$lib'
  import packageJson from '../../package.json'
  import README from '../../README.md?raw'
</script>

<Layout {packageJson} {README}>
  <slot />
</Layout>
