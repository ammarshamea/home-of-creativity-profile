import type { NextConfig } from "next";

const repo = "home-of-creativity-profile";
const basePath = `/${repo}`;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
