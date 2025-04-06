<script lang="ts" setup>
defineProps<{
  label?: string
  error?: string
  disabled?: boolean
}>()
</script>

<template>
  <label :class="[$style['app-field'], { [$style.disabled]: disabled }]">
    <div :class="$style['label-input']">
      <div
        v-if="label ?? $slots.label"
        :class="[$style.label, { [$style.error]: error }]"
      >
        <slot name="label">{{ label }}</slot>
      </div>
      <slot />
    </div>
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
  &:has([role='checkbox']) {
    .label-input {
      display: flex;
      align-items: center;
      padding-inline: var(--space-2xs);
    }
    .label {
      order: 1;
    }
  }

  .label-input {
    display: contents;
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
