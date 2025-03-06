import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig:NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, 
  },
  assetPrefix: isProd ? '/newtonkamau14.github.io/' : '',
  basePath: isProd ? '/newtonkamau14.github.io' : '',
  output: 'export'
};

export default nextConfig;