<script lang="ts" setup>
import AppCheckbox from '~/components/AppCheckbox.vue'
</script>

<template>
  <Story title="Checkbox" :layout="{ type: 'grid', width: 250 }">
    <Variant title="Unchecked">
      <AppCheckbox name="checkbox" />
    </Variant>
    <Variant title="Indeterminate">
      <AppCheckbox name="checkbox" model-value="indeterminate" />
    </Variant>
    <Variant title="Checked">
      <AppCheckbox name="checkbox" model-value />
    </Variant>
    <Variant title="Disabled">
      <AppCheckbox name="checkbox" disabled />
    </Variant>
    <Variant title="With error">
      <AppCheckbox name="checkbox" error />
    </Variant>
  </Story>
</template>
