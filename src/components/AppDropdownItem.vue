<script setup lang="ts">
import { DropdownMenuItem, type AsTag } from 'reka-ui';
import type { Component } from 'vue';

defineProps<{
  as?: AsTag | Component
}>()
</script>

<template>
  <DropdownMenuItem
    v-bind="$attrs"
    :class="[$attrs.class, 'app-shape-squircle', $style['app-dropdown-item']]"
    :as
  >
    <slot />
  </DropdownMenuItem>
</template>

<style lang="scss" module>
.app-dropdown-item {
  min-width: var(--reka-dropdown-menu-trigger-width);
  padding: var(--space-2xs) var(--space-s);
  transition: background-color var(--app-motion-standard);
  --app-shape-squircle-corner-radius: var(--space-xs);

  &:hover {
    background-color: var(--app-color-secondary-container);
    color: var(--app-color-on-secondary-container);
  }
}
</style>
