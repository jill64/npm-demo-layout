<script lang="ts">
  import { theme } from '@jill64/svelte-dark-theme'
  import type { SvelteComponent } from 'svelte'
  import { CodeCopy } from 'svelte-code-copy'
  import { Highlight } from 'svelte-highlight'

  let {
    code,
    language
  }: {
    code: string
    language: (Highlight extends SvelteComponent<infer U>
      ? U
      : never)['language']
  } = $props()
</script>

<div style:overflow-x="auto">
  <CodeCopy color="inherit" effect={theme.isDark ? 'pop' : 'push'}>
    <Highlight code={code.trim()} {language} />
  </CodeCopy>
</div>
