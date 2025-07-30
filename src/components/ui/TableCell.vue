<template>
  <td :class="cellClass" data-slot="table-cell">
    <slot />
  </td>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ class?: string }>()

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const cellClass = computed(() =>
  twMerge('p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', props.class)
)
</script>
