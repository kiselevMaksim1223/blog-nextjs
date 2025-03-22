import { notFound } from 'next/navigation'

import classNames from 'classnames'

import { fetchPostBySlug, fetchPosts, SinglePost } from '@entities/blog'

import { BackButton } from '@shared/ui/back-button'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default async function SinglePostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await fetchPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className={classNames('container mx-auto px-4 py-6', 'sm: lg:py-8')}>
      <BackButton />
      <SinglePost post={post} />
    </div>
  )
}

export async function generateStaticParams() {
  const { posts } = await fetchPosts({ page: 1, limit: 5 })

  return posts.map(post => ({
    slug: post.id.toString()
  }))
}
