<template>
  <Card>
    <CardHeader>
      <div class="flex items-center justify-between">
        <CardTitle class="flex items-center text-lg font-semibold">
          <PieChartIcon class="mr-2 h-5 w-5" />
          Sales Distribution
        </CardTitle>
        <Select v-model="selected" class="w-24">
          <SelectOption value="daily">Daily</SelectOption>
          <SelectOption value="weekly">Weekly</SelectOption>
          <SelectOption value="monthly">Monthly</SelectOption>
        </Select>
      </div>
    </CardHeader>
    <CardContent>
      <div class="space-y-4">
        <div class="flex items-center justify-between">
          <span class="text-sm">Website ($374.82)</span>
          <span class="text-sm font-medium">45%</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm">Mobile App ($241.60)</span>
          <span class="text-sm font-medium">29%</span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-sm">Other ($213.42)</span>
          <span class="text-sm font-medium">26%</span>
        </div>
        <Pie :data="pieData" :options="pieOptions" class="h-32" />
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Select from '@/components/ui/Select.vue'
import SelectOption from '@/components/ui/SelectOption.vue'
import { PieChartIcon } from 'lucide-vue-next'
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, ArcElement)

const selected = ref('monthly')
const pieData = {
  labels: ['Website', 'Mobile App', 'Other'],
  datasets: [
    {
      label: 'Sales',
      data: [374.82, 241.6, 213.42],
      backgroundColor: ['#8b5cf6', '#2dd4bf', '#d1d5db']
    }
  ]
}
const pieOptions = {
  responsive: true,
  plugins: { legend: { display: false } }
}
</script>
