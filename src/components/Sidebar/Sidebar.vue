<template>
  <aside
    :class="[
      'items-between fixed top-0 left-0 flex h-screen min-h-screen shrink-0 flex-col overflow-hidden border-r border-[#f1f1f1] bg-white transition-all duration-300',
      isCollapsed ? 'w-16' : 'w-[280px]'
    ]"
  >
    <Logo />
    <nav class="space-y-6 overflow-y-auto px-4">
      <NavigationSection title="GENERAL">
        <NavigationItem :icon="BarChart3Icon" label="Dashboard" href="/" />
        <NavigationItem :icon="Clipboard" label="Template" href="/template" />
        <NavigationItem :icon="UsersIcon" label="Customers" href="/customers" />
        <NavigationItem :icon="MessageSquareIcon" label="Message" badge="8" badge-variant="default" href="/message" />
      </NavigationSection>
      <NavigationSection title="TOOLS">
        <NavigationItem :icon="CheckSquareIcon" label="Product" href="/product" />
        <NavigationItem :icon="FileTextIcon" label="Invoice" href="/invoice" />
        <NavigationItem :icon="TrendingUpIcon" label="Analytics" href="/analytics" />
        <NavigationItem :icon="ZapIcon" label="Automation" href="/automation" />
      </NavigationSection>
      <NavigationSection title="SUPPORT">
        <NavigationItem :icon="SettingsIcon" label="Settings" href="/settings" />
        <NavigationItem :icon="ShieldIcon" label="Security" href="/security" />
        <NavigationItem :icon="HelpCircleIcon" label="Help" href="/help" />
      </NavigationSection>
    </nav>
    <TeamSection />
  </aside>
</template>

<script setup lang="ts">
import Logo from './Logo.vue'
import NavigationSection from './NavigationSection.vue'
import NavigationItem from './NavigationItem.vue'
import TeamSection from './TeamSection.vue'
import { useSidebar } from '@/composables/useSidebar'
import {
  BarChart3Icon,
  CheckSquareIcon,
  Clipboard,
  FileTextIcon,
  HelpCircleIcon,
  MessageSquareIcon,
  SettingsIcon,
  ShieldIcon,
  TrendingUpIcon,
  UsersIcon,
  ZapIcon
} from 'lucide-vue-next'
const { isCollapsed } = useSidebar()
</script>
