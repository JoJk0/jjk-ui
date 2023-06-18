<script lang="ts" setup>
import AppLogo from '~/components/AppLogo.vue'
</script>

<template>
  <Story title="Logo">
    <Variant title="Small logo">
      <AppLogo size="small" />
    </Variant>
    <Variant title="Medium logo">
      <AppLogo />
    </Variant>
    <Variant title="Large logo">
      <AppLogo size="large" />
    </Variant>
  </Story>
</template>
