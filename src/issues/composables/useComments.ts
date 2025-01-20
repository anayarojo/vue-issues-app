import { githubApi } from 'src/api/github.api'
import { ONE_HOUR } from 'src/shared/constants/time'
import { useQuery } from '@tanstack/vue-query'
import type { Comment } from '../interfaces/comment.interface'

const getComments = async (issueNumber: number) => {
  const { data } = await githubApi.get<Comment[]>(`/issues/${issueNumber}/comments`)
  return data
}

const useComments = (issueNumber: number) => {
  const { data, isLoading } = useQuery({
    queryKey: ['comments', issueNumber],
    queryFn: () => getComments(issueNumber),
    staleTime: ONE_HOUR,
  })

  return {
    // State
    isLoading,
    comments: data,
  }
}

export default useComments
