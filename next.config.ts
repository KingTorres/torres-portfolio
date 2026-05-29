import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
// Replace 'your-repo-name' with the exact name of your GitHub repository
const repoName = 'torres-portfolio'; 

const nextConfig: NextConfig = {
  // 1. Force Next.js to output static HTML/CSS/JS files
  output: 'export',

  // 2. Add the repository name prefix for production links
  basePath: isProd ? `/${repoName}` : '',

  // 3. Fix asset paths (images, stylesheets) in production
  assetPrefix: isProd ? `/${repoName}/` : '',

  // 4. Disable image optimization (GitHub Pages cannot run the backend image optimizer)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;