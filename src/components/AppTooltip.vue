<script lang="ts" setup>
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from 'reka-ui'

const { position = 'block-start' } = defineProps<{
  position?: 'block-start' | 'block-end' | 'inline-start' | 'inline-end'
  align?: 'start' | 'center' | 'end'
  ariaLabel?: string
  avoidCollisions?: boolean
}>()

defineSlots<{
  trigger: () => void
  default: () => void
}>()

const finalPosition = {
  'block-start': 'top',
  'block-end': 'bottom',
  'inline-start': 'left',
  'inline-end': 'right',
} as const

const isOpen = defineModel<boolean>('open', { default: false })
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <TooltipRoot v-model:open="isOpen">
      <TooltipTrigger as-child>
        <slot name="trigger" />
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          v-bind="$attrs"
          as="div"
          :align
          :avoid-collisions
          :position="finalPosition[position]"
          :align-offset="20"
          :aria-label
          :class="[$attrs.class, $style['app-tooltip']]"
        >
          <TooltipArrow :class="$style.arrow" />
          <slot />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>

<style lang="scss" module>
.app-tooltip {
  --jjk-tooltip-background-color: var(--app-color-secondary);
  --jjk-tooltip-color: var(--app-color-on-secondary);
  --jjk-tooltip-padding: var(--space-2xs) var(--space-s);
  --jjk-tooltip-border-radius: var(--space-s);
  --jjk-tooltip-font-size: var(--step--1);
  --jjk-tooltip-font-weight: 600;

  background-color: var(--jjk-tooltip-background-color);
  color: var(--jjk-tooltip-color);
  font-size: var(--jjk-tooltip-font-size);
  padding: var(--jjk-tooltip-padding);
  font-weight: var(--jjk-tooltip-font-weight);
  border-radius: var(--jjk-tooltip-border-radius);
  border: 1px solid var(--app-color-outline);
  transform-origin: var(--reka-tooltip-content-transform-origin);
  animation: slideIn 0.2s ease-out;

  .arrow {
    fill: var(--jjk-tooltip-background-color);
    stroke: var(--app-color-outline);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    // transform: translate(0, -5%);
  }
  to {
    opacity: 1;
    // transform: translate(0, -5%);
  }
}
</style>
