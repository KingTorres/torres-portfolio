import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',            // Enables the static export feature
  basePath: '/torres-portfolio', // Replace with your exact GitHub repository name
  images: {
    unoptimized: true,         // Disables server-side image optimization
  },
};

export default nextConfig;
