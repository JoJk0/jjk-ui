/// <reference types="vitest" />
/// <reference types="histoire" />

import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

// @ts-expect-error - vite-plugin-vue-macros is not typed
import VueMacros from 'unplugin-vue-macros/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Dts from 'vite-plugin-dts'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    // Vue({
    //   script: {
    //     propsDestructure: true,
    //     defineModel: true,
    //   },
    // }),
    VueMacros({
      plugins: {
        vue: Vue({
          script: {
            propsDestructure: true,
            defineModel: true,
          },
        }),
        // vueJsx: VueJsx(), // if needed
      },
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
    }),

    // https://github.com/qmhc/vite-plugin-dts
    Dts(),

  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },

  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        vite: resolve(__dirname, 'src/vite.ts'),
      },
      name: 'jjk-ui',
      formats: ['es'],
    },
  },
})
