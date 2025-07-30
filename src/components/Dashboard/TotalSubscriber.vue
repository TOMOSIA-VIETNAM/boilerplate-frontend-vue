<template>
  <Card>
    <CardHeader>
      <div class="flex items-center justify-between">
        <div>
          <CardTitle class="flex items-center text-lg font-semibold">
            <UsersIcon class="mr-2 h-5 w-5" />
            Total Subscriber
          </CardTitle>
          <div class="mt-1 flex items-center space-x-2">
            <span class="text-2xl font-bold">24,473</span>
            <div class="flex items-center text-green-600">
              <ArrowUpIcon class="mr-1 h-4 w-4" />
              <span class="text-sm">8.3%</span>
            </div>
            <span class="text-sm text-gray-600">+749 increased</span>
          </div>
        </div>
        <Select v-model="selected" class="w-24">
          <SelectOption value="daily">Daily</SelectOption>
          <SelectOption value="weekly">Weekly</SelectOption>
          <SelectOption value="monthly">Monthly</SelectOption>
        </Select>
      </div>
    </CardHeader>
    <CardContent>
      <Line :data="lineData" :options="lineOptions" class="h-48" />
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
import { UsersIcon, ArrowUpIcon } from 'lucide-vue-next'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const selected = ref('weekly')
const lineData = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      label: 'Subscribers',
      data: [2850, 3200, 3874, 3100, 3400, 3600, 2900],
      borderColor: '#8b5cf6',
      backgroundColor: 'rgba(139, 92, 246, 0.3)',
      fill: true,
      tension: 0.4
    }
  ]
}
const lineOptions = {
  responsive: true,
  plugins: { legend: { display: false } },
  scales: { x: { display: false }, y: { display: false } }
}
</script>
