<template>
  <div
    class="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8"
    style="background-image: radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0); background-size: 20px 20px"
  >
    <div class="w-full max-w-md space-y-8">
      <div class="text-center">
        <h1 class="text-2xl font-bold">Welcome back!</h1>
      </div>
      <div class="rounded-lg bg-white p-8 shadow-sm">
        <!-- Login Form -->
        <form class="space-y-6" novalidate @submit="submitForm">
          <!-- Email Field -->
          <div>
            <label for="email" class="mb-2 block text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              v-model="username"
              placeholder="Enter your email address"
              class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-xs focus:border-gray-500 focus:ring-gray-500 focus:outline-none sm:text-sm"
            />
            <div v-if="errors.username" class="mt-1 text-sm text-red-600">
              {{ errors.username }}
            </div>
          </div>

          <!-- Password Field -->
          <div>
            <label for="password" class="mb-2 block text-sm font-medium text-gray-700">Password</label>
            <div class="relative">
              <input
                id="password"
                name="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                required
                v-model="password"
                placeholder="Enter your password"
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 pr-10 placeholder-gray-400 shadow-xs focus:border-gray-500 focus:ring-gray-500 focus:outline-none sm:text-sm"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <span class="text-gray-400 hover:text-gray-600">
                  <EyeOff v-if="showPassword" class="h-4 w-4" />
                  <Eye v-else class="h-4 w-4" />
                </span>
              </button>
            </div>
            <div class="mt-2 flex items-center justify-between">
              <div></div>
              <a href="#" class="text-sm text-blue-600 hover:text-blue-500">Forgot password?</a>
            </div>
            <div v-if="errors.password" class="mt-1 text-sm text-red-600">
              {{ errors.password }}
            </div>
          </div>

          <!-- Login Button -->
          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-gray-800 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
            >
              Log In
            </button>
          </div>
        </form>

        <!-- Separator -->
        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="bg-white px-2 text-gray-500">OR</span>
          </div>
        </div>

        <!-- Social Login Buttons -->
        <div class="space-y-3">
          <button
            type="button"
            class="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
          >
            <Chrome class="h-4 w-4" />
            Continue with Google
          </button>
        </div>

        <!-- Sign Up Prompt -->
        <div class="mt-8 text-center">
          <p class="text-sm text-gray-600">
            Don't have an account yet?
            <a href="#" class="font-medium text-blue-600 hover:text-blue-500">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { login } from '@/apis/auth.api'
import { loginSchema, type TLoginSchema } from '@/schemas/auth.schema'
import type { TLoginPayload } from '@/types/auth.type'
import { setAccessTokenToLocalStorage } from '@/utils/localStorage'
import { useMutation } from '@tanstack/vue-query'
import type { AxiosError } from 'axios'
import { useForm } from 'vee-validate'
import { useRouter } from 'vue-router'
import { Chrome } from 'lucide-vue-next'
import { EyeOff, Eye } from 'lucide-vue-next'

const router = useRouter()
const showPassword = ref(false)

const { defineField, errors, handleSubmit, setFieldError } = useForm<TLoginSchema>({
  validationSchema: loginSchema,
  initialValues: {
    username: 'admin',
    password: 'password'
  }
})

const loginMutation = useMutation({
  mutationFn: (values: TLoginPayload) => login(values)
})

const [username] = defineField('username')
const [password] = defineField('password')

const submitForm = handleSubmit((values) => {
  if (values.username === 'admin' && values.password === 'password') {
    setAccessTokenToLocalStorage('accessToken')
    router.push({ name: 'top' })
    return
  }

  loginMutation.mutate(values, {
    onSuccess: (response) => {
      const { accessToken } = response.data
      setAccessTokenToLocalStorage(accessToken)
      router.push({ name: 'top' })
    },
    onError: (error) => {
      const errorMessage = (error as AxiosError<{ message: string }>).response?.data.message
      setFieldError('password', errorMessage)
    }
  })
})
</script>
