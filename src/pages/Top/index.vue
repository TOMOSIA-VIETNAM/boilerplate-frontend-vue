<template>
  <div class="space-y-6">
    <DashboardControls />
    <SummaryCards />
    <div class="grid grid-cols-2 gap-6">
      <SalesOverview />
      <TotalSubscriber />
    </div>
    <div class="grid grid-cols-2 gap-6">
      <SalesDistribution />
      <IntegrationList />
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardControls from '@/components/Dashboard/DashboardControls.vue'
import SummaryCards from '@/components/Dashboard/SummaryCards.vue'
import SalesOverview from '@/components/Dashboard/SalesOverview.vue'
import TotalSubscriber from '@/components/Dashboard/TotalSubscriber.vue'
import SalesDistribution from '@/components/Dashboard/SalesDistribution.vue'
import IntegrationList from '@/components/Dashboard/IntegrationList.vue'
</script>
