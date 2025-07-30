<template>
  <option :value="value" :class="optionClass" data-slot="select-item">
    <slot />
  </option>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ value: string | number; class?: string }>()

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const optionClass = computed(() =>
  twMerge(
    'focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none',
    props.class
  )
)
</script>
