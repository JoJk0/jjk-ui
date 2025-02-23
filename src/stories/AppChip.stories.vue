<script lang="ts" setup>
import AppChip from '~/components/AppChip.vue'
</script>

<template>
  <Story title="Chip">
    <Variant title="Small chip">
      <AppChip size="small"> Small Chip </AppChip>
    </Variant>
    <Variant title="Small transparent chip">
      <AppChip size="small" transparent> Small transparent chip </AppChip>
    </Variant>
    <Variant title="Medium chip">
      <AppChip> Medium Chip </AppChip>
    </Variant>
    <Variant title="Medium transparent chip">
      <AppChip transparent> Medium transparent chip </AppChip>
    </Variant>
    <Variant title="Large chip">
      <AppChip size="large"> Large Chip </AppChip>
    </Variant>
    <Variant title="Large transparent chip">
      <AppChip size="large" transparent> Large transparent chip </AppChip>
    </Variant>
  </Story>
</template>
