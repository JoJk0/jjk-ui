<script lang="ts" setup>
import { OButton } from '@oruga-ui/oruga-next'
import VWave from 'v-wave'
import { useMouseInElement } from '@vueuse/core'
import { computed, ref } from 'vue'

const { variant = 'secondary' } = defineProps<{
  variant?: 'primary' | 'secondary' | 'text'
}>()

const { createLocalWaveDirective } = VWave

const { vWave } = createLocalWaveDirective({
  duration: 0.2,
})

const buttonEl = ref(null)

const { elementX, elementY, elementWidth, elementHeight, isOutside } = useMouseInElement(buttonEl)

const shineXCss = computed(() => !isOutside.value ? `${(elementX.value / elementWidth.value) * 100}%` : undefined)
const shineYCss = computed(() => !isOutside.value ? `${(elementY.value / elementHeight.value) * 100}%` : undefined)
</script>

<template>
  <OButton ref="buttonEl" v-wave
    :class="[$style['app-button'], $style[variant], { [$style['v-border-shine']]: !(isOutside && false) }]"
    :wrapper-class="$style['wrapper']" :label-class="$style['label']">
    <slot />
  </OButton>
</template>

<style lang="scss" module>
.app-button {

  --jjk-button-border-radius: 1.5384615385em 2em;
  --jjk-button-box-shadow: 0 0.5em 1em -0.125em rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.02);
  --jjk-button-font-weight: 600;
  --jjk-button-padding: var(--space-xs) var(--space-m);
  --jjk-button-height: auto;

  font-family: var(--base-font-family);
  font-size: var(--step-0);
  transition: 0.2s;
  border-color: transparent;
  position: relative;
  padding: var(--jjk-button-padding);
  border-radius: var(--jjk-button-border-radius);
  box-shadow: var(--jjk-button-box-shadow);
  font-weight: var(--jjk-button-font-weight);
  width: inherit;
  height: inherit;
  margin-left: 0;
  margin-right: 0;

  &.v-border-shine {
    --v-border-shine-x: v-bind(shineXCss);
    --v-border-shine-y: v-bind(shineYCss);
  }

  &.primary {
    background: var(--app-gradient-primary);
    height: auto;
    &:after {
    background: radial-gradient(circle at var(--v-border-shine-x) var(--v-border-shine-y), rgba(255, 255, 255, 0.6) 0%, rgba(0, 0, 0, 0) 50%);
    }
  }

  &.secondary {
    background: var(--app-color-secondary-container) linear-gradient(to top, var(--app-color-background), var(--app-color-background));
    color: var(--app-color-on-secondary-container);
    border-width: 0;
    border: 1px solid rgba(var(--app-color-outline-rgb), 0.2);
    &:after {
    background: radial-gradient(circle at var(--v-border-shine-x) var(--v-border-shine-y), rgb(255, 255, 255) 0%, rgba(0, 0, 0, 0) 40%);
    }
  }

  &.text {
    background: transparent;
    color: var(--app-color-on-background);
    border-width: 0;

    &:hover {
      background: var(--app-color-secondary-container);
    }
  }

  &:hover {
    box-shadow: 0 0.5em 1em -0.125em rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.02), 0 0 0 0.5em rgba(0, 0, 0, 0.02);
    filter: brightness(1.1);
    rotate: -1deg;

    .label {
      rotate: 1deg;
      scale: 1.05;
    }
  }

  &:after {
    content: '';
    position: absolute;
    mix-blend-mode: overlay;
    border-radius: inherit;
    display: block;
    inset: -2px;
    z-index: -1;
  }

  &:before {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: inherit;
    border: 2px solid transparent;
    transition: 0.1s;
  }

  &:active,
  &:focus-within {
    &:before {
      border: 2px solid rgba(var(--app-color-secondary-rgb), 0.8);
    }
  }

  .label {
    transition: 0.2s;
  }
}
</style>
