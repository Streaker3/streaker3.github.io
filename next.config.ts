import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment and set basePath if using a project site (not username.github.io)
  // basePath: '/repository-name',
  // assetPrefix: '/repository-name',
};

export default nextConfig;
