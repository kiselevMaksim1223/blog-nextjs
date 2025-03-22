import client from '@shared/api/client'

import type { Post, PostsResponse, PostWithImage } from '../types/posts'

export const fetchPosts = async ({
  page = 1,
  limit = 10
}: {
  page?: number
  limit?: number
}): Promise<PostsResponse> => {
  const postsResponse = await client.get<Post[]>('/posts', {
    params: {
      _page: page,
      _limit: limit
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
}

export const fetchPostBySlug = async (
  slug: string
): Promise<PostWithImage | null> => {
  const post = await client.get<Post>(`/posts/${slug}`)

  if (!post.data) {
    return null
  }

  return {
    ...post.data,
    imageUrl: `https://placeholder.rocks/800/600/${slug}`
  }
}
