import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  outputFileTracingExcludes: {
    "/api/*": ["app/_api/auth/[...nextauth]/route.ts"],
  },
  // trailingSlash: false, // Set to false to remove trailing slashes
  output: "export",
};

export default nextConfig;
