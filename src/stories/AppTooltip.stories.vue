<script lang="ts" setup>
import AppTooltip from '~/components/AppTooltip.vue'
</script>

<template>
  <Story title="Tooltip">
    <AppTooltip position="bottom">
      <AppButton>Hover to activate tooltip</AppButton>
      <template #content>
        Tooltip content
      </template>
    </AppTooltip>
  </Story>
</template>
