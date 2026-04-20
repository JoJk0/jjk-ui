import Components from 'unplugin-vue-components/vite'
import type { Plugin } from 'vite'

export interface Options {
  componentPrefix: string
}

const vite = (options: Options): Plugin[] => [
  Components({
    dts: true,
    dirs: [],
    resolvers: [
      (name) => {
        if (name.startsWith(options.componentPrefix || 'App')) {
          return {
            name,
            from: './src/index',
          }
        }
      },
    ],
  }),
]

export default vite
