import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
  assetPrefix: isProd ? '/newtonkamau14.github.io/' : '',
  basePath: isProd ? '/newtonkamau14.github.io' : '',
  output: 'export'
};

export default nextConfig;
