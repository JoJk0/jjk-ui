<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'reka-ui';
import AppButton from './AppButton.vue';
import AppCard from './AppCard.vue';

defineProps<{
  /**
   * Whether the dialog can be closed by clicking outside, the escape key or close button
   */
  persistent?: boolean
  /**
   * Dialog title
   */
  title?: string
  /**
   * Dialog description
   */
  description?: string
}>()

defineSlots<{
  /**
   * Content that triggers the dialog
   */
  trigger: void
  /**
   * Accessible dialog title
   */
  title: void
  /**
   * Accessible dialog description
   */
  description: void
  /**
   * Content for the header actions next to the close button
   */
  'header-actions': void
  /**
   * Actions for the dialog
   */
  actions: void
  /**
   * Content inside the dialog
   */
  default: void
}>()

/**
 * Whether the dialog is open
 */
const isOpen = defineModel<boolean>('open', { default: false })
</script>

<template>
  <DialogRoot v-model:open="isOpen" :class="$style['app-dialog']">
    <DialogTrigger :class="$style.trigger" as-child>
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <Transition name="fade">
        <DialogOverlay :class="$style.overlay" />
      </Transition>
      <DialogContent
        as-child
        :trap-focus="!persistent"
        @pointer-down-outside="persistent ? $event.preventDefault() : null"
        @escape-key-down="persistent ? $event.preventDefault() : null"
        @focus-outside="persistent ? $event.preventDefault() : null"
      >
        <AppCard :class="$style.content" v-bind="$attrs">
          <header>
            <div :class="$style.start">
              <DialogTitle as-child>
                <h2 class="gradiented step-3 strong">
                  <slot name="title">{{ title }}</slot>
                </h2>
              </DialogTitle>
              <DialogDescription as-child>
                <div :class="$style.description">
                  <slot name="description">{{ description }}</slot>
                </div>
              </DialogDescription>
            </div>
            <slot name="header-actions" />
            <DialogClose aria-label="Close" as-child>
              <AppButton
                v-if="!persistent"
                variant="text"
                :class="$style['close-button']"
                icon="material-symbols:close-rounded"
                @click="isOpen = false"
              />
            </DialogClose>
          </header>
          <slot />
          <footer>
            <slot name="actions" />
          </footer>
        </AppCard>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style lang="scss" module>
.trigger {
  background-color: transparent;
}
.overlay {
  background: rgba(var(--app-color-background-rgb), 0.8);
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
}

.content {
  --app-dialog-padding: var(--space-m);
  min-width: 25em;
  padding: var(--app-dialog-padding);
  border-radius: var(--space-l);
  position: fixed;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  translate: -50% -50%;
  display: flex;
  flex-direction: column;
  gap: var(--space-m);
  align-items: stretch;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-xs);

    .start {
      display: flex;
      flex-direction: column;
      gap: var(--space-2xs);
    }

    .description {
      opacity: 0.8;
    }

    .close-button {
      align-self: start;
      margin-block-start: calc(var(--app-dialog-padding) * -1 / 3);
      margin-inline-end: calc(var(--app-dialog-padding) * -1 / 3);
    }
  }

  footer {
    display: flex;
    flex-direction: row-reverse;
    gap: var(--space-xs);
    margin-inline: calc(var(--app-dialog-padding) * -1 / 3);
    margin-block-end: calc(var(--app-dialog-padding) * -1 / 3);
  }
}
</style>
