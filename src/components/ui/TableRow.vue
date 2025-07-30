<template>
  <tr :class="rowClass" data-slot="table-row">
    <slot />
  </tr>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ class?: string }>()

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const rowClass = computed(() =>
  twMerge('hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors', props.class)
)
</script>
