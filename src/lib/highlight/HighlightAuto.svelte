<script lang="ts">
  import { theme } from '@jill64/svelte-dark-theme'
  import { CodeCopy } from 'svelte-code-copy'
  import { HighlightAuto } from 'svelte-highlight'

  let { code }: { code: string } = $props()
</script>

<div style:overflow-x="auto">
  <CodeCopy color="inherit" effect={theme.isDark ? 'pop' : 'push'}>
    <HighlightAuto code={code.trim()} />
  </CodeCopy>
</div>
