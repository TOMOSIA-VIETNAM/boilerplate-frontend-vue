import { ref } from 'vue'

const isCollapsed = ref(false)

function toggleSidebar() {
  isCollapsed.value = !isCollapsed.value
}
function collapseSidebar() {
  isCollapsed.value = true
}
function expandSidebar() {
  isCollapsed.value = false
}

export function useSidebar() {
  return {
    isCollapsed,
    toggleSidebar,
    collapseSidebar,
    expandSidebar
  }
}
