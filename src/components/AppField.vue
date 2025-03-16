<script lang="ts" setup>
defineProps<{
  label?: string
  error?: string
  disabled?: boolean
}>()
</script>

<template>
  <label :class="[$style['app-field'], { [$style.disabled]: disabled }]">
    <div
      v-if="label ?? $slots.label"
      :class="[$style.label, { [$style.error]: error }]"
    >
      <slot name="label">{{ label }}</slot>
    </div>
    <slot />
    <div v-if="error" :class="$style.error">
      <AppIcon icon="material-symbols:error-outline-rounded" />{{ error }}
    </div>
  </label>
</template>

<style module>
.app-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-3xs);
  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .label,
  .error {
    font-size: var(--step--1);
    padding-inline: var(--space-xs);
    display: flex;
    align-items: center;
    gap: var(--space-2xs);
  }
  .label {
    color: var(--app-color-secondary);
  }
  .error {
    color: var(--app-color-error);
  }
}
</style>
