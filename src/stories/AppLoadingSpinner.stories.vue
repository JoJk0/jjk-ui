<script lang="ts" setup>
import AppLoadingSpinner from '~/components/AppLoadingSpinner.vue';
</script>

<template>
  <Story title="Loading Spinner" :layout="{ type: 'grid', width: 250 }">
    <Variant title="Default">
      <AppLoadingSpinner />
    </Variant>
  </Story>
</template>
