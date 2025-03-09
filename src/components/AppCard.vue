<script lang="ts" setup>
const { variant = 'raised' } = defineProps<{
  variant?: 'sunken' | 'raised'
}>()
</script>

<template>
  <div :class="[$style['app-card'], { [$style.variant]: variant }]">
    <slot />
  </div>
</template>

<style lang="scss" module>
.app-card {
  background-color: var(--app-color-surface);
  backdrop-filter: blur(1px);
  color: var(--app-color-on-surface);
  border-radius: var(--space-m);
  padding: var(--space-m);
  box-shadow: 0 0 0 1px var(--app-color-outline);
  display: flex;
  gap: var(--space-2xs);
  flex-direction: column;
  &.sunken {
    background-color: var(--app-color-outline-variant);
  }
}
</style>
