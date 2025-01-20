<script setup lang="ts">
import type { Label } from 'src/issues/interfaces/label.interfaces'
import { getBrightness, hexToRgb } from 'src/shared/helpers/color'
import { computed } from 'vue'

interface Props {
  label: Label
  isSelected: boolean
  darkMode?: boolean
}

const { label, isSelected, darkMode = true } = defineProps<Props>()
const emit = defineEmits(['toggleLabel'])

const labelStyle = computed(() => {
  return darkMode ? getDarkModeLabelStyle() : getLightModeLabelStyle()
})

const getLightModeLabelStyle = () => {
  const labelColor = `#${label.color}`
  const { r, g, b } = hexToRgb(label.color)
  const brightness = getBrightness(r, g, b)

  if (!isSelected) {
    return {
      color: brightness > 0.5 ? '#000' : labelColor,
      borderColor: brightness > 0.5 ? '#000' : labelColor,
    }
  }

  const textColor = '#fff'
  const borderColor = brightness > 0.5 ? '#000' : labelColor

  return {
    color: textColor,
    backgroundColor: borderColor,
    border: `1px solid ${borderColor}`,
  }
}

const getDarkModeLabelStyle = () => {
  const labelColor = `#${label.color}`

  const { r, g, b } = hexToRgb(label.color)
  const brightness = getBrightness(r, g, b)

  if (!isSelected) {
    return {
      color: brightness > 0.5 ? labelColor : '#fff',
      borderColor: labelColor,
    }
  }

  const textColor = brightness > 0.5 ? '#000' : '#fff'
  const borderColor = brightness > 0.5 ? labelColor : '#fff'

  return {
    color: textColor,
    backgroundColor: labelColor,
    border: `1px solid ${borderColor}`,
  }
}
</script>

<template>
  <div>
    <q-chip
      :style="labelStyle"
      :outline="!isSelected"
      @click="() => emit('toggleLabel', label.name)"
      clickable
    >
      {{ label.name }}
    </q-chip>
  </div>
</template>
