import { create } from 'zustand'

import { PostWithImage } from '../types/posts'

interface BlogState {
  posts: PostWithImage[]
  page?: number
  hasMore: boolean
  searchQuery: string
  setPosts: (posts: PostWithImage[]) => void
  addPosts: (newPosts: PostWithImage[]) => void
  setPage: (page?: number) => void
  setHasMore: (hasMore: boolean) => void
  setSearchQuery: (query: string) => void
}

export const useBlogStore = create<BlogState>(set => ({
  posts: [],
  page: 1,
  hasMore: true,
  searchQuery: '',
  setPosts: posts => set({ posts }),
  addPosts: newPosts =>
    set(state => ({ posts: [...state.posts, ...newPosts] })),
  setPage: page => set({ page }),
  setHasMore: hasMore => set({ hasMore }),
  setSearchQuery: query => set({ searchQuery: query })
}))
