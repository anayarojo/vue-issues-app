import { githubApi } from 'src/api/github.api'
import { ONE_HOUR } from 'src/shared/constants/time'
import { useQuery, useQueryClient } from '@tanstack/vue-query'
import type { Issue } from '../interfaces/issue.interface'

export const getIssue = async (issueNumber: number) => {
  const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`)
  return data
}

export interface UseIssueOptions {
  autoload: boolean
}

const useIssue = (issueNumber: number, options?: UseIssueOptions) => {
  const queryClient = useQueryClient()
  const { autoload = true } = options || {}

  const { data, isLoading } = useQuery({
    queryKey: ['issues', issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: ONE_HOUR,
    enabled: autoload,
  })

  const prefetchIssue = (issueNumber: number) => {
    queryClient.prefetchQuery({
      queryKey: ['issues', issueNumber],
      queryFn: () => getIssue(issueNumber),
    })
  }

  const setIssueCache = (issueNumber: number, issue: Issue) => {
    queryClient.setQueryData(['issues', issueNumber], issue)
  }

  return {
    // State
    isLoading,
    issue: data,

    // Methods
    prefetchIssue,
    setIssueCache,
  }
}

export default useIssue
