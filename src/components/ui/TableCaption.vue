<template>
  <caption :class="captionClass" data-slot="table-caption">
    <slot />
  </caption>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ class?: string }>()

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const captionClass = computed(() => twMerge('text-muted-foreground mt-4 text-sm', props.class))
</script>
