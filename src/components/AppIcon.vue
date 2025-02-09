<script lang="ts" setup>
import { Icon } from '@iconify/vue';

defineProps<{
  icon: string | [string, string]
}>()
</script>

<template>
  <Icon :icon="typeof icon === 'string' ? icon : icon[1]" :class="$style.icon" />
</template>

<style lang="scss" module>
.icon {
  color: inherit;
}
</style>
