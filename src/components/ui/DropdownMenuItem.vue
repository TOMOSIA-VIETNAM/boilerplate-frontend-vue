<template>
  <button
    @click="$emit('click')"
    class="relative flex w-full cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors outline-none select-none hover:bg-gray-100 focus:bg-gray-100"
    :class="variant === 'destructive' ? 'text-red-600 hover:bg-red-50 focus:bg-red-50' : 'text-gray-700'"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'default' | 'destructive'
}>()

defineEmits<{
  click: []
}>()
</script>
