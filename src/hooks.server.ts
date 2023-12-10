import { init } from '@jill64/sentry-sveltekit-cloudflare/server'
import { hooks } from './lib/hooks'

const { onHandle, onError } = init(
  'https://f7610154d98be485d1a7a21315309f49@o4505814639312896.ingest.sentry.io/4506369358626816'
)

export const handle = onHandle(hooks)
export const handleError = onError()
