<script lang="ts" setup>
import AppButton from '~/components/AppButton.vue';
</script>

<template>
  <Story title="Button" :layout="{ type: 'grid', width: 250 }">
    <Variant title="Primary Button">
      <AppButton variant="primary"> Primary button </AppButton>
    </Variant>
    <Variant title="Secondary Button">
      <AppButton> Secondary button </AppButton>
    </Variant>
    <Variant title="Text Button">
      <AppButton variant="text"> Text button </AppButton>
    </Variant>
    <Variant title="Disabled">
      <AppButton variant="primary" disabled> Disabled button </AppButton>
    </Variant>
    <Variant title="With icon before">
      <AppButton icon="material-symbols:search-rounded">JJK button</AppButton>
    </Variant>
    <Variant title="With icon after">
      <AppButton icon-after="material-symbols:search-rounded"
        >JJK button</AppButton
      >
    </Variant>
    <Variant title="Icon Button">
      <AppButton variant="text" icon="material-symbols:search-rounded" />
    </Variant>
  </Story>
</template>
