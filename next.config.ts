import { NextConfig } from 'next'

const isGitHubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubPages ? '/WeCoachWerno' : '',
  assetPrefix: isGitHubPages ? '/WeCoachWerno/' : '',
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    // Expose basePath to runtime config so you can use it dynamically in components
    basePath: isGitHubPages ? '/WeCoachWerno' : '',
  },
}

export default nextConfig