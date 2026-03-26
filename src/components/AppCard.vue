<script lang="ts" setup>
const { variant = 'raised' } = defineProps<{
  variant?: 'sunken' | 'raised'
}>()
</script>

<template>
  <div
    :class="[
      'app-shape-squircle',
      $style['app-card'],
      { [$style.variant]: variant },
    ]"
  >
    <slot />
  </div>
</template>

<style lang="scss" module>
.app-card {
  --app-card-padding: var(--space-m);
  --app-card-corner-radius: var(--space-m);
  --app-card-border-width: 1px;
  --app-card-border-color: var(--app-color-outline);

  --app-shape-squircle-border-width: 1px;
  --app-shape-squircle-corner-radius: var(--app-card-corner-radius);

  background-color: var(--app-color-surface);
  backdrop-filter: blur(1px);
  color: var(--app-color-on-surface);
  padding: var(--app-card-padding);
  display: flex;
  gap: var(--space-2xs);
  flex-direction: column;

  &.sunken {
    background-color: var(--app-color-outline-variant);
  }
}
</style>
