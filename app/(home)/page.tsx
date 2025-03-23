import { Fragment } from 'react'

import { Metadata } from 'next'

import { PostList } from '@features/blog/ui'
import { SearchBar } from '@features/search'

import { fetchPosts } from '@entities/blog'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the blog'
}

export default async function HomePage() {
  const { posts, hasMore } = await fetchPosts({ page: 1, limit: 10 })

  return (
    <Fragment>
      <SearchBar />
      <PostList initialHasMore={hasMore} initialPosts={posts} />
    </Fragment>
  )
}
