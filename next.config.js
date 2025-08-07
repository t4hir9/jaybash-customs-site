/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { buffer: require.resolve('buffer/') };
    return config;
  },
};