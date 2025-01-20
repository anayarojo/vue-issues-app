import { githubApi } from 'src/api/github.api'
import { ONE_HOUR } from 'src/shared/constants/time'
import { useQuery } from '@tanstack/vue-query'
import { State, type Issue } from '../interfaces/issue.interface'
import { storeToRefs } from 'pinia'
import { useIssuesStore } from 'src/stores/issues.store'

const getIssues = async (labels: string[], state: State) => {
  const params = new URLSearchParams()
  params.append('per_page', '10')

  if (labels.length) {
    params.append('labels', labels.join(','))
  }

  if (state !== State.All) {
    params.append('state', state)
  }

  const { data } = await githubApi.get<Issue[]>('/issues', { params })
  return data
}

const useIssues = () => {
  const issuesStore = useIssuesStore()
  const { labels, state } = storeToRefs(issuesStore)

  const { data, isLoading } = useQuery({
    queryKey: ['issues', { labels, state }],
    queryFn: () => getIssues(labels.value, state.value),
    staleTime: ONE_HOUR,
  })

  return {
    // State
    isLoading,
    issues: data,
  }
}

export default useIssues
