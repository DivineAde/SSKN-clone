/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
