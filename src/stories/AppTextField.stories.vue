<script lang="ts" setup>
import { ref } from 'vue'
import AppTextField from '~/components/AppTextField.vue'

const modelValue = ref('')
</script>

<template>
  <Story title="Text Field">
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
      <AppTextField v-model="modelValue" error="This is illegal" />
    </Variant>
    <Variant title="With icon before text">
      <AppTextField v-model="modelValue" icon-before="search" />
    </Variant>
    <Variant title="With icon after text">
      <AppTextField v-model="modelValue" icon-after="search" placeholder="Search" />
    </variant>
  </Story>
</template>
