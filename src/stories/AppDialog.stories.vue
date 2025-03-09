<script lang="ts" setup>
import AppDialog from '~/components/AppDialog.vue';
</script>

<template>
  <Story title="Dialog">
    <Variant title="Primary Button">
      <AppDialog open>
        <template #trigger>
          <AppButton>Open Dialog</AppButton>
        </template>
        <template #title>
          Hello Dialog!
        </template>
        <template #description>
          Dialog description
        </template>
        <p>Dialog content</p>
        <template #actions>
          <AppButton variant="primary">OK</AppButton>
          <AppButton>Cancel</AppButton>
        </template>
      </AppDialog>
    </Variant>
  </Story>
</template>
