import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.181.33.86"],
  // One canonical address: the old domain and www move to tioelvis.com for good
  async redirects() {
    return ["tioelvis-lab.dev", "www.tioelvis-lab.dev", "www.tioelvis.com"].map(
      (host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: "https://tioelvis.com/:path*",
        permanent: true,
      }),
    );
  },
};

export default nextConfig;
