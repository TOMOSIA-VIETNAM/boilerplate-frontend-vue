<template>
  <label :class="wrapperClass">
    <input
      ref="checkboxRef"
      type="checkbox"
      :checked="modelValue"
      :indeterminate="indeterminate"
      :disabled="disabled"
      :class="checkboxClass"
      @change="onChange"
      v-bind="$attrs"
    />
    <span
      v-if="modelValue || indeterminate"
      class="pointer-events-none absolute inset-0 flex items-center justify-center text-current"
    >
      <slot>
        <!-- Default check icon -->
        <svg
          v-if="!indeterminate"
          class="h-4 w-4"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <svg v-else class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 12h12" />
        </svg>
      </slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps<{
  modelValue?: boolean
  indeterminate?: boolean
  disabled?: boolean
  class?: string
}>()
const emit = defineEmits(['update:modelValue'])

const checkboxRef = ref<HTMLInputElement | null>(null)

watch(
  () => props.indeterminate,
  (val) => {
    if (checkboxRef.value) checkboxRef.value.indeterminate = !!val
  }
)

function onChange(e: Event) {
  const checked = (e.target as HTMLInputElement).checked
  emit('update:modelValue', checked)
}

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const wrapperClass = computed(() => 'relative inline-flex items-center')
const checkboxClass = computed(() =>
  twMerge(
    'peer border-primary ring-offset-background focus-visible:ring-ring data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground h-4 w-4 shrink-0 rounded-sm border focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 appearance-none transition-colors',
    props.class
  )
)
</script>
