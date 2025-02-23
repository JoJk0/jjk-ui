<script lang="ts" setup>
const { placeholder, disabled = false } = defineProps<{
  placeholder?: string
  disabled?: boolean
  error?: string
  iconBefore?: string
  icon?: string
  iconAfter?: string
  type?: string
}>()

// const emit = defineEmits({})

const { modelValue = '' } = defineModels<{
  modelValue?: string
}>()
</script>

<template>
  <div
    :class="[
      $style.wrapper,
      { [$style.interactive]: !disabled, [$style.error]: error },
    ]"
  >
    <AppIcon
      v-if="iconBefore ?? icon"
      :icon="iconBefore ?? icon!"
      :class="$style['icon-before']"
    />
    <input
      v-if="type !== 'textarea'"
      v-bind="$attrs"
      v-model="modelValue"
      :class="$style.input"
      :type
      :disabled
      :placeholder="placeholder"
    />
    <AppIcon v-if="iconAfter" :icon="iconAfter" :class="$style['icon-after']" />
  </div>
</template>

<style lang="scss" module>
.icon-before,
.icon-after {
  color: var(--jjk-input-color);
  font-size: var(--step-1);
}

.wrapper {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  border-radius: var(--space-xs);
  border: 1px solid rgba(var(--app-color-secondary-rgb), 0.7);
  width: fit-content;
  padding-inline: var(--space-s);
  transition: 0.2s;

  &.interactive:hover {
    border: 1px solid var(--app-color-secondary);
    color: var(--app-color-on-surface);
    background-color: var(--app-color-secondary-container);
  }

  &:focus-within {
    outline: 2px solid var(--app-color-secondary);
  }
}

.input {
  padding-block: var(--space-xs);
  color: var(--app-color-on-surface);
  font-size: var(--step-0);
  background-color: transparent;
  transition: 0.2s;
  border: 0;
  outline: 1px solid transparent;

  &::placeholder {
    color: color-mix(in srgb, var(--app-color-secondary), transparent);
  }

  &[disabled] {
    pointer-events: none;
    color: rgba(var(--app-color-on-surface-rgb), 0.5);
    border-color: rgba(var(--app-color-secondary-rgb), 0.5);
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
</style>
