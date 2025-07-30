<template>
  <div :class="cardClass" data-slot="card">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ class?: string }>()

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const cardClass = computed(() =>
  twMerge('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6', props.class)
)
</script>
