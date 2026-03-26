<script lang="ts" setup>
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from 'reka-ui'
import AppCard from './AppCard.vue'

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
          :side="finalPosition[position]"
          :align-offset="20"
          :aria-label
          :class="[$attrs.class, $style['app-tooltip']]"
        >
          <AppCard :class="$style['card']"><slot /></AppCard>
          <TooltipArrow :class="$style.arrow" />
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
  --jjk-tooltip-corner-radius: var(--space-2xs);
  --jjk-tooltip-font-size: var(--step--1);
  --jjk-tooltip-font-weight: 600;
  --jjk-tooltip-max-width: 25em;

  transform-origin: var(--reka-tooltip-content-transform-origin);
  animation: slideIn 0.2s ease-out;
  box-shadow: var(--app-elevation-float);
  border-radius: var(--jjk-tooltip-corner-radius);
  max-width: var(--jjk-tooltip-max-width);

  .card {
    --app-card-padding: var(--jjk-tooltip-padding);
    --app-shape-squircle-corner-radius: var(--jjk-tooltip-corner-radius);
    font-size: var(--jjk-tooltip-font-size);
    font-weight: var(--jjk-tooltip-font-weight);
    color: var(--jjk-tooltip-color);
    background-color: var(--jjk-tooltip-background-color);
  }

  .arrow {
    fill: var(--jjk-tooltip-background-color);
    stroke: var(--app-color-outline);
    --arrow-border-canceller: hsl(
      from var(--app-color-outline) calc(255 - h) calc(255 - s) calc(255 - l)
    );
  }
  &[data-side='top'] .arrow {
    border-block-start: 1px solid var(--arrow-border-canceller);
    translate: 0 -1px;
  }
  &[data-side='bottom'] .arrow {
    border-block-end: 1px solid var(--arrow-border-canceller);
    translate: 0 -1px;
  }
  &[data-side='left'] .arrow {
    border-inline-start: 1px solid var(--arrow-border-canceller);
    translate: 1px 0;
  }
  &[data-side='right'] .arrow {
    border-inline-end: 1px solid var(--arrow-border-canceller);
    translate: -1px 0;
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
