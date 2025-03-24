'use client'
import { useEffect, useState } from 'react'

import { fetchPosts } from '../api/posts'
import { useBlogStore } from '../model/useBlogStore'

export const useFetchPosts = ({
  page,
  limit,
  search,
  enable = true
}: {
  page?: number
  limit?: number
  search?: string
  enable?: boolean
}) => {
  const setPosts = useBlogStore(state => state.setPosts)
  const posts = useBlogStore(state => state.posts)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    if (!enable) return
    const fetchData = async () => {
      try {
        const result = await fetchPosts({ page, limit, search })
        setPosts(result.posts)
      } catch (err) {
        setError(err as Error)
      }
    }

    fetchData()
  }, [page, limit, search])

  return { posts, error }
}
