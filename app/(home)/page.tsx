import { PostList } from '@features/blog/ui'

import { fetchPosts } from '@entities/blog'

export default async function HomePage() {
  const { posts, hasMore } = await fetchPosts({ page: 1, limit: 10 })

  return <PostList initialHasMore={hasMore} initialPosts={posts} />
}
