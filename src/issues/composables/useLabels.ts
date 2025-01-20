import { useQuery } from '@tanstack/vue-query'
import { githubApi } from 'src/api/github.api'
import type { Label } from '../interfaces/label.interfaces'
import { useIssuesStore } from 'src/stores/issues.store'
import { computed } from 'vue'
import { ONE_HOUR } from 'src/shared/constants/time'

const getLabels = async () => {
  const params = new URLSearchParams()
  params.append('per_page', '100')

  const { data } = await githubApi.get<Label[]>('/labels', { params })
  return data
}

const useLabels = () => {
  const issuesStore = useIssuesStore()

  const { data, isLoading } = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    staleTime: ONE_HOUR,
  })

  return {
    // State
    isLoading,
    labels: data,

    // Getters
    selectedLabels: computed(() => issuesStore.labels),

    // Methods
    toggleLabel: issuesStore.toggleLabel,
    isSelectedLabel: (labelName: string) => issuesStore.labels.includes(labelName),
  }
}

export default useLabels
