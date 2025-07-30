<template>
  <span :class="fallbackClass" data-slot="avatar-fallback">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ class?: string }>()

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const fallbackClass = computed(() =>
  twMerge('bg-muted flex size-full items-center justify-center rounded-full', props.class)
)
</script>
