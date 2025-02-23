import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/pdf/:id',
        destination: '/pdf/:id',  // Redirect back to original path
        permanent: false,         // Use temporary redirect, this is to undo the redirect from the old pdf page
      },
    ];
  },
};

export default nextConfig;