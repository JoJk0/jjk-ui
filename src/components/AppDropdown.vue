<script setup lang="ts">
import {
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'reka-ui';
import AppCard from './AppCard.vue';

defineProps<{
  /**
   * Whether the dialog can be closed by clicking outside, the escape key or close button
   */
  persistent?: boolean
  /**
   * Dialog title
   */
  title?: string
  /**
   * Dialog description
   */
  description?: string
}>()

defineSlots<{
  /**
   * Content that triggers the dialog
   */
  trigger: void
  /**
   * Content inside the dialog
   */
  default: void
}>()

/**
 * Whether the dropdown is open
 */
const isOpen = defineModel<boolean>('open', { default: false })

</script>

<template>
  <DropdownMenuRoot v-model:open="isOpen" :class="$style['app-dropdown']">
    <DropdownMenuTrigger as-child>
      <slot name="trigger" :open="isOpen" />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        v-bind="$attrs"
        as="div"
        align="start"
        :class="$style.content"
        :side-offset="10"
      >
        <AppCard :class="$style['card']"><slot /></AppCard>
        <DropdownMenuArrow :class="$style['arrow']" />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<style lang="scss" module>
.app-dropdown {
  /* styles */
}
.content {
  --jjk-dropdown-content-padding: var(--space-2xs);
  --jjk-dropdown-content-gap: 0;
  --jjk-dropdown-corner-radius: 15px;
  --jjk-dropdown-gap: var(--space-xs);
  box-shadow: var(--app-elevation-float);
  border-radius: var(--jjk-dropdown-corner-radius);

  .card {
    --app-card-padding: var(--jjk-dropdown-content-padding);
    --app-card-corner-radius: var(--jjk-dropdown-corner-radius);
    backdrop-filter: blur(1px) contrast(0.7) brightness(.45) saturate(3);
    gap: var(--jjk-dropdown-content-gap);
  }
  .arrow {
    fill: var(--app-color-outline);
    stroke: var(--app-color-outline);
  }
}
</style>
