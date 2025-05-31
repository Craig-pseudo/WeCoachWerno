import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubPages ? '/wecoachacademywerno' : '',
  assetPrefix: isGitHubPages ? '/wecoachacademywerno/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;