<script lang="ts">
  import { theme } from '@jill64/svelte-dark-theme'
  import type { LanguageFn } from 'highlight.js'
  import { CodeCopy } from 'svelte-code-copy'
  import { Highlight } from 'svelte-highlight'

  interface LanguageType<TName extends string> {
    name: TName
    register: LanguageFn
  }

  let {
    code,
    language
  }: {
    code: string
    language: LanguageType<string>
  } = $props()
</script>

<div style:overflow-x="auto">
  <CodeCopy color="inherit" effect={theme.isDark ? 'pop' : 'push'}>
    <Highlight code={code.trim()} {language} />
  </CodeCopy>
</div>
