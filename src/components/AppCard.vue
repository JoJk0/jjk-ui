<script lang="ts" setup>
const { variant = 'raised' } = defineProps<{
  variant?: 'sunken' | 'raised'
}>()
</script>

<template>
  <div :class="[$style['app-card'], { [$style.variant]: variant }]">
    <slot />
  </div>
</template>

<style lang="scss" module>
.app-card {
  --app-card-padding: var(--space-m);
  --app-card-corner-radius: 23px;
  background-color: var(--app-color-surface);
  backdrop-filter: blur(1px);
  color: var(--app-color-on-surface);
  mask-image: paint(squircle);
  padding: var(--app-card-padding);
  display: flex;
  gap: var(--space-2xs);
  flex-direction: column;
  --squircle-smooth: 0.5;
  --squircle-radius: var(--app-card-corner-radius);
  &:before {
    pointer-events: none;
    content: "";
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    translate: calc(var(--app-card-padding) * -1) calc(var(--app-card-padding) * -1);
    background: var(--app-color-outline);
    -webkit-mask-image: paint(squircle);
    mask-image: paint(squircle);
    --squircle-outline: 1px;
  }
  &.sunken {
    background-color: var(--app-color-outline-variant);
  }
}
</style>
