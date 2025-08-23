import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

module.exports = withVanillaExtract({
  reactStrictMode: true,
  webpack: (config) => {
    config.cache = false;
    return config;
  },
});