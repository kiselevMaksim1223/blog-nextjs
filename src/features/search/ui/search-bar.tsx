'use client'
import { useEffect, useRef } from 'react'

import classNames from 'classnames'

import { useBlogStore, useFetchPosts } from '@entities/blog'

import { useDebounce } from '@shared/hooks/useDebounce'

export const SearchBar = () => {
  const setStoreSearchQuery = useBlogStore(state => state.setSearchQuery)
  const searchQuery = useBlogStore(state => state.searchQuery)
  const isFirstRender = useRef<boolean | null>(true)

  const debouncedSearchQuery = useDebounce(searchQuery, 300)
  useFetchPosts({
    page: searchQuery === '' ? 1 : undefined,
    limit: 10,
    search: debouncedSearchQuery,
    enable: !isFirstRender.current
  })

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
  }, [])

  return (
    <div
      className={classNames('mt-8 w-full max-w-3xl px-4', 'sm:px-6', 'lg:px-8')}
    >
      <div
        className={classNames(
          'relative flex items-center rounded-lg border border-gray-300 bg-white',
          'dark:border-gray-600 dark:bg-gray-800',
          'focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200',
          'dark:focus-within:ring-blue-800'
        )}
      >
        <input
          placeholder={'Search posts...'}
          type={'text'}
          value={searchQuery}
          className={classNames(
            'w-full bg-transparent p-2 pl-2 text-base text-gray-900 placeholder-gray-400 outline-none',
            'dark:text-white dark:placeholder-gray-500',
            'sm:text-lg',
            'lg:text-xl'
          )}
          onChange={e => setStoreSearchQuery(e.target.value)}
        />
        <button
          className={classNames(
            'hover:text-gray-500 focus-visible:outline-blue-500',
            'cursor-pointer px-2 text-gray-400',
            'dark:text-gray-500 dark:hover:text-gray-400'
          )}
          onClick={() => setStoreSearchQuery('')}
        >
          X
        </button>
      </div>
    </div>
  )
}
