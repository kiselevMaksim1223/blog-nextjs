import { Fragment, JSX } from 'react'

type Props<T> = {
  items: T[]
  renderItem: (item: T) => JSX.Element
  className?: string
}

export const ListRenderer = <T,>({
  items,
  renderItem,
  className
}: Props<T>) => {
  return <Fragment>{items.map(renderItem)}</Fragment>
}
