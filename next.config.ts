/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',              // GitHub Pages 需要构建到 out 目录
  basePath: '/your-repo-name', // 👈 替换为你的仓库名
  assetPrefix: '/your-repo-name',
}

module.exports = nextConfig
