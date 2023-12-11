<script lang="ts">
  import { sanitize } from '@jill64/universal-sanitizer'

  export let README: string

  $: badges = sanitize(
    README.match(
      /<!----- BEGIN GHOST DOCS BADGES ----->(.*)<!----- END GHOST DOCS BADGES ----->/
    )?.[1] ?? '',
    { sanitizeHtml: { allowedTags: ['a', 'img'] } }
  )
</script>

<span>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html badges}
</span>

<style>
  span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
  }
</style>
