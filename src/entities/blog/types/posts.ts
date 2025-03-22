export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface PostWithImage extends Post {
  imageUrl: string
}

export interface PostsResponse {
  posts: PostWithImage[]
  hasMore: boolean
}
