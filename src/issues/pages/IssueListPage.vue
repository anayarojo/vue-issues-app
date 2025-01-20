<script lang="ts" setup>
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue'
import FilterSelector from 'src/issues/components/filter-selector/FilterSelector.vue'
import IssueList from 'src/issues/components/issue-list/IssueList.vue'
import useIssues from '../composables/useIssues'

const { isLoading, issues } = useIssues()
</script>

<template>
  <div class="row q-mb-md">
    <div class="col-12">
      <span class="text-h4">Issues</span>
    </div>
  </div>
  <div class="row">
    <div class="col-xs-12 col-md-4">
      <!-- Filters -->
      <FilterSelector />
    </div>
    <div class="col-xs-12 col-md-8">
      <LoaderSpinner v-if="isLoading" />
      <IssueList v-else-if="issues" :issues="issues!" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
