/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,

  images: {
    domains: ["127.0.0.1", "webpark.uz", "localhost"],
  },
};

module.exports = nextConfig;
