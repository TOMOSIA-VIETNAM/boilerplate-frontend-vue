<template>
  <div :class="['mt-auto flex-1 pt-6 pb-2', isCollapsed ? 'px-2' : 'px-4']">
    <div :class="['mb-4 rounded-lg bg-teal-50 p-3', isCollapsed ? 'flex justify-center' : '']">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <GemIcon class="h-4 w-4 text-gray-500" />
          <template v-if="!isCollapsed">
            <div>
              <div class="text-xs text-gray-500">Team</div>
              <div class="text-sm font-medium text-gray-900">Marketing</div>
            </div>
          </template>
        </div>
        <Button v-if="!isCollapsed" variant="ghost" size="sm" class="h-6 w-6 p-0">
          <ChevronDownIcon class="h-3 w-3" />
        </Button>
      </div>
    </div>
    <template v-if="!isCollapsed">
      <Button class="mb-4 h-10 w-full rounded-lg bg-gray-800 text-white hover:bg-gray-900" variant="default">
        Upgrade Plan
      </Button>
      <p class="text-center text-xs text-gray-500">@2025 Tomosia.io, Inc.</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { GemIcon, ChevronDownIcon } from 'lucide-vue-next'
import { useSidebar } from '@/composables/useSidebar'
const { isCollapsed } = useSidebar()
</script>
