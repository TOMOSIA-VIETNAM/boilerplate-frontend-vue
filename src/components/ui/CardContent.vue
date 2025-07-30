<template>
  <div :class="contentClass" data-slot="card-content">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ class?: string }>()

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const contentClass = computed(() => twMerge('px-6', props.class))
</script>
