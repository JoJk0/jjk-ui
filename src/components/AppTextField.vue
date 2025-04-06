<script lang="ts" setup generic="T extends string | number">
const {
  placeholder,
  disabled = false,
  type,
} = defineProps<{
  placeholder?: string
  disabled?: boolean
  error?: boolean
  iconBefore?: string
  icon?: string
  iconAfter?: string
  type?: string
}>()

// const emit = defineEmits({})

const [modelValue, modelValueModifiers] = defineModel<T>({
  default: undefined,
})

const attrs = useAttrs()

const style = useCssModule()

const { textarea, input } = useTextareaAutosize({
  input: computed({
    get: () => `${modelValue.value ?? ''}`,
    set: (val) => modelValue.value = typeof modelValue.value === 'number' ? (+val as T) : (val as T),
  }),
})

const inputProps = computed(() => ({
  ...attrs,
  ...modelValueModifiers,
  class: style.input,
  type,
  disabled,
  placeholder,
}))
</script>

<template>
  <div
    :class="[
      $style['app-text-field'],
      { [$style.interactive]: !disabled, [$style.error]: error },
    ]"
  >
    <AppIcon
      v-if="iconBefore ?? icon"
      :icon="iconBefore ?? icon!"
      :class="$style['icon-before']"
    />
    <textarea
      v-if="type === 'textarea'"
      ref="textarea"
      v-bind="inputProps"
      v-model="input"
      :class="$style.textarea"
    />
    <input v-else v-bind="inputProps" v-model="modelValue" />
    <AppIcon v-if="iconAfter" :icon="iconAfter" :class="$style['icon-after']" />
    <div v-if="$slots.actions" :class="$style.actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<style lang="scss" module>
.icon-before,
.icon-after {
  color: var(--jjk-input-color);
  font-size: var(--step-1);
}

.icon-before {
  grid-area: 1 / 1 / 1 / 2;
}

.icon-after {
  grid-area: 1 / 3 / 1 / 4;
}

.actions {
  grid-area: 2 / 1;
  padding-block-end: var(--space-xs);
  display: flex;
  justify-content: end;
  gap: var(--space-xs);
}

.app-text-field {
  --jjk-text-field-color: var(--app-color-on-surface);
  --jjk-text-field-border-color: rgba(var(--app-color-secondary-rgb), 0.7);

  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto 1fr auto;
  grid-auto-rows: 1fr auto;
  gap: 10px 10px;
  align-items: center;
  gap: var(--space-xs);
  border-radius: var(--space-xs);
  border: 1px solid var(--jjk-text-field-border-color);
  backdrop-filter: blur(1.5px);
  width: fit-content;
  padding-inline: var(--space-s);
  transition: 0.2s;

  &.interactive:hover {
    --jjk-text-field-border-color: var(--app-color-secondary);
    --jjk-text-field-color: var(--app-color-on-surface);
    background-color: var(--app-color-secondary-container);
  }

  &:focus-within {
    outline: 2px solid var(--app-color-secondary);
  }

  &.error {
    --jjk-text-field-color: var(--app-color-error);
    --jjk-text-field-border-color: var(--app-color-error);

    &.interactive {
      &:hover {
        --jjk-text-field-border-color: var(--app-color-error);
        --jjk-text-field-color: var(--app-color-on-surface);
        background-color: var(--app-color-error-container);
      }

      &:active,
      &:focus-within {
        --jjk-text-field-color: var(--app-color-on-surface);
        --jjk-text-field-border-color: var(--app-color-error);
      }
    }
  }
}

.textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.input {
  padding-block: var(--space-xs);
  color: var(--app-color-on-surface);
  font-size: var(--step-0);
  font-family: var(--base-font-family);
  background-color: transparent;
  resize: none;
  transition: 0.2s;
  border: 0;
  outline: 1px solid transparent;
  flex: 1;

  &::placeholder {
    color: color-mix(in srgb, var(--app-color-secondary), transparent);
  }

  &[disabled] {
    pointer-events: none;
    color: rgba(var(--app-color-on-surface-rgb), 0.5);
    border-color: rgba(var(--app-color-secondary-rgb), 0.5);
  }
}
</style>
