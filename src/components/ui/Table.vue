<template>
  <div class="relative w-full overflow-auto">
    <table :class="tableClass" data-slot="table">
      <slot />
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ class?: string }>()

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const tableClass = computed(() => twMerge('w-full caption-bottom text-sm', props.class))
</script>
