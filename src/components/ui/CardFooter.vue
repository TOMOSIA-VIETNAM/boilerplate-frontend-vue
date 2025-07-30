<template>
  <div :class="footerClass" data-slot="card-footer">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ class?: string }>()

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const footerClass = computed(() => twMerge('flex items-center px-6 [.border-t]:pt-6', props.class))
</script>
