import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ['static.wixstatic.com'],
  },
};

export default nextConfig;
