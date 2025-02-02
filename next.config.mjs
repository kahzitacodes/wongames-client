/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['pt-PT'],
    defaultLocale: 'pt-PT'
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com'
      }
    ]
  }
}

export default nextConfig
