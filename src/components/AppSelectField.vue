<script lang="ts" setup generic="T extends any | any[]">
import { OButton, ODropdown, ODropdownItem } from '@oruga-ui/oruga-next';
import VWave from 'v-wave';
import { computed } from 'vue';
import '~/setup';

const {
  items = [],
  disabled = false,
  error,
  required = false,
  placeholder = 'Select an option',
} = defineProps<{
  items?: {
    label: string
    value: T
  }[]
  disabled?: boolean
  error?: string
  required?: boolean
  placeholder?: string
}>()

defineSlots<{
  trigger: (active: boolean) => void
  item: (item: { label: string, value: T }) => void
}>()

const modelValue = defineModel<T>()

const { createLocalWaveDirective } = VWave

const { vWave } = createLocalWaveDirective({
  duration: 0.2,
})

const label = computed(() => items?.find(item => item.value === modelValue?.value)?.label)
</script>

<template>
  <ODropdown
    v-model="modelValue" :disabled aria-role="list" :class="$style['app-select-field']"
    :menu-class="$style['app-select-field-menu']" :menu-mobile-overlay-class="$style['app-select-menu-backdrop']"
  >
    <template #trigger="{ active }">
      <OButton
        v-wave :required="required" variant="primary" :label="label ?? placeholder"
        :icon-right-class="$style['select-icon']"
        :icon-right="active ? 'material-symbols:expand-less-rounded' : 'material-symbols:expand-more-rounded'"
        :class="[$style['app-select-field-input'], { [$style.error]: error, [$style.placeholder]: !label }]"
      />
    </template>
    <ODropdownItem
      v-for="(item, i) of items" :key="i" v-wave aria-role="listitem" :value="item.value"
      :class="$style['app-select-field-item']"
    >
      <slot name="item" :label="item.label" :value="item.value">
        {{ item.label }}
      </slot>
    </ODropdownItem>
  </ODropdown>
</template>

<style lang="scss" module>
.app-select-field {
  --jjk-dropdown-item-color: var(--app-color-on-surface);
  --jjk-dropdown-item-active-background-color: rgba(var(--app-color-on-surface-rgb), 0.1);
  --jjk-dropdown-item-active-color: var(--app-color-on-surface);
  --jjk-dropdown-item-font-size: var(--step-0);
  --jjk-dropdown-item-hover-background-color: rgba(var(--app-color-on-surface-rgb), 0.05);
  --jjk-dropdown-item-hover-color: var(--app-color-on-surface);
  --jjk-dropdown-item-padding: var(--space-xs) var(--space-s);

  --jjk-dropdown-menu-background: var(--app-color-surface);
  --jjk-dropdown-menu-border-radius: calc(var(--space-xs) * 1.2);
  --jjk-dropdown-menu-padding: var(--space-3xs);
  --jjk-dropdown-mobile-overlay-color: var(--app-color-surface);

  .app-select-field-menu {
    background-color: var(--app-color-surface);
    box-shadow: 0 0 0 1px var(--app-color-outline);
    margin-block-start: var(--space-2xs);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    gap: var(--space-3xs);
    padding: var(--space-3xs);
  }

  .app-select-field-item {
    border-radius: var(--space-xs);
    color: var(--app-color-on-surface);
  }

  .app-select-menu-backdrop {
    backdrop-filter: blur(10px);
  }

  .app-select-field-input {
    background-color: transparent;
    color: var(--app-color-on-surface);
    border: 1px solid rgba(var(--app-color-secondary-rgb), 0.7);
    border-radius: var(--space-xs);
    transition: 0.2s;
    font-size: var(--step-0);
    padding: var(--space-m) var(--space-s);

    &:hover {
      border-color: var(--app-color-secondary);
      color: var(--app-color-on-surface);
      background-color: var(--app-color-secondary-container);
    }

    &:active,
    &:focus-within {
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

      &:active,
      &:focus-within {
        border-color: var(--app-color-error);
      }

      .select-icon {
        color: var(--app-color-error);
      }
    }

    &.placeholder {
      color: rgba(var(--app-color-secondary-rgb), 0.7);
    }

    .select-icon {
      font-size: var(--step-1);
      margin-inline-end: 0;
      color: rgba(var(--app-color-secondary-rgb), 0.7);
    }
  }
}
</style>
