<script lang="ts" setup>
import { OButton } from '@oruga-ui/oruga-next'
import VWave from 'v-wave'

const { variant = 'secondary' } = defineProps<{
  variant?: 'primary' | 'secondary' | 'text'
}>()

const { vWave } = VWave.createLocalWaveDirective({
  duration: 0.2,
})
</script>

<template>
  <OButton v-wave class="app-button" :class="variant">
    <slot />
  </OButton>
</template>

<style lang="scss" scoped>
@use '~/theme/globals' as *;
@use 'sass:color';

.app-button {

  --jjk-button-border-radius: 1.5384615385em 2em;
  --jjk-button-box-shadow: 0 0.5em 1em -0.125em rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.02);
  --jjk-button-font-weight: 600;
  --jjk-button-padding: var(--space-s);

  font-family: var(--base-font-family);
  font-size: var(--step--1);
  transition: 0.2s;
  position: relative;
  &.primary {
    background: linear-gradient(15deg,$secondaryColor,$primaryColor);
  }
  &.secondary {
    background: rgba(83, 205, 222, 0.1);
    color: #53CDDE;
    border-width: 0;
    border: 1px solid rgba(83, 205, 222, 0.2);
  }
  &.text {
    background: transparent;
    color: #53CDDE;
    border-width: 0;
    &:hover {
    background: rgba(83, 205, 222, 0.1);
    }
  }
  &:deep(.o-btn__label) {
    transition: 0.2s;
  }
  &:before {
    content: '';
    position: absolute;
    inset: -5px;
    border-radius: inherit;
    border: 2px solid transparent;
    transition: 0.1s;
  }

  &:hover {
    filter: brightness(1.1);
    rotate: -1deg;
    &:deep(.o-btn__label) {
      rotate: 1deg;
      scale: 1.05;
    }
  }
  &:active, &:focus {
    &:before {
      border: 2px solid rgba($primaryColor, 0.8);
    }
  }
}
</style>
