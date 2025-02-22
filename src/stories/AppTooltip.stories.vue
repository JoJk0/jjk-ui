<script lang="ts" setup>
import AppTooltip from '~/components/AppTooltip.vue'
</script>

<template>
  <Story title="Tooltip">
    <AppTooltip position="block-end">
      <template #trigger>
        <AppButton>Hover to activate tooltip</AppButton>
      </template>
      Tooltip content
    </AppTooltip>
  </Story>
</template>
