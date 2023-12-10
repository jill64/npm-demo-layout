<script lang="ts">
  export let name: string

  $: href = `https://npmjs.com/package/${name}`

  const prefix = 'https://img.shields.io'
</script>

<span>
  <a {href}>
    <img alt="npm-version" src="{prefix}/npm/v/{name}" />
  </a>
  <a {href}>
    <img alt="npm-license" src="{prefix}/npm/l/{name}" />
  </a>
  <a {href}>
    <img alt="npm-download-month" src="{prefix}/npm/dm/{name}" />
  </a>
  <a {href}>
    <img alt="npm-min-size" src="{prefix}/bundlephobia/min/{name}" />
  </a>
</span>

<style>
  span {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
  }
</style>
