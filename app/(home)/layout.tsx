import { Header } from '@features/header'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function HomeLayout({ children }: Props) {
  return (
    <main className='dark:bg-gray-900" container mx-auto min-h-screen bg-gray-100'>
      <Header />
      {children}
    </main>
  )
}
