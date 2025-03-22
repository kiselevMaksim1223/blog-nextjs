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
          'group relative overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl',
          'bg-white dark:bg-gray-800'
        )}
      >
        <div
          className={classNames(
            'relative w-full overflow-hidden',
            'h-48 sm:h-64'
          )}
        >
          <Image
            alt={post.title}
            fill
            src={post.imageUrl}
            className={classNames(
              'object-cover transition-transform duration-300',
              'group-hover:scale-105'
            )}
          />
          <div
            className={
              'absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'
            }
          />
        </div>
        <div className={classNames('p-4 sm:p-6')}>
          <h2
            className={classNames(
              'mb-2 font-bold text-gray-900 dark:text-white',
              'text-xl sm:text-2xl'
            )}
          >
            {post.title}
          </h2>
          <p
            className={classNames(
              'line-clamp- text-gray-600 dark:text-gray-300',
              'text-sm sm:text-base'
            )}
          >
            {post.body}
          </p>
          <div
            className={classNames(
              'mt-4 flex justify-between',
              'flex-col sm:flex-row',
              'gap-4'
            )}
          >
            <span className={'text-sm text-gray-500 dark:text-gray-400'}>
              Published on {new Date().toLocaleDateString()}
            </span>
            <button
              className={classNames(
                'hover: cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-700',
                'w-full text-center sm:w-auto'
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
