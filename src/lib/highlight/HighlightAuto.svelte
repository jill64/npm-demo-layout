<script lang="ts">
  import { theme } from '@jill64/svelte-dark-theme'
  import { CodeCopy } from 'svelte-code-copy'
  import { HighlightAuto } from 'svelte-highlight'

  export let code: string
</script>

<CodeCopy color="inherit" effect={$theme === 'dark' ? 'pop' : 'push'}>
  <HighlightAuto code={code.trim()} />
</CodeCopy>
