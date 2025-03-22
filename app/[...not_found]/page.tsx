import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Padel | Not Found'
}
export default function NotFoundCatchAll() {
  notFound()
}
