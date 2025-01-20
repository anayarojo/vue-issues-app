<script lang="ts" setup>
defineProps({
  color: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: '3rem',
  },
  thickness: {
    type: Number,
    default: 5,
  },
  text: {
    type: String,
    default: 'Loading...',
  },
  showText: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="column items-center">
    <q-spinner :color="color" :size="size" :thickness="thickness" />
    <span v-if="showText">{{ text }}</span>
  </div>
</template>
