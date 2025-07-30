<template>
  <RouterLink :to="href || '/'">
    <Button
      variant="ghost"
      :class="buttonClasses"
      :title="isCollapsed ? label : undefined"
    >
      <component :is="icon" :class="['h-4 w-4', isCollapsed ? '' : 'mr-3']" />
      <template v-if="!isCollapsed">
        {{ label }}
        <Badge
          v-if="badge"
          :variant="badgeVariant"
          :class="badgeClasses"
        >
          {{ badge }}
        </Badge>
      </template>
    </Button>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import Badge from '@/components/ui/Badge.vue'
import { useSidebar } from '@/composables/useSidebar'

const props = defineProps<{
  icon: any
  label: string
  badge?: string
  badgeVariant?: 'default' | 'secondary'
  href?: string
}>()

const { isCollapsed } = useSidebar()
const route = useRoute()
const isActive = computed(() => route.path === (props.href || '/'))

const buttonClasses = computed(() => [
  'h-10 cursor-pointer justify-start px-3 text-sm font-normal transition-all duration-300',
  isActive.value ? 'bg-[#f5f7f9] text-gray-900 hover:bg-[#f5f7f9]' : 'text-gray-600 hover:bg-gray-50',
  props.badge ? 'relative' : '',
  isCollapsed.value ? 'mx-auto w-10 justify-center px-0' : 'w-full'
].join(' '))

const badgeClasses = computed(() => [
  'ml-auto h-5 w-5 p-0 text-xs',
  props.badgeVariant === 'default' ? 'rounded-full bg-gray-700' : 'rounded-md bg-purple-100 text-purple-700'
].join(' '))
</script>
