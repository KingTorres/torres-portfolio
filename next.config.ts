import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Tells Next.js that the site is hosted under the /torres-portfolio subfolder
  basePath: isProd ? "/torres-portfolio" : "",
  // REMOVE the trailing slash from the assetPrefix
  assetPrefix: isProd ? "/torres-portfolio" : "", 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;