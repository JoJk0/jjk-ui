<script lang="ts" setup>
import { OInput } from '@oruga-ui/oruga-next';
import '~/setup';

const {
  placeholder,
  disabled = false,
} = defineProps<{
  placeholder?: string
  disabled?: boolean
  error?: string
  iconBefore?: string
  iconAfter?: string
}>()

// const emit = defineEmits({})

const { modelValue = '' } = defineModels<{
  modelValue?: string
}>()
</script>

<template>
  <OInput
    v-bind="{ placeholder, disabled }"
    v-model="modelValue"
    :root-class="$style['app-text-field']"
    :input-class="$style.input"
    :class="{ [$style.interactive]: !disabled, [$style.error]: error }"
    :icon-right-class="$style['icon-after']"
    :icon-left-class="$style['icon-before']"
    :icon="iconBefore"
    :icon-right="iconAfter"
  />
</template>

<style lang="scss" module>
.app-text-field {
  --jjk-input-background-color: transparent;
  --jjk-input-border-color: rgba(var(--app-color-secondary-rgb), 0.7);
  --jjk-input-border-radius: var(--space-xs);
  --jjk-input-border-width: 1px;
  --jjk-input-color: rgba(var(--app-color-on-surface-rgb), 0.7);
  --jjk-input-font-size: var(--step-0);
  --jjk-input-padding: var(--space-m) var(--space-s);
  --jjk-input-height: var(--space-xl);

  .icon-before,
  .icon-after {
    color: var(--jjk-input-color);
    font-size: var(--step-1);
  }

  .input {
    transition: 0.2s;

    &::placeholder {
      color: color-mix(in srgb, currentColor, transparent);
    }

    &.interactive {
      &:hover {
        --jjk-input-border-color: var(--app-color-secondary);
        --jjk-input-color: var(--app-color-on-surface);
        --jjk-input-background-color: var(--app-color-secondary-container);
      }

      &:active,
      &:focus-within {
        --jjk-input-color: var(--app-color-on-surface);
        --jjk-input-border-color: var(--app-color-secondary);
      }
    }

    &[disabled] {
      --jjk-input-color: rgba(var(--app-color-on-surface-rgb), 0.5);
      --jjk-input-border-color: rgba(var(--app-color-secondary-rgb), 0.5);
    }

    &.error {
      --jjk-input-color: var(--app-color-error);
      --jjk-input-border-color: var(--app-color-error);

      &.interactive {
        &:hover {
          --jjk-input-border-color: var(--app-color-error);
          --jjk-input-color: var(--app-color-on-surface);
          --jjk-input-background-color: var(--app-color-error-container);
        }

        &:active,
        &:focus-within {
          --jjk-input-color: var(--app-color-on-surface);
          --jjk-input-border-color: var(--app-color-error);
        }
      }
    }
  }
}
</style>
