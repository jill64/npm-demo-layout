<script lang="ts">
  import { Layout } from '$lib'
  import packageJson from '../../package.json'
</script>

<Layout {packageJson}>
  <slot />
</Layout>
