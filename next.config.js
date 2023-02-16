/** @type {import('next').NextConfig} */

const nextConfig = {
   reactStrictMode: true,
   compiler: {
      styledComponents: true
   },
   typescript: {
      ignoreBuildErrors: true
   },
   eslint: {
    ignoreDuringBuilds: true,
  },
   images: {
      domains: ['lh3.googleusercontent.com'],
      formats: ['image/webp']
   }
}

module.exports = nextConfig
