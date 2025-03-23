import { useEffect, useRef } from 'react'

type Props = {
  hasMore?: boolean
  onLoadMore?: () => void
}

export const InfiniteScrollTrigger = ({ hasMore, onLoadMore }: Props) => {
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasMore) {
          if (onLoadMore) {
            onLoadMore()
          }
        }
      },
      { threshold: 1 }
    )

    if (triggerRef.current) {
      observer.observe(triggerRef.current)
    }

    return () => observer.disconnect()
  }, [hasMore, onLoadMore])

  return (
    <div className={'flex h-10 items-center justify-center'} ref={triggerRef}>
      {hasMore && (
        <div
          className={
            'h-8 w-8 animate-spin rounded-full border-t-2 border-b-2 border-blue-500'
          }
        />
      )}
    </div>
  )
}
