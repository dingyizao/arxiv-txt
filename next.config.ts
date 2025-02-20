import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/pdf/:id',
        destination: '/abs/:id',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;