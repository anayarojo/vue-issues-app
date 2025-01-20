import { defineBoot } from '#q-app/wrappers'
import { VueQueryPlugin } from '@tanstack/vue-query'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(async ({ app }) => {
  VueQueryPlugin.install(app, {
    queryClientConfig: {
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60,
        },
      },
    },
  })
})
