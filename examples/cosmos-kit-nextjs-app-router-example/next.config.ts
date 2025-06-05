import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    externalDir: true,
  },
  // transpilePackages: ["@cosmos-kit/keplr", "@cosmos-kit/react"],
};

export default nextConfig;
