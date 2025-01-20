<script setup lang="ts">
import useLabels from 'src/issues/composables/useLabels'
import IssueLabel from 'src/issues/components/IssueLabel.vue'
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue'

const { isLoading, labels, toggleLabel, isSelectedLabel } = useLabels()
</script>

<template>
  <div class="q-mt-md">
    <LoaderSpinner v-if="isLoading" size="50px" :thickness="3" :show-text="false" />
    <IssueLabel
      v-for="label in labels"
      :key="label.id"
      :label="label"
      :dark-mode="true"
      :is-selected="isSelectedLabel(label.name)"
      @toggle-label="(labelName: string) => toggleLabel(labelName)"
    ></IssueLabel>
  </div>
</template>
