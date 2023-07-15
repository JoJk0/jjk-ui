import Components from 'unplugin-vue-components/vite'

export interface Options {
  componentPrefix: string
}

export default (options: Options = {
  componentPrefix: 'App',
}) => ([
  Components({
    dts: true,
    dirs: [],
    resolvers: [
      (name) => {
        if (name.startsWith(options.componentPrefix)) {
          return {
            name,
            from: './src/index',
          }
        }
      },
    ],
  }),
])
