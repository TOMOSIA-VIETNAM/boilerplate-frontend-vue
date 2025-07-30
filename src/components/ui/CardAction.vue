<template>
  <div :class="actionClass" data-slot="card-action">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ class?: string }>()

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const actionClass = computed(() =>
  twMerge('col-start-2 row-span-2 row-start-1 self-start justify-self-end', props.class)
)
</script>
