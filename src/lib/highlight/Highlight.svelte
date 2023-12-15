<script lang="ts">
  import { theme } from '@jill64/svelte-dark-theme'
  import type { SvelteComponent } from 'svelte'
  import { CodeCopy } from 'svelte-code-copy'
  import { Highlight } from 'svelte-highlight'

  export let code: string
  export let language: (Highlight extends SvelteComponent<infer U>
    ? U
    : never)['language']
</script>

<div style:overflow-x="auto">
  <CodeCopy color="inherit" effect={$theme === 'dark' ? 'pop' : 'push'}>
    <Highlight code={code.trim()} {language} />
  </CodeCopy>
</div>
