<script lang="ts" setup>
import '~/setup'
import { OButton, ODropdown, ODropdownItem } from '@oruga-ui/oruga-next'
import VWave from 'v-wave'

const {
  items = [],
  disabled = false,
  error,
  required = false,
  placeholder = 'Select an option',
} = defineProps<{
  items?: {
    label: string
    value: string
  }[]
  disabled?: boolean
  error?: string
  required?: boolean
  placeholder?: string
}>()

const { modelValue } = defineModels<{
  modelValue?: {
    value: string
    label: string
  }
}>()

defineSlots<{
  trigger(active: boolean): void
  item(label: string, value: string): void
}>()

const { createLocalWaveDirective } = VWave

const { vWave } = createLocalWaveDirective({
  duration: 0.2,
})
</script>

<template>
  <ODropdown v-model="modelValue" aria-role="list" class="app-select-field" menu-class="app-select-field-menu" menu-mobile-overlay-class="app-select-menu-backdrop">
    <template #trigger="{ active }">
      <OButton v-wave :required="required" :disabled="disabled" variant="primary" :label="modelValue?.label ?? placeholder" :icon-right="active ? 'expand_less' : 'expand_more'" :class="{ error }" class="app-select-field-input" />
    </template>
    <ODropdownItem v-for="item of items" :key="item.value" v-wave aria-role="listitem" :value="item" class="app-select-field-item">
      <slot name="item" :label="item.label" :value="item.value">
        {{ item.label }}
      </slot>
    </ODropdownItem>
  </ODropdown>
</template>

<style lang="scss" scoped>
.app-select-field {
  --jjk-dropdown-item-color: var(--app-color-on-surface);
  --jjk-dropdown-item-active-background-color: rgba(var(--app-color-on-surface-rgb), .1);
  --jjk-dropdown-item-active-color: var(--app-color-on-surface);
  --jjk-dropdown-item-font-size: var(--step-0);
  --jjk-dropdown-item-hover-background-color: rgba(var(--app-color-on-surface-rgb), .05);
  --jjk-dropdown-item-hover-color: var(--app-color-on-surface);
  --jjk-dropdown-item-padding: var(--space-xs) var(--space-s);

  --jjk-dropdown-menu-background: var(--app-color-surface);
  --jjk-dropdown-menu-border-radius: calc(var(--space-xs) * 1.2);
  --jjk-dropdown-menu-padding: var(--space-3xs);
  --jjk-dropdown-mobile-overlay-color: var(--app-color-surface);

  &:deep(.app-select-field-menu) {
    box-shadow: 0 0 0 1px var(--app-color-outline);
    margin-block-start: var(--space-2xs);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    gap: var(--space-3xs);
  }

  &:deep(.app-select-field-item) {
    border-radius: var(--space-xs);
  }

  &:deep(.app-select-menu-backdrop) {
    backdrop-filter: blur(10px);
  }
}
.app-select-field-input {
  background-color: transparent;
  color: var(--app-color-on-surface);
  border: 2px solid rgba(var(--app-color-secondary-rgb), .7);
  border-radius: var(--space-2xs);
  transition: .2s;
  font-size: var(--step-0);
  padding: var(--space-m) var(--space-s);
  &:hover {
    border-color: var(--app-color-secondary);
    color: var(--app-color-on-surface);
    background-color: var(--app-color-secondary-container);
  }
  &:active, &:focus-within {
    color: var(--app-color-on-surface);
    border-color: var(--app-color-secondary);
  }
  &.error {
    border-color: var(--app-color-error);
    color: var(--app-color-error);
    &:hover {
      border-color: var(--app-color-error);
      background-color: var(--app-color-error-container);
    }
    &:active, &:focus-within {
      border-color: var(--app-color-error);
    }
  }
}
</style>
