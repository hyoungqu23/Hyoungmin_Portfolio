/*eslint-env es6*/
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://media.graphassets.com/'],
  },
};

module.exports = nextConfig;
