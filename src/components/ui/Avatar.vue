<template>
  <div :class="avatarClass" data-slot="avatar">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ class?: string }>()

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const avatarClass = computed(() => twMerge('relative flex size-8 shrink-0 overflow-hidden rounded-full', props.class))
</script>
