import { Fragment, ReactNode } from 'react'

import { cookies } from 'next/headers'

import { Header } from '@features/header'

type Props = {
  children: ReactNode
}

export default async function HomeLayout({ children }: Props) {
  const theme = (await cookies()).get('theme')?.value as 'light' | 'dark'
  return (
    <Fragment>
      <Header initialTheme={theme} />
      <main className={'container mx-auto min-h-screen pt-18'}>{children}</main>
    </Fragment>
  )
}
