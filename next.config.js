/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/test/path',
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
