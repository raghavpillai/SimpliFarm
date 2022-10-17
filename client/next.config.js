/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com', 'firebasestorage.googleapis.com', 's3.amazonaws.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
