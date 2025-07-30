<template>
  <div :class="descClass" data-slot="card-description">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ class?: string }>()

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const descClass = computed(() => twMerge('text-muted-foreground text-sm', props.class))
</script>
