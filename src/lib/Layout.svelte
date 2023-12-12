<script lang="ts">
  import { browser } from '$app/environment'
  import { FlipButton, ThemeManager, theme } from '@jill64/svelte-dark-theme'
  import { Menu } from '@jill64/svelte-menu'
  import { OGP } from '@jill64/svelte-ogp'
  import { Toaster } from '@jill64/svelte-toast'
  import { HighlightSwitcher } from 'svelte-highlight-switcher'
  import { slide } from 'svelte/transition'
  import Badges from './Badges.svelte'
  import GitHubLogo from './GitHubLogo.svelte'
  import Highlight from './highlight/Highlight.svelte'
  import { bash } from './highlight/languages'

  export let README: string
  export let packageJson: {
    name: string
    description: string
    homepage: string
    author: {
      name: string
      url: string
      image: string
    }
    repository: {
      image: string
    }
  }

  export let disableThemeSwitcher = false

  $: ({ name, author, description, homepage, repository } = packageJson)
</script>

<svelte:head>
  <title>{name}</title>
  <link rel="icon" href={author.image} />
  <meta name="description" content={description} />
  {#if browser}
    <meta data-testid="hydrated" />
  {/if}
</svelte:head>

<Toaster dark={$theme === 'dark'} />
<OGP title={name} site_name={name} {description} image={repository.image} />
<ThemeManager />

{#if !disableThemeSwitcher}
  <HighlightSwitcher name={$theme === 'dark' ? 'githubDark' : 'github'} />
{/if}

<header>
  <hgroup>
    <h1><a href="/">{name}</a></h1>
    <Badges {README} />
    <p>{description}</p>
  </hgroup>
  <span>
    <FlipButton />
    <GitHubLogo href={homepage} />
  </span>
</header>

<Menu
  noOuterClosing
  let:state
  Class="installation"
  summaryClass="installation-summary"
>
  {state === 'CLOSED' || state === 'CLOSING' ? '▷' : '▽'} Installation
  <div transition:slide style:margin-bottom="1rem" slot="contents">
    <Highlight code="npm i {name}" language={bash} />
  </div>
</Menu>

<slot />

<footer>
  <small>
    © {new Date().getFullYear()}
    <a href={homepage}>{name}</a> - by
    <a href={author.url}> {author.name} </a>
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
  :global(body),
  :global(.light body) {
    background-color: whitesmoke;
    color: black;
  }

  :global(.dark body) {
    background-color: #161616;
    color: whitesmoke;
  }

  @media (prefers-color-scheme: dark) {
    :global(body) {
      background-color: #161616;
      color: whitesmoke;
    }
    :global(.light body) {
      background-color: whitesmoke;
      color: black;
    }
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
    color: darkslategray;
    margin: 0;
    padding: 0;
  }

  :global(.dark) hgroup p {
    color: lightgray;
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
  :global(code.hljs) {
    border-radius: 0.5rem;
    border: 1px solid #ccc;
  }
  :global(.dark code.hljs) {
    border: 1px solid #252525;
  }
  :global(.installation-summary) {
    padding: 0.5rem;
    margin: 0.5rem 0;
    border-radius: 0.5rem;
    color: gray;
  }
  :global(.installation-summary:hover) {
    background: rgba(0, 0, 0, 0.1);
  }
  :global(.installation-summary:action) {
    background: rgba(0, 0, 0, 0.2);
  }
  :global(.dark .installation-summary:hover) {
    background: rgba(255, 255, 255, 0.1);
  }
  :global(.dark .installation-summary:action) {
    background: rgba(255, 255, 255, 0.15);
  }
  :global(.installation pre) {
    margin: 0;
    padding: 0;
  }
</style>
