<script lang="ts">
  import { Render } from '@jill64/svelte-sanitize'

  let { README }: { README: string } = $props()

  let badges = $derived(
    README.match(
      new RegExp(
        /<!----- BEGIN GHOST DOCS BADGES ----->(.*)<!----- END GHOST DOCS BADGES ----->/,
        's'
      )
    )?.[1] ?? ''
  )
</script>

<span>
  <Render
    html={badges}
    options={{
      sanitizeHtml: {
        allowedTags: ['a', 'img']
      }
    }}
  />
</span>

<style>
  span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
  }
</style>
