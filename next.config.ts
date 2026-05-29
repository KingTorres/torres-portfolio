import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Applies subfolder paths only when building for production deployment
  basePath: isProd ? "/torres-portfolio" : "",
  assetPrefix: isProd ? "/torres-portfolio/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;