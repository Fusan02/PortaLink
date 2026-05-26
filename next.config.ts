import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn2.thecatapi.com', 'image.tmdb.org'],
  },
  webpack: (config: { cache: boolean; }) => {
    config.cache = false;
    return config;
  },
};

export default withVanillaExtract(nextConfig);