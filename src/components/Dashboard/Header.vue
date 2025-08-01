<template>
  <header class="flex h-16 w-full items-center justify-between border-b border-[#f1f1f1] bg-white px-6">
    <div class="flex items-center space-x-4">
      <div v-if="isCollapsed">
        <Button variant="outline" size="sm" @click="toggleSidebar" class="h-9 w-9 p-0 hover:bg-gray-100">
          <ArrowRightToLine class="h-4 w-4" />
        </Button>
      </div>
      <div class="relative flex items-center">
        <SearchIcon class="absolute left-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search"
          class="h-9 w-80 rounded-full border-gray-200 bg-gray-50 pr-20 pl-10 focus:bg-white"
        />
        <span class="absolute right-3 text-xs text-gray-500">⌘ + F</span>
      </div>
    </div>
    <div class="flex items-center space-x-3">
      <Button variant="ghost" size="sm" class="h-9 w-9 p-0">
        <GiftIcon class="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm" class="relative h-9 w-9 p-0">
        <BellIcon class="h-4 w-4" />
        <Badge class="absolute -top-1 -right-1 h-4 w-4 bg-red-500 p-0 text-xs">4</Badge>
      </Button>
      <Button variant="ghost" size="sm" class="h-9 w-9 p-0">
        <PlusIcon class="h-4 w-4" />
      </Button>

      <!-- Dropdown/Profile -->
      <div class="dropdown-menu relative">
        <Button variant="ghost" class="h-auto p-2" ref="dropdownTrigger" @click.stop="toggleDropdown">
          <div class="flex items-center space-x-3">
            <Avatar class="h-8 w-8">
              <AvatarFallback class="text-sm">T</AvatarFallback>
            </Avatar>
          </div>
        </Button>
        <DropdownMenuContent :isOpen="isDropdownOpen" align="end" class="w-56">
          <DropdownMenuLabel>
            <div class="flex flex-col space-y-1">
              <p class="text-sm leading-none font-medium">Young Alaska</p>
              <p class="text-xs leading-none text-gray-500">young.alaska@example.com</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem @click="navigateToProfile">
            <UserIcon class="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem @click="navigateToSettings">
            <SettingsIcon class="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive" @click="handleLogout">
            <LogOutIcon class="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useSidebar } from '@/composables/useSidebar'
import { useAuthStore } from '@/stores/auth.store'
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue'
import Badge from '@/components/ui/Badge.vue'
import Avatar from '@/components/ui/Avatar.vue'
import AvatarFallback from '@/components/ui/AvatarFallback.vue'
import DropdownMenuContent from '@/components/ui/DropdownMenuContent.vue'
import DropdownMenuItem from '@/components/ui/DropdownMenuItem.vue'
import DropdownMenuLabel from '@/components/ui/DropdownMenuLabel.vue'
import DropdownMenuSeparator from '@/components/ui/DropdownMenuSeparator.vue'
import {
  ArrowRightToLine,
  GiftIcon,
  BellIcon,
  PlusIcon,
  SearchIcon,
  UserIcon,
  SettingsIcon,
  LogOutIcon
} from 'lucide-vue-next'

const router = useRouter()
const { isCollapsed, toggleSidebar } = useSidebar()
const authStore = useAuthStore()
const isDropdownOpen = ref(false)
const dropdownTrigger = ref<HTMLElement>()

const toggleDropdown = () => {
  
  isDropdownOpen.value = !isDropdownOpen.value
  
}

const navigateToProfile = () => {
  isDropdownOpen.value = false
  
}

const navigateToSettings = () => {
  isDropdownOpen.value = false
  
}

const handleLogout = () => {
  isDropdownOpen.value = false
  authStore.logout()
  router.push('/login')
}

// Close dropdown when clicking outside
const handleClickOutside = (event: Event) => {
  const target = event.target as HTMLElement
  if (isDropdownOpen.value && !target.closest('.dropdown-menu') && !dropdownTrigger.value?.contains(target)) {
    isDropdownOpen.value = false
  }
}

// Add click outside listener
document.addEventListener('click', handleClickOutside)
</script>
