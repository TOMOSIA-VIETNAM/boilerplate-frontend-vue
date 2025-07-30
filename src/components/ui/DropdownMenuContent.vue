<template>
  <div
    v-if="isOpen"
    class="animate-in fade-in-0 zoom-in-95 absolute z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 shadow-md"
    :class="align === 'end' ? 'right-0' : 'left-0'"
    style="position: absolute; top: 100%; right: 0; margin-top: 0.5rem; z-index: 9999"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  align?: 'start' | 'end'
  isOpen: boolean
}>()
</script>

<style scoped>
.animate-in {
  animation: fadeIn 0.1s ease-out;
}

.fade-in-0 {
  opacity: 0;
  animation-fill-mode: forwards;
}

.zoom-in-95 {
  transform: scale(0.95);
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
