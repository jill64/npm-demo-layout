import { init } from '@jill64/sentry-sveltekit-cloudflare/client'

const onError = init(
  'https://f7610154d98be485d1a7a21315309f49@o4505814639312896.ingest.sentry.io/4506369358626816'
)

export const handleError = onError()
