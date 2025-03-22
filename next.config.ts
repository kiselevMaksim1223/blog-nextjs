/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jsonplaceholder.typicode.com'
      }
    ]
  }
}

export default nextConfig
