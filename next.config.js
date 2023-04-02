/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  images: {
    domains: ['picsum.photos', 'api.deezer.com']
  }
}

module.exports = nextConfig
