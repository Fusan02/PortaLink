import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn2.thecatapi.com'],
  },
  webpack: (config: { cache: boolean; }) => {
    config.cache = false;
    return config;
  },
};

module.exports = withVanillaExtract(nextConfig);