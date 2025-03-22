import { useEffect, useRef } from 'react'

import { fetchPosts, useBlogStore } from '@entities/blog'

export const useLoadMore = () => {
  const page = useBlogStore(state => state.page)
  const hasMore = useBlogStore(state => state.hasMore)
  const addPosts = useBlogStore(state => state.addPosts)
  const setPage = useBlogStore(state => state.setPage)
  const setHasMore = useBlogStore(state => state.setHasMore)

  const loadMoreRef = useRef<HTMLDivElement>(null)

  const loadMorePosts = async () => {
    if (!hasMore) return

    const nextPage = page + 1
    const { posts: newPosts, hasMore: newHasMore } = await fetchPosts({
      page: nextPage,
      limit: 10
    })

    addPosts(newPosts)
    setPage(nextPage)
    setHasMore(newHasMore)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore) {
          loadMorePosts()
        }
      },
      { threshold: 1 }
    )

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current)
    }

    return () => observer.disconnect()
  }, [hasMore, page])

  return { loadMoreRef }
}
