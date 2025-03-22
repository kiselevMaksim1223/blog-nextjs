'use client'
import { useRouter } from 'next/navigation'

import classNames from 'classnames'

export const BackButton = () => {
  const back = useRouter().back

  return (
    <button
      className={classNames(
        'flex cursor-pointer items-center space-x-2 text-lg text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
        'mb-8'
      )}
      onClick={back}
    >
      {'< Back'}
    </button>
  )
}
