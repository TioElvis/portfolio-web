import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.181.33.86"],
  // One canonical address: www moves to tioelvis.com for good
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.tioelvis.com" }],
        destination: "https://tioelvis.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
