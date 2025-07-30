import type { TUser } from '@/types/auth.type'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { removeAccessTokenFromLocalStorage } from '@/utils/localStorage'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<TUser | null>(null)

  const isAuthenticated = computed(() => !!user.value)

  const setUser = (userData: TUser) => {
    user.value = userData
  }

  const clearUser = () => {
    user.value = null
  }

  const logout = () => {
    removeAccessTokenFromLocalStorage()
    clearUser()
  }

  return {
    user,
    isAuthenticated,
    setUser,
    clearUser,
    logout
  }
})
