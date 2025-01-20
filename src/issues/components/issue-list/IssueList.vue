<script setup lang="ts">
import type { Issue } from 'src/issues/interfaces/issue.interface'
import IssueCard from './IssueCard.vue'

interface Props {
  issues: Issue[]
}

defineProps<Props>()
</script>

<template>
  <div class="row">
    <IssueCard v-for="issue of issues" :key="issue.id" :issue="issue" />
  </div>
</template>
