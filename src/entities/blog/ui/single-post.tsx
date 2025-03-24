import Image from 'next/image'

import classNames from 'classnames'

import { PostWithImage } from '../types/posts'

type Props = {
  post: PostWithImage
}

export const SinglePost = ({ post }: Props) => {
  return (
    <div
      className={classNames(
        'mx-auto overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800'
      )}
    >
      <div className={classNames('relative aspect-video w-full')}>
        <Image
          alt={post.title}
          className={classNames('object-cover')}
          fill
          src={post.imageUrl}
        />
        <div
          className={
            'absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'
          }
        />
      </div>

      <div className={classNames('p-4', 'sm:p-6', 'lg:p-8')}>
        <h1
          className={classNames(
            'mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl dark:text-white',
            'leading-tight'
          )}
        >
          {post.title}
        </h1>

        <p
          className={classNames(
            'mb-6 text-sm text-gray-500 italic dark:text-gray-400'
          )}
        >
          Published on {new Date().toLocaleDateString()}
        </p>

        <div
          className={classNames(
            'space-y-4 text-base leading-relaxed text-gray-600 dark:text-gray-300',
            'sm:text-lg lg:text-xl'
          )}
        >
          {post.body.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}
