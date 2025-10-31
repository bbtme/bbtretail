/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [new URL('https://bbtretail.com').hostname],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: new URL('https://bbtretail.com').hostname,
      },
    ],
  },
  env: {
    WORDPRESS_GRAPHQL_ENDPOINT: process.env.WORDPRESS_GRAPHQL_ENDPOINT,
    WORDPRESS_URL: process.env.WORDPRESS_URL,
  },
};

module.exports = nextConfig;
