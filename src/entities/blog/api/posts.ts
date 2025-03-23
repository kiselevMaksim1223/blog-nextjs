import client from '@shared/api/client'

import type { Post, PostsResponse, PostWithImage } from '../types/posts'

export const fetchPosts = async ({
  page,
  limit,
  search
}: {
  page?: number
  limit?: number
  search?: string
}): Promise<PostsResponse> => {
  try {
    const postsResponse = await client.get<Post[]>('/posts', {
      params: {
        _page: page,
        _limit: limit,
        q: search
      }
    })

    const posts: PostWithImage[] = postsResponse.data.map((post: Post) => ({
      ...post,
      imageUrl: `https://placeholder.rocks/800/600/${post.id}`
    }))

    return {
      posts,
      hasMore: postsResponse.data.length === limit
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching posts:', error)
    return {
      posts: [],
      hasMore: false
    }
  }
}

export const fetchPostBySlug = async (
  slug: string
): Promise<PostWithImage | null> => {
  try {
    const post = await client.get<Post>(`/posts/${slug}`)

    if (!post.data) {
      return null
    }

    return {
      ...post.data,
      imageUrl: `https://placeholder.rocks/800/600/${slug}`
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching post by slug:', error)
    return null
  }
}
