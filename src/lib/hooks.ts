import { onRender } from '@jill64/svelte-dark-theme'
import { attach } from '@jill64/svelte-ogp'
import { sequence } from '@sveltejs/kit/hooks'

export const hooks = sequence(onRender(), attach)
