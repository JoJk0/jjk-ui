<script lang="ts" setup>
import AppCheckbox from '~/components/AppCheckbox.vue';
</script>

<template>
  <Story title="Checkbox" :layout="{ type: 'grid', width: 250 }">
    <Variant title="Unchecked">
      <AppCheckbox name="checkbox"></AppCheckbox>
    </Variant>
    <Variant title="Indeterminate">
      <AppCheckbox name="checkbox" model-value="indeterminate"></AppCheckbox>
    </Variant>
    <Variant title="Checked">
      <AppCheckbox name="checkbox" model-value></AppCheckbox>
    </Variant>
    <Variant title="Disabled">
      <AppCheckbox name="checkbox" disabled></AppCheckbox>
    </Variant>
    <Variant title="With error">
      <AppCheckbox name="checkbox" error></AppCheckbox>
    </Variant>
  </Story>
</template>
