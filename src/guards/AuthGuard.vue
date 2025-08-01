<template>
  <RouterView v-if="isReady" />
</template>

<script setup lang="ts">
import { getAccessTokenFromLocalStorage } from '@/utils/localStorage'
import { useAuthStore } from '@/stores/auth.store'
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const withoutAuthRoutes = ['/login']
const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

const isReady = ref(false)

const isAuthenticated = computed(() => {
  const token = getAccessTokenFromLocalStorage()
  return !!token
})

watch(
  isAuthenticated,
  (authenticated) => {


    if (!authenticated && !withoutAuthRoutes.includes(route.path)) {
      // Not authenticated and trying to access protected route

      router.push('/login')
    }

    if (authenticated && withoutAuthRoutes.includes(route.path)) {
      // Authenticated and trying to access login page

      router.push('/')
    }

    isReady.value = true
  },
  { immediate: true }
)

// Set user data if authenticated
watch(isAuthenticated, (authenticated) => {
  if (authenticated) {
    // Set a default user object when authenticated
    authStore.setUser({
      username: 'admin',
      email: 'admin@example.com',
      firstName: 'Admin',
      lastName: 'User'
    })
  } else {
    authStore.clearUser()
  }
})
</script>
