import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import { HstPercy } from '@histoire/plugin-percy'

export default defineConfig({
  plugins: [HstVue(), HstPercy({
    percyOptions: {

    },
  })],
  setupFile: 'histoire.setup.ts',
  storyMatch: [
    '**/*.stories.vue',
  ],
  theme: {
    title: 'jojko\'s UI',
    logo: {
      square: './public/favicon.svg',
      dark: './public/favicon.svg',
      light: './public/favicon.svg',
    },
    logoHref: 'https://jojko.tech',
    defaultColorScheme: 'dark',
    hideColorSchemeSwitch: true,
    storeColorScheme: false,
    favicon: 'favicon.svg',
    colors: {
      primary: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#0a121e',
        750: '#101b2b',
        800: '#1F2937',
        850: '#1E293B',
        900: '#111827',
        950: '#0F172A',
      },
    },
  },
})
