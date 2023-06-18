<script lang="ts" setup>
import logo from '~/assets/logo.svg'

const { size = 'medium' } = defineProps<{
  size?: 'small' | 'medium' | 'large'
}>()
</script>

<template>
  <img :src="logo" class="app-logo" alt="Jojko's logo'" :class="size">
</template>

<style lang="scss" scoped>
@use '~/theme/globals' as *;
@use 'sass:color' as *;

.app-logo {
  width: 1em;
  height: 1em;
  font-size: calc(var(--step-3) * 2);

  &.small {
    font-size: calc(var(--step-2) * 2);
  }

  &.large {
    font-size: calc(var(--step-4) * 2);
  }
}
</style>
