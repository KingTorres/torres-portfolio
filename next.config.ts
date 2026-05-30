import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
// Replace 'your-repo-name' with the exact name of your GitHub repository
const repoName = 'torres-portfolio'; 

const nextConfig: NextConfig = {
  // 1. Force Next.js to compile your app into static HTML/CSS/JS files
  output: 'export',

  // 2. Prefix your links with the repo name so navigation works on GitHub Pages
  basePath: isProd ? `/${repoName}` : '',

  // 3. Prefix your assets (CSS, JS) so they load from the correct GitHub path
  assetPrefix: isProd ? `/${repoName}/` : '',

  // 4. Disable default server-side image optimization (GitHub Pages is static)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;