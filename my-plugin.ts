import type { Plugin } from 'histoire'

export default {
  name: 'my-plugin',
  onDev(api, onCleanup) {
    (async () => {
      const dir = await api.fs.readdir('./')
    })()
  },
} satisfies Plugin
