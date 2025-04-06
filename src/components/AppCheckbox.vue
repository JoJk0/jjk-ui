<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { CheckboxIndicator, CheckboxRoot } from 'reka-ui';

defineProps<{
  disabled?: boolean
  name: string
  required?: boolean
  error?: boolean
}>()

// const emit = defineEmits({})

const modelValue = defineModel<boolean | 'indeterminate'>({
  default: false,
})
</script>

<template>
  <CheckboxRoot
    v-bind="{ ...$props, ...$attrs }"
    v-model="modelValue"
    :class="[
      $style['app-checkbox'],
      {
        [$style.disabled]: disabled,
        [$style.indeterminate]: modelValue === 'indeterminate',
        [$style.checked]: modelValue,
        [$style.error]: error,
      },
    ]"
  >
    <CheckboxIndicator :class="$style.indicator">
      <Icon
        v-if="modelValue === 'indeterminate'"
        icon="line-md:minus"
      />
      <Icon v-if="modelValue === true" icon="line-md:confirm" dur="3s" stroke-width="5" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>

<style module>
.app-checkbox {
  background-color: var(--app-color-outline);
  width: var(--step-1);
  height: var(--step-1);
  border: 0;
  mask-image: paint(squircle);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--app-color-secondary);
  transition: 0.2s;
  &:hover {
    filter: brightness(0.8);
  }
  &:focus-visible, &:active {
    outline: 1px solid var(--app-color-outline);
    box-shadow: 0 0 0 2px var(--app-color-outline);
    filter: brightness(1.2);
  }

  &.error {
    color: var(--app-color-error);
    &:after {
      background: var(--app-color-error);
    }
  }
  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }
  &:after {
    content: '';
    position: absolute;
    display: inline-block;
    width: inherit;
    height: inherit;
    background: var(--app-color-outline);
    mask-image: paint(squircle);
    --squircle-outline: 1px;
  }
  .indicator {
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
