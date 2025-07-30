<template>
  <div class="mb-6 flex items-center justify-between">
    <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
    <div class="flex items-center space-x-4">
      <span class="text-sm font-medium text-gray-600">Oct 18 - Nov 18</span>
      <Select v-model="selected" class="w-32">
        <SelectOption value="daily">Daily</SelectOption>
        <SelectOption value="weekly">Weekly</SelectOption>
        <SelectOption value="monthly">Monthly</SelectOption>
      </Select>
      <Button variant="outline" size="sm">Filter</Button>
      <Button variant="outline" size="sm">Export</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import Select from '@/components/ui/Select.vue'
import SelectOption from '@/components/ui/SelectOption.vue'
const selected = ref('monthly')
</script>
