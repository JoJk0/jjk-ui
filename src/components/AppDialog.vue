<script setup lang="ts">
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
} from 'reka-ui'
import AppButton from './AppButton.vue'
import AppCard from './AppCard.vue'
</script>

<template>
  <DialogRoot class="app-dialog">
    <DialogTrigger
      class="trigger"
      as-child
    >
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="overlay" />
      <DialogContent
        class="content"
      >
        <AppCard>
          <slot />
          <DialogClose
            aria-label="Close"
            as-child
          >
            <AppButton variant="text" icon="material-symbols:close-rounded" />
          </DialogClose>
        </AppCard>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style lang="scss" scoped>
.trigger {
  background-color: transparent;
}
.overlay {
  background: rgba(var(--app-color-background-rgb), 0.8);
  backdrop-filter: blur(10px);
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
  min-width: 300px;
  background: rgba(var(--app-color-on-surface-rgb) / 0.9);
  padding: 30px;
  border-radius: 4px;
  position: fixed;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  translate: -50% -50%;
}
</style>
