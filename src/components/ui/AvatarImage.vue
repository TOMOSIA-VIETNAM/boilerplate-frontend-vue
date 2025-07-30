<template>
  <img :class="imageClass" data-slot="avatar-image" v-bind="$attrs" />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ class?: string }>()

function twMerge(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

const imageClass = computed(() => twMerge('aspect-square size-full', props.class))
</script>
