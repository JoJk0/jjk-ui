<script lang="ts" setup>
import Button from 'primevue/button'

defineProps<{
  label?: string
}>()

// const emit = defineEmits({})
</script>

<template>
  <Button v-bind="$props" />
</template>

<style lang="scss" scoped></style>
