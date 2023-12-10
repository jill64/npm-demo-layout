<script lang="ts">
  import { browser } from '$app/environment'
  import { FlipButton, ThemeManager, theme } from '@jill64/svelte-dark-theme'
  import { OGP } from '@jill64/svelte-ogp'
  import { Toaster } from '@jill64/svelte-toast'
  import { HighlightSwitcher } from 'svelte-highlight-switcher'
  import Badges from './Badges.svelte'
  import GitHubLogo from './GitHubLogo.svelte'

  export let packageJson: {
    name: string
    description?: string
  }

  $: ({ name: title, description = '' } = packageJson)
  $: repo = title.split('/').pop()
  $: href = `https://github.com/jill64/${repo}`
</script>

<svelte:head>
  <title>{title}</title>
  <link
    rel="icon"
    href="https://raw.githubusercontent.com/jill64/jill64/main/jill.png"
  />
  <meta name="description" content={description} />
  {#if browser}
    <meta data-testid="hydrated" />
  {/if}
</svelte:head>

<Toaster />
<OGP {title} site_name={title} {description} image={href} />
<ThemeManager />
<HighlightSwitcher name={$theme === 'dark' ? 'githubDark' : 'github'} />

<header>
  <hgroup>
    <h1><a href="/">{title}</a></h1>
    <Badges name={title} />
    <p>{description}</p>
  </hgroup>
  <span>
    <FlipButton />
    <GitHubLogo {href} />
  </span>
</header>

<slot />

<footer>
  <small>
    © {new Date().getFullYear()}
    <a {href}>{title}</a> - by
    <a href="https://github.com/jill64"> jill64 </a>
  </small>
</footer>

<style>
  :global(html) {
    scroll-behavior: smooth;
    font-family:
      ui-sans-serif,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      'Noto Sans',
      sans-serif,
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji';
  }

  :global(body) {
    margin: 0;
    padding: 0 1rem;
  }

  :global(.dark body) {
    background-color: #161616;
    color: whitesmoke;
  }

  :global(input) {
    background: inherit;
    color: inherit;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    padding-bottom: 1.75rem;
  }

  h1 {
    margin: 0;
    padding: 0;
    padding-top: 1.25rem;
    padding-bottom: 0.5rem;
  }

  header a {
    text-decoration: none;
    color: inherit;
  }

  hgroup p {
    color: gray;
    margin: 0;
    padding: 0;
  }

  hgroup a {
    display: inline-flex;
  }

  hgroup {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 0.5rem;
  }

  header span {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  footer {
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  small {
    color: gray;
  }

  small a {
    color: royalblue;
    text-decoration: none;
  }

  small a:hover {
    text-decoration: underline;
  }
</style>
