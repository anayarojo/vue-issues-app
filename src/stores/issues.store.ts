import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { State } from 'src/issues/interfaces/issue.interface'

export const useIssuesStore = defineStore('issues', () => {
  const state = ref<State>(State.All)
  const labels = ref<string[]>([])

  const toggleLabel = (label: string) => {
    if (labels.value.includes(label)) {
      labels.value = labels.value.filter((l) => l !== label)
    } else {
      labels.value.push(label)
    }
  }

  return {
    // State
    state,
    labels,

    // Getters

    // Actions
    toggleLabel,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useIssuesStore, import.meta.hot))
}
