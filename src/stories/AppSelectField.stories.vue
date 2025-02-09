<script lang="ts" setup>
import { ref } from 'vue';
import AppSelectField from '~/components/AppSelectField.vue';

const modelValue = ref<string>()

const items = ref([
  { label: 'Action', value: '1' },
  { label: 'Another action', value: '2' },
  { label: 'Something else', value: '3' },
])
</script>

<template>
  <Story title="Select Field">
    <Variant title="Default">
      <AppSelectField v-model="modelValue" :items="items" />
    </Variant>
    <Variant title="With placeholder">
      <AppSelectField v-model="modelValue" :items="items" placeholder="Placeholder" />
    </Variant>
    <Variant title="Disabled">
      <AppSelectField v-model="modelValue" :items="items" disabled />
    </Variant>
    <Variant title="With error">
      <AppSelectField v-model="modelValue" :items="items" error="This is illegal" />
    </Variant>
    <Variant title="With custom item template">
      <AppSelectField v-model="modelValue" :items="items">
        <template #item="{ label, value }">
          <div class="custom-item">
            <div>L: {{ label }}</div>
            <div>V: {{ value }}</div>
          </div>
        </template>
      </AppSelectField>
    </Variant>
  </Story>
</template>
