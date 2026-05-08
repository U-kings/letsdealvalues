import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  outputFileTracingExcludes: {
    "/api/*": ["app/_api/auth/[...nextauth]/route.ts"],
  },
  output: "export",
};

export default nextConfig;
