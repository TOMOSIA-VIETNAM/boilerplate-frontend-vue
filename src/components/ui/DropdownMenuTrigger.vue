<template>
  <div @click.stop="toggleDropdown" class="cursor-pointer">
    <slot />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  click: []
}>()

const toggleDropdown = () => {
  emit('click')
}
</script>
