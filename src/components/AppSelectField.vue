<script lang="ts" setup generic="T extends AcceptableValue">
import {
  SelectArrow,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  type AcceptableValue,
} from 'reka-ui'
import VWave from 'v-wave'

const {
  items = [],
  disabled = false,
  name,
  multiple = false,
  required = false,
  placeholder = 'Select an option',
} = defineProps<{
  items?: {
    label: string
    value: T
  }[]
  disabled?: boolean
  error?: string
  name?: string
  multiple?: boolean
  required?: boolean
  placeholder?: string
}>()

defineSlots<{
  /**
   * Override the default trigger button.
   */
  trigger: () => void
  /**
   * Override the default list item.
   * @param item - The item object.
   */
  item: (item: { label: string; value: T }) => void
}>()

/**
 * The value of the select field
 */
const modelValue = defineModel<T | T[]>()

/**
 * The open/close state of the select field
 */
const isOpen = defineModel<boolean>('open')

const { createLocalWaveDirective } = VWave

const { vWave } = createLocalWaveDirective({
  duration: 0.2,
})
</script>

<template>
  <SelectRoot
    v-model:open="isOpen"
    v-model="modelValue"
    :name
    :multiple
    :required
  >
    <SelectTrigger as-child :disabled>
      <slot name="trigger">
        <button
          v-wave
          :disabled
          :class="[$style.trigger, { [$style.placeholder]: !modelValue }]"
        >
          <SelectValue :placeholder />
          <SelectIcon as-child>
            <AppIcon
              :class="$style['select-icon']"
              icon="material-symbols:expand-more-rounded"
            />
          </SelectIcon>
        </button>
      </slot>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent position="item-aligned" :class="$style.content">
        <SelectScrollUpButton />
        <SelectViewport :class="$style.viewport">
          <SelectItem
            v-for="item in items"
            :key="JSON.stringify(item)"
            v-wave
            :class="$style.item"
            :value="item.value"
          >
            <SelectItemText>
              <slot name="item" v-bind="item">
                {{ item.label ?? item.value }}
              </slot>
            </SelectItemText>
            <SelectItemIndicator />
          </SelectItem>
          <!-- <SelectGroup>
            <SelectLabel />
            <SelectItem>
              <SelectItemText />
              <SelectItemIndicator />
            </SelectItem>
          </SelectGroup>
          <SelectSeparator /> -->
        </SelectViewport>
        <SelectScrollDownButton />
        <SelectArrow />
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<style lang="scss" module>
.item {
  border-radius: var(--space-xs);
  color: var(--app-color-on-surface);
  padding: var(--space-xs) var(--space-s);
  border: 0;
  transition: 0.2s;
  cursor: pointer;
  outline: 1px solid transparent;

  &:focus-visible {
    background-color: rgba(var(--app-color-on-surface-rgb), 0.05);
    color: var(--app-color-on-surface);
    border-color: transparent;
    outline: 1px solid transparent;
  }
}

.content {
  background-color: var(--app-color-surface);
  border-radius: calc(var(--space-xs) * 1.2);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 0 1px var(--app-color-outline);
}

.viewport {
  display: flex;
  flex-direction: column;
  gap: var(--space-3xs);
  padding: var(--space-3xs);
}

.trigger {
  background-color: transparent;
  color: var(--app-color-on-surface);
  border: 1px solid rgba(var(--app-color-secondary-rgb), 0.7);
  border-radius: var(--space-xs);
  transition: 0.2s;
  font-size: var(--step-0);
  padding: var(--space-xs) var(--space-s);
  display: flex;
  align-items: center;
  gap: var(--space-2xs);
  cursor: pointer;

  &[disabled] {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }

  &:hover:not[disabled] {
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
</style>
