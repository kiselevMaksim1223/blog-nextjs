'use client'
import { useEffect } from 'react'

import classNames from 'classnames'

import { type PostWithImage, useBlogStore } from '@entities/blog'
import { PostItem } from '@entities/blog/ui/post-item'

import { ListRenderer } from '@shared/ux/list-renderer'

import { useLoadMore } from '../../hooks/useLoadMoore'

interface PostListProps {
  initialPosts: PostWithImage[]
  initialHasMore: boolean
}

export const PostList = ({ initialPosts, initialHasMore }: PostListProps) => {
  const { posts, hasMore, setPosts, setHasMore } = useBlogStore()

  const { loadMoreRef } = useLoadMore()

  const displayedPosts = posts.length > 0 ? posts : initialPosts
  const displayedHasMore = posts.length > 0 ? hasMore : initialHasMore

  useEffect(() => {
    setPosts(initialPosts)
    setHasMore(initialHasMore)
  }, [initialPosts, initialHasMore, setPosts, setHasMore])

  return (
    <div className={classNames('space-y-6', 'p-4 sm:p-6 lg:p-8')}>
      <ListRenderer
        items={displayedPosts}
        renderItem={post => <PostItem key={post.id} post={post} />}
      />
      <div
        className={'flex h-10 items-center justify-center'}
        ref={loadMoreRef}
      >
        {displayedHasMore && (
          <div
            className={
              'h-8 w-8 animate-spin rounded-full border-t-2 border-b-2 border-blue-500'
            }
          />
        )}
      </div>
    </div>
  )
}
