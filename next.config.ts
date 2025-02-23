import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [];  // Explicitly return empty redirects
  },
};

export default nextConfig;