import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin({
  unstable_turbopack: { mode: 'auto' },
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: 'cdn2.thecatapi.com' },
      { hostname: 'image.tmdb.org' },
    ],
  },
  webpack: (config: { cache: boolean; }) => {
    config.cache = false;
    return config;
  },
};

export default withVanillaExtract(nextConfig);