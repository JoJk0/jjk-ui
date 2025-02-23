<script lang="ts" setup></script>

<template>
  <Story title="Tooltip">
    <Variant title="Default">
      <AppTooltip open>
        <template #trigger>
          <AppButton>Hover to activate tooltip</AppButton>
        </template>
        Tooltip content
      </AppTooltip>
    </Variant>
    <Variant title="Align start">
      <AppTooltip open align="start">
        <template #trigger>
          <AppButton>Hover to activate tooltip</AppButton>
        </template>
        Tooltip content
      </AppTooltip>
    </Variant>
    <Variant title="Align end">
      <AppTooltip open align="end">
        <template #trigger>
          <AppButton>Hover to activate tooltip</AppButton>
        </template>
        Tooltip content
      </AppTooltip>
    </Variant>
    <Variant title="Custom color">
      <AppTooltip
        open
        style="
          --jjk-tooltip-background-color: var(--app-color-secondary-container);
          --jjk-tooltip-color: var(--app-color-on-secondary-container);
        "
      >
        <template #trigger>
          <AppButton>Hover to activate tooltip</AppButton>
        </template>
        Tooltip content
      </AppTooltip>
    </Variant>
  </Story>
</template>
