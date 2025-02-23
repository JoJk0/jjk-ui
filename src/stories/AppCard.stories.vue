<script lang="ts" setup>
import AppCard from '~/components/AppCard.vue'
</script>

<template>
  <Story title="Card">
    <Variant title="Sunken card">
      <AppCard variant="sunken">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          dolore corrupti vel vero eius esse architecto deleniti doloribus
          officia laudantium amet totam cupiditate omnis perferendis, veniam rem
          nostrum quos nesciunt!
        </p>
      </AppCard>
    </Variant>
    <Variant title="Raised card">
      <AppCard variant="raised">
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          dolore corrupti vel vero eius esse architecto deleniti doloribus
          officia laudantium amet totam cupiditate omnis perferendis, veniam rem
          nostrum quos nesciunt!
        </p>
      </AppCard>
    </Variant>
  </Story>
</template>
