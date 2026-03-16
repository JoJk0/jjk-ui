<script lang="ts" setup>
import { ref } from 'vue'
import AppDropdown from '../components/AppDropdown.vue'
import AppDropdownItem from '../components/AppDropdownItem.vue'

const clicked = ref(false)

function onItemClick() {
  clicked.value = true
}
</script>

<template>
  <Story title="Dropdown" :layout="{ type: 'grid', width: 250 }">
    <Variant title="Default">
      <AppDropdown open>
        <template #trigger>
          <AppButton text="Open dropdown" />
        </template>
        <AppDropdownItem @click="onItemClick">Item 1</AppDropdownItem>
        <AppDropdownItem>Item 2</AppDropdownItem>
        <AppDropdownItem>Item 3</AppDropdownItem>
      </AppDropdown>
      <p v-if="clicked">Clicked!</p>
    </Variant>
  </Story>
</template>
