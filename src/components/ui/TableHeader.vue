<template>
  <thead :class="headerClass" data-slot="table-header">
    <slot />
  </thead>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ class?: string }>()

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const headerClass = computed(() => twMerge('[&_tr]:border-b', props.class))
</script>
