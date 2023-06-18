<script lang="ts" setup>
defineProps<{
  icon: string | [string, string]
}>()
</script>

<template>
  <i class="material-symbols-outlined">{{ typeof icon === 'string' ? icon : Array.isArray(icon) ? icon[1] : undefined }}</i>
</template>

<style lang="scss" scoped>
.material-symbols-outlined {
  min-width: 1em;
  min-height: 1em;
  color: inherit;
}
</style>
