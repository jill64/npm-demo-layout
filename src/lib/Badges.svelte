<script lang="ts">
  import { Render } from '@jill64/svelte-sanitize'

  export let README: string

  $: badges = README.match(
    /<!----- BEGIN GHOST DOCS BADGES ----->(.*)<!----- END GHOST DOCS BADGES ----->/
  )?.[1] ?? ''
</script>

<span>
  <Render html={badges} />
</span>

<style>
  span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
  }
</style>
