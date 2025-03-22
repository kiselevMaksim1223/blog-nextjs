'use client'

export default function Error({
  error
}: {
  error: Error & { digest?: string }
}) {
  return (
    <div>
      <h1>Error</h1>
      <pre>{error.message}</pre>
      <pre>{error.stack}</pre>
    </div>
  )
}
