<template>
  <div class="flex">
    <Sidebar />
    <main :class="['w-full bg-[#f9fbfc] transition-all duration-300', isCollapsed ? 'ml-16' : 'ml-[280px]']">
      <div
        :class="[
          'fixed top-0 z-2 bg-white transition-all duration-300',
          isCollapsed ? 'w-[calc(100%-64px)]' : 'w-[calc(100%-280px)]'
        ]"
      >
        <Header />
      </div>
      <div class="mx-auto mt-[64px] w-full max-w-[1100px] p-4">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/Sidebar/Sidebar.vue'
import Header from '@/components/Dashboard/Header.vue'
import { useSidebar } from '@/composables/useSidebar'
const { isCollapsed } = useSidebar()
</script>
