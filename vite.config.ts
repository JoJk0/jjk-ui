/// <reference types="vitest" />
/// <reference types="histoire" />

import Vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";

import AutoImport from "unplugin-auto-import/vite";
// import UnpluginIsolatedDecl from "unplugin-isolated-decl/vite";
import Components from "unplugin-vue-components/vite";
import VueMacros from "unplugin-vue-macros/vite";
import { defineConfig } from "vite";
import { patchCssModules } from "vite-css-modules";
import Dts from "vite-plugin-dts";

export default defineConfig({
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, "src")}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  plugins: [
    patchCssModules({
      generateSourceTypes: true,
    }),

    // UnpluginIsolatedDecl({
    //   transformer: "oxc",
    // }),

    VueMacros({
      plugins: {
        vue: Vue(),
      },
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ["vue", "@vueuse/core"],
      dts: true,
      dirs: ["./src/composables"],
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
    environment: "jsdom",
  },
  // ssr: {
  //   external: ['vue', '@vue/server-renderer'],
  // },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
        vite: resolve(__dirname, "src/vite.ts"),
        setup: resolve(__dirname, "src/setup.ts"),
      },
      name: "jjk-ui",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["unplugin-vue-components/vite", "vue", "@vueuse/core"],
    },
  },
});
