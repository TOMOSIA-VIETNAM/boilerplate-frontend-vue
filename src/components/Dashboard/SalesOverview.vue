<template>
  <Card>
    <CardHeader>
      <div class="flex items-center justify-between">
        <div>
          <CardTitle class="flex items-center text-lg font-semibold">
            <BarChart3Icon class="mr-2 h-5 w-5" />
            Sales Overview
          </CardTitle>
          <div class="mt-1 flex items-center space-x-2">
            <span class="text-2xl font-bold">$9,257.51</span>
            <div class="flex items-center text-green-600">
              <ArrowUpIcon class="mr-1 h-4 w-4" />
              <span class="text-sm">15.8%</span>
            </div>
            <span class="text-sm text-gray-600">+143.5 increased</span>
          </div>
        </div>
        <div class="flex space-x-2">
          <Button variant="outline" size="sm">Filter</Button>
          <Button variant="outline" size="sm">Sort</Button>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <Bar :data="barData" :options="barOptions" class="h-64" />
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Button from '@/components/ui/Button.vue'
import { BarChart3Icon, ArrowUpIcon } from 'lucide-vue-next'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const barData = {
  labels: ['Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'China',
      data: [1195.28, 529.53, 1802.54],
      backgroundColor: '#9333ea'
    },
    {
      label: 'UE',
      data: [747.05, 617.78, 801.13],
      backgroundColor: '#a855f7'
    },
    {
      label: 'USA',
      data: [597.64, 353.02, 1001.41],
      backgroundColor: '#3b82f6'
    },
    {
      label: 'Canada',
      data: [298.82, 176.51, 280.4],
      backgroundColor: '#2dd4bf'
    },
    {
      label: 'Other',
      data: [149.41, 88.25, 120.17],
      backgroundColor: '#5eead4'
    }
  ]
}
const barOptions = {
  responsive: true,
  plugins: { legend: { display: true } },
  scales: { x: { stacked: true }, y: { stacked: true } }
}
</script>
