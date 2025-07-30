<template>
  <Card>
    <CardHeader>
      <div class="flex items-center justify-between">
        <CardTitle class="flex items-center text-lg font-semibold">
          <LinkIcon class="mr-2 h-5 w-5" />
          List of Integration
        </CardTitle>
        <Button variant="link" class="h-auto p-0">See All</Button>
      </div>
    </CardHeader>
    <CardContent>
      <div class="space-y-4">
        <div
          v-for="integration in integrations"
          :key="integration.name"
          class="flex items-center space-x-4 rounded-lg border p-3"
        >
          <input type="checkbox" class="rounded" />
          <div
            :class="[
              'flex h-8 w-8 items-center justify-center rounded text-sm font-bold text-white',
              integration.color
            ]"
          >
            {{ integration.name.charAt(0) }}
          </div>
          <div class="flex-1">
            <div class="mb-2 flex items-center justify-between">
              <span class="font-medium">{{ integration.name }}</span>
              <span class="text-sm text-gray-600">{{ integration.type }}</span>
            </div>
            <div class="flex items-center justify-between">
              <div class="mr-4 flex-1">
                <div class="h-2 w-full rounded-full bg-gray-200">
                  <div class="h-2 rounded-full bg-blue-500" :style="{ width: integration.rate + '%' }"></div>
                </div>
              </div>
              <span class="text-sm font-medium">{{ integration.rate }}%</span>
              <span class="text-sm font-medium">{{ integration.profit }}</span>
            </div>
          </div>
        </div>
        <Bar :data="barData" :options="barOptions" class="mt-6 h-48" />
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import CardHeader from '@/components/ui/CardHeader.vue'
import CardTitle from '@/components/ui/CardTitle.vue'
import CardContent from '@/components/ui/CardContent.vue'
import Button from '@/components/ui/Button.vue'
import { LinkIcon } from 'lucide-vue-next'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const integrations = [
  { name: 'Stripe', type: 'Finance', rate: 40, profit: '$650.00', color: 'bg-blue-500' },
  { name: 'Zapier', type: 'CRM', rate: 80, profit: '$720.50', color: 'bg-orange-500' },
  { name: 'Shopify', type: 'Marketplace', rate: 20, profit: '$432.25', color: 'bg-green-500' }
]
const barData = {
  labels: integrations.map((i) => i.name),
  datasets: [
    {
      label: 'Rate (%)',
      data: integrations.map((i) => i.rate),
      backgroundColor: '#3b82f6',
      yAxisID: 'left'
    },
    {
      label: 'Profit ($)',
      data: integrations.map((i) => parseFloat(i.profit.replace('$', '').replace(',', ''))),
      backgroundColor: '#10b981',
      yAxisID: 'right'
    }
  ]
}
const barOptions = {
  responsive: true,
  plugins: { legend: { display: true } },
  scales: {
    left: { 
      type: 'linear' as const, 
      position: 'left' as const, 
      beginAtZero: true 
    },
    right: { 
      type: 'linear' as const, 
      position: 'right' as const, 
      beginAtZero: true, 
      grid: { drawOnChartArea: false } 
    }
  }
}
</script>
