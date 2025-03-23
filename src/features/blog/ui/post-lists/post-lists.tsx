'use client'
import { useEffect } from 'react'

import classNames from 'classnames'

import {
  type PostWithImage,
  useBlogStore,
  useLoadMorePosts
} from '@entities/blog'
import { PostItem } from '@entities/blog/ui/post-item'

import { InfiniteScrollTrigger } from '@shared/ux/infinite-scroll-trigger'
import { ListRenderer } from '@shared/ux/list-renderer'

interface PostListProps {
  initialPosts: PostWithImage[]
  initialHasMore: boolean
}

export const PostList = ({ initialPosts, initialHasMore }: PostListProps) => {
  const searchQuery = useBlogStore(state => state.searchQuery)
  const setPosts = useBlogStore(state => state.setPosts)
  const setHasMore = useBlogStore(state => state.setHasMore)

  const { posts, hasMore, loadMorePosts } = useLoadMorePosts({
    initialHasMore,
    initialPosts
  })

  // set initial posts and hasMore in store
  useEffect(() => {
    if (searchQuery === '') {
      setPosts(initialPosts)
      setHasMore(initialHasMore)
    }
  }, [])

  if (!posts?.length && searchQuery !== '') {
    return (
      <div className={classNames('p-4', 'sm:p-6', 'lg:p-8')}>
        <p className={'text-lg font-semibold dark:text-gray-300'}>
          No posts found for the search query &quot;{searchQuery}&quot;
        </p>
      </div>
    )
  }

  return (
    <div className={classNames('space-y-6 p-4', 'sm:p-6', 'lg:p-8')}>
      <ListRenderer
        items={posts ? posts : []}
        renderItem={post => <PostItem key={post.id} post={post} />}
      />
      <InfiniteScrollTrigger
        hasMore={!searchQuery && hasMore}
        onLoadMore={loadMorePosts}
      />
    </div>
  )
}
