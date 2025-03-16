<script lang="ts" setup>
import { ref } from 'vue'
import AppTextField from '~/components/AppTextField.vue'

const modelValue = ref('')
</script>

<template>
  <Story title="Text Field" :layout="{ type: 'grid', width: 280 }">
    <Variant title="Default">
      <AppTextField v-model="modelValue" />
    </Variant>
    <Variant title="With placeholder">
      <AppTextField v-model="modelValue" placeholder="Placeholder" />
    </Variant>
    <Variant title="Disabled">
      <AppTextField v-model="modelValue" disabled />
    </Variant>
    <Variant title="With error">
      <AppTextField v-model="modelValue" error />
    </Variant>
    <Variant title="Textarea">
      <AppTextField v-model="modelValue" type="textarea" />
    </Variant>
    <Variant title="With icon before text">
      <AppTextField
        v-model="modelValue"
        icon-before="material-symbols:search-rounded"
      />
    </Variant>
    <Variant title="With icon after text">
      <AppTextField
        v-model="modelValue"
        icon-after="material-symbols:search-rounded"
        placeholder="Search"
      />
    </Variant>
  </Story>
</template>
