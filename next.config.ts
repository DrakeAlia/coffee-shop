import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ['static.wixstatic.com', 'res.cloudinary.com', 'www.discoverslu.com'],
  },
};

export default nextConfig;
