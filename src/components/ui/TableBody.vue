<template>
  <tbody :class="bodyClass" data-slot="table-body">
    <slot />
  </tbody>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ class?: string }>()

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const bodyClass = computed(() => twMerge('[&_tr:last-child]:border-0', props.class))
</script>
