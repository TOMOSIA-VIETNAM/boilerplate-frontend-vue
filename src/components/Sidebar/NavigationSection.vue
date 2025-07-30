<template>
  <div :class="isCollapsed ? 'flex flex-col items-center' : ''">
    <h3 v-if="!isCollapsed" class="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">{{ title }}</h3>
    <div :class="['space-y-1', isCollapsed ? 'flex flex-col items-center' : '']">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSidebar } from '@/composables/useSidebar'
const { isCollapsed } = useSidebar()

defineProps<{ title: string }>()
</script>
