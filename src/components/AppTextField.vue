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
    get: () => String(modelValue.value ?? ''),
    set: (val) =>
      (modelValue.value =
        typeof modelValue.value === 'number' ? (+val as T) : (val as T)),
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
    @click="textarea?.focus()"
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
  padding-block-end: var(--space-s);
  display: flex;
  justify-content: end;
  gap: var(--space-xs);
}

.app-text-field {
  --jjk-text-field-color: var(--app-color-on-surface);
  --jjk-text-field-border-color: rgba(var(--app-color-secondary-rgb), 0.3);
  --jjk-text-field-corner-radius: 20px;
  --jjk-text-field-padding: var(--space-s);

  --squircle-smooth: 0.5;
  --squircle-radius: var(--jjk-text-field-corner-radius);

  mask-image: paint(squircle);
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto 1fr auto;
  grid-auto-rows: 1fr auto;
  align-items: center;
  gap: var(--space-xs);
  backdrop-filter: blur(1.5px);
  width: fit-content;
  padding-inline: var(--jjk-text-field-padding);
  transition: 0.2s;
  &:before {
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    background: var(--jjk-text-field-border-color);
    -webkit-mask-image: paint(squircle);
    mask-image: paint(squircle);
    --squircle-outline: 1px;
  }

  &.interactive:hover {
    --jjk-text-field-border-color: var(--app-color-secondary);
    --jjk-text-field-color: var(--app-color-on-surface);
    background-color: var(--app-color-secondary-container);
  }

  &:focus-within {
    --jjk-text-field-border-color: var(--app-color-secondary);
    outline: 2px solid var(--app-color-secondary);
    &:before {
      --squircle-outline: 2px;
    }
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
  padding-block: var(--jjk-text-field-padding);
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
