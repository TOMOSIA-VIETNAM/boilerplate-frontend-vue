<template>
  <select :class="selectClass" v-model="selectedValue" data-slot="select" v-bind="$attrs">
    <slot />
  </select>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

const props = defineProps<{
  modelValue?: string | number
  class?: string
}>()
const emit = defineEmits(['update:modelValue'])

const selectedValue = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    selectedValue.value = val
  }
)
watch(selectedValue, (val) => {
  emit('update:modelValue', val)
})

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const selectClass = computed(() =>
  twMerge(
    'border-input data-[placeholder]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 h-9',
    props.class
  )
)
</script>
