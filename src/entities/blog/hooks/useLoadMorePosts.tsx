import { fetchPosts } from '../api/posts'
import { useBlogStore } from '../model/useBlogStore'
import { PostWithImage } from '../types/posts'

type Props = {
  initialPosts?: PostWithImage[]
  initialHasMore?: boolean
}

export const useLoadMorePosts = ({
  initialHasMore,
  initialPosts
}: Props = {}) => {
  const pageStore = useBlogStore(state => state.page)
  const posts = useBlogStore(state => state.posts)
  const searchQuery = useBlogStore(state => state.searchQuery)
  const hasMore = useBlogStore(state => state.hasMore)
  const addPosts = useBlogStore(state => state.addPosts)
  const setPage = useBlogStore(state => state.setPage)
  const setHasMore = useBlogStore(state => state.setHasMore)

  const loadMorePosts = async ({
    page,
    limit,
    search
  }: {
    page?: number
    limit?: number
    search?: string
  } = {}) => {
    if (!hasMore) return

    const nextPage = pageStore && pageStore + 1
    const { posts: newPosts, hasMore: newHasMore } = await fetchPosts({
      page: page || nextPage,
      limit: limit || 10,
      search
    })

    addPosts(newPosts)
    setPage(nextPage)
    setHasMore(newHasMore)
  }

  const displayedPosts =
    (!posts.length && searchQuery !== '') || posts.length > 0
      ? posts
      : initialPosts
  const displayedHasMore =
    (!posts.length && searchQuery !== '') || posts.length > 0
      ? hasMore
      : initialHasMore

  return { loadMorePosts, hasMore: displayedHasMore, posts: displayedPosts }
}
