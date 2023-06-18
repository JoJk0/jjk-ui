<script lang="ts" setup>
import '~/setup'
import { OInput } from '@oruga-ui/oruga-next'

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
    v-bind="{ placeholder, disabled }" v-model="modelValue" root-class="app-text-field"
    :class="{ interactive: !disabled, error }" :icon="iconBefore" :icon-right="iconAfter"
  />
</template>

<style lang="scss" scoped>
.app-text-field {
  --jjk-input-background-color: transparent;
  --jjk-input-border-color: rgba(var(--app-color-secondary-rgb), .7);
  --jjk-input-border-radius: var(--space-2xs);
  --jjk-input-border-width: 2px;
  --jjk-input-color: rgba(var(--app-color-on-surface-rgb), .7);
  --jjk-input-font-size: var(--step-0);
  --jjk-input-padding: var(--space-m) var(--space-s);
  --jjk-input-height: var(--space-xl);

  &:deep(input) {
    transition: 0.2s;

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
      --jjk-input-color: rgba(var(--app-color-on-surface-rgb), .5);
      --jjk-input-border-color: rgba(var(--app-color-secondary-rgb), .5);
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
