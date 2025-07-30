<template>
  <div
    class="mb-8 flex h-[64px] max-h-[64px] flex-1 items-center justify-between space-x-4 border-b border-[#f1f1f1] p-4"
  >
    <div class="flex items-center space-x-2">
      <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-blue-500 to-purple-600">
        <span class="text-sm font-bold text-white">T</span>
      </div>
      <span v-if="!isCollapsed" class="text-lg font-bold text-gray-900">Tomosia</span>
    </div>
    <Button
      v-if="!isCollapsed"
      variant="outline"
      size="sm"
      class="h-8 w-8 bg-gray-100 hover:bg-gray-200"
      @click="toggleSidebar"
    >
      <ArrowLeftToLine class="h-4 w-4" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { ArrowLeftToLine } from 'lucide-vue-next'
import { useSidebar } from '@/composables/useSidebar'
const { isCollapsed, toggleSidebar } = useSidebar()
</script>
