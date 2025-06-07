const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubPages ? '/WeCoachWerno' : '',
  assetPrefix: isGitHubPages ? '/WeCoachWerno/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;