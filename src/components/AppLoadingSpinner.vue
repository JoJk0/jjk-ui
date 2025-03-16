<template>
  <svg
    class="app-loading-spinner"
    viewBox="0 0 68 68"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="primary-gradient" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="rgb(121, 126, 247)" />
        <stop offset="100%" stop-color="rgb(0, 255, 206)" />
      </linearGradient>
    </defs>
    <circle
      class="path"
      fill="none"
      stroke-width="8"
      stroke-linecap="round"
      cx="34"
      cy="34"
      r="30"
    ></circle>
  </svg>
</template>

<style lang="scss" scoped>
@use 'sass:math' as *;
@use '../theme/mixins' as *;

$offset: 187;
$duration: 1.4s;

.app-loading-spinner {
  --app-loading-spinner-size: var(--step-4);
  --app-loading-spinner-color: url(#primary-gradient);

  animation: rotator $duration linear infinite;
  width: var(--app-loading-spinner-size);
  height: var(--app-loading-spinner-size);
}

@keyframes rotator {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

.path {
  stroke-dasharray: $offset;
  stroke-dashoffset: 0;
  transform-origin: center;
  stroke: var(--app-loading-spinner-color);
  animation: dash $duration ease-in-out infinite;
}
@keyframes dash {
  0% {
    stroke-dashoffset: $offset;
  }
  50% {
    stroke-dashoffset: div($offset, 4);
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: $offset;
    transform: rotate(450deg);
  }
}
</style>
