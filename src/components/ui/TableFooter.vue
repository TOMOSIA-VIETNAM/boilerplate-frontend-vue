<template>
  <tfoot :class="footerClass" data-slot="table-footer">
    <slot />
  </tfoot>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ class?: string }>()

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const footerClass = computed(() => twMerge('bg-primary text-primary-foreground font-medium', props.class))
</script>
