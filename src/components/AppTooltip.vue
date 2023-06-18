<script lang="ts" setup>
import { OTooltip } from '@oruga-ui/oruga-next'

const { position = 'top' } = defineProps<{
  position?: 'top' | 'bottom' | 'left' | 'right'
}>()
</script>

<template>
  <OTooltip class="app-tooltip" :position="position" content-class="tooltip-content">
    <slot />
    <template #content>
      <slot name="content" />
    </template>
  </OTooltip>
</template>

<style lang="scss" scoped>
.app-tooltip {
  --jjk-tooltip-background-color: var(--app-color-secondary);
  --jjk-tooltip-color: var(--app-color-on-secondary);
  --jjk-tooltip-content-font-size: var(--step--1);
  --jjk-tooltip-content-padding: var(--space-2xs) var(--space-s);
  --jjk-tooltip-content-weight-normal: 600;
  --jjk-tooltip-content-radius-large: 2em;
}
</style>
