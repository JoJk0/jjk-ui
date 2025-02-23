<script lang="ts" setup>
const { size = 'medium', transparent = false } = defineProps<{
  size?: 'small' | 'medium' | 'large'
  transparent?: boolean
}>()
</script>

<template>
  <div
    :class="[
      $style['app-chip'],
      $style[size],
      { [$style.transparent]: transparent },
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
.app-chip {
  background-color: var(--app-color-secondary);
  color: var(--app-color-on-secondary);
  border-radius: 2em;
  padding: var(--space-2xs) var(--space-xs);
  font-size: var(--step--1);
  font-weight: 600;
  width: fit-content;
  display: flex;
  gap: 1em;

  &.small {
    font-size: var(--step--2);
    padding: var(--space-3xs) var(--space-xs);
  }
  &.large {
    font-size: var(--step-0);
    padding: var(--space-2xs) var(--space-s);
  }
  &.transparent {
    background-color: var(--app-color-secondary-container);
    color: var(--app-color-on-secondary-container);
    box-shadow: 0 0 0 1px rgba(var(--app-color-secondary-rgb), 0.2);
  }
}
</style>
