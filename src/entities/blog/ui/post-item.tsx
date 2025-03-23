import Image from 'next/image'
import Link from 'next/link'

import classNames from 'classnames'

import { PostWithImage } from '../types/posts'

type Props = {
  post: PostWithImage
}

export const PostItem = ({ post }: Props) => {
  return (
    <Link className={'block'} href={`/blog/${post.id}`}>
      <div
        className={classNames(
          'group relative grid grid-cols-[1fr] overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl',
          'dark:bg-gray-800',
          'lg:grid-cols-[1fr_2fr]'
        )}
      >
        <div
          className={classNames(
            'relative h-48 w-full overflow-hidden',
            'sm:h-64'
          )}
        >
          <Image
            alt={post.title}
            fill
            priority={post.id < 3}
            quality={65}
            sizes={'100%'}
            src={post.imageUrl}
            className={classNames(
              'object-cover',
              'transition-transform duration-300 group-hover:scale-105'
            )}
          />
          <div
            className={
              'absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'
            }
          />
        </div>
        <div className={classNames('flex flex-col p-4', 'sm:p-6')}>
          <h2
            className={classNames(
              'text-xl font-bold text-gray-900 dark:text-white',
              'sm:text-2xl'
            )}
          >
            {post.title}
          </h2>
          <p
            className={classNames(
              'line-clamp-1 text-sm text-gray-600 dark:text-gray-300',
              'sm:text-base'
            )}
          >
            {post.body}
          </p>
          <div
            className={classNames(
              'mt-auto flex flex-col items-end justify-between gap-4 pt-3',
              'sm:flex-row'
            )}
          >
            <span className={'text-sm text-gray-500 dark:text-gray-400'}>
              Published on {new Date().toLocaleDateString()}
            </span>
            <button
              className={classNames(
                'w-full cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-center text-white',
                'transition-colors duration-300 hover:bg-blue-700',
                'sm:w-auto'
              )}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
