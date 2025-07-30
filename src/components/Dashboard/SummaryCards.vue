<template>
  <div class="mb-8 grid grid-cols-3 gap-6">
    <!-- Page Views Card -->
    <Card>
      <CardHeader class="pb-2">
        <CardTitle class="flex items-center justify-between text-sm font-medium text-gray-600">
          <div class="flex items-center">
            <EyeIcon class="mr-2 h-4 w-4" />
            Page Views
          </div>
          <InfoIcon class="h-4 w-4 text-gray-400" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div class="mb-4 flex items-center justify-between">
          <span class="text-2xl font-bold">12,450</span>
          <div class="flex items-center text-green-600">
            <ArrowUpIcon class="mr-1 h-4 w-4" />
            <span class="text-sm">15.8%</span>
          </div>
        </div>
        <Line :data="pageViewsData" :options="lineOptions" class="h-16" />
      </CardContent>
    </Card>
    <!-- Total Revenue Card -->
    <Card>
      <CardHeader class="pb-2">
        <CardTitle class="flex items-center justify-between text-sm font-medium text-gray-600">
          <div class="flex items-center">
            <DollarSignIcon class="mr-2 h-4 w-4" />
            Total Revenue
          </div>
          <InfoIcon class="h-4 w-4 text-gray-400" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div class="mb-4 flex items-center justify-between">
          <span class="text-2xl font-bold">$363.95</span>
          <div class="flex items-center text-red-600">
            <ArrowDownIcon class="mr-1 h-4 w-4" />
            <span class="text-sm">34.0%</span>
          </div>
        </div>
        <Line :data="revenueData" :options="lineOptions" class="h-16" />
      </CardContent>
    </Card>
    <!-- Bounce Rate Card -->
    <Card>
      <CardHeader class="pb-2">
        <CardTitle class="flex items-center justify-between text-sm font-medium text-gray-600">
          <div class="flex items-center">
            <ClockIcon class="mr-2 h-4 w-4" />
            Bounce Rate
          </div>
          <InfoIcon class="h-4 w-4 text-gray-400" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div class="mb-4 flex items-center justify-between">
          <span class="text-2xl font-bold">86.5%</span>
          <div class="flex items-center text-green-600">
            <ArrowUpIcon class="mr-1 h-4 w-4" />
            <span class="text-sm">24.2%</span>
          </div>
        </div>
        <Line :data="bounceRateData" :options="lineOptions" class="h-16" />
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardContent from '@/components/ui/CardContent.vue'
import { EyeIcon, InfoIcon, ArrowUpIcon, ArrowDownIcon, DollarSignIcon, ClockIcon } from 'lucide-vue-next'
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

const pageViewsData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Page Views',
      data: [1200, 1350, 1100, 1400, 1600, 1800, 12450],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.3)',
      fill: true,
      tension: 0.4
    }
  ]
}
const revenueData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Revenue',
      data: [45, 52, 38, 48, 55, 42, 363.95],
      borderColor: '#ef4444',
      backgroundColor: 'rgba(239, 68, 68, 0.3)',
      fill: true,
      tension: 0.4
    }
  ]
}
const bounceRateData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Bounce Rate',
      data: [82, 85, 88, 84, 87, 89, 86.5],
      borderColor: '#10b981',
      backgroundColor: 'rgba(16, 185, 129, 0.3)',
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
