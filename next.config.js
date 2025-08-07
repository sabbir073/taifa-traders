/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'taifatraders.com',
      },
    ],
  },
}

module.exports = nextConfig