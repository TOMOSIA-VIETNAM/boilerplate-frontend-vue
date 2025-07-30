<template>
  <div :class="titleClass" data-slot="card-title">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ class?: string }>()

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const titleClass = computed(() => twMerge('leading-none font-semibold', props.class))
</script>
