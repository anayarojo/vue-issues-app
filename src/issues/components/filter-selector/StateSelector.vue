<script setup lang="ts">
import { State } from 'src/issues/interfaces/issue.interface'
import { useIssuesStore } from 'src/stores/issues.store'

const issuesStore = useIssuesStore()

const states = [
  { label: 'Open', value: State.Open },
  { label: 'Closed', value: State.Closed },
  { label: 'All', value: State.All },
]
</script>

<template>
  <q-btn-toggle v-model="issuesStore.state" toggle-color="primary" :options="states" spread />
</template>
