<script lang="ts" setup>
import { ref } from 'vue';
import AppField from '~/components/AppField.vue';

const modelValue = ref('')
</script>

<template>
  <Story title="Field" :layout="{ type: 'grid', width: 250 }">
    <Variant title="Default">
      <AppField v-model="modelValue">
        <template #label>Label</template>
        <AppTextField v-model="modelValue" placeholder="Placeholder" />
      </AppField>
    </Variant>
    <Variant title="Disabled">
      <AppField v-model="modelValue" disabled label="Label">
        <AppTextField v-model="modelValue" placeholder="Placeholder" />
      </AppField>
    </Variant>
    <Variant title="With error" label="Label">
      <AppField v-model="modelValue" error="This is illegal" label="Label">
        <AppTextField v-model="modelValue" error placeholder="Placeholder" />
      </AppField>
    </Variant>
  </Story>
</template>
