import type { NextConfig } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: 'export',
  // basePath,
  // assetPrefix: basePath ? basePath + '/' : '', // 加个判断更安全
  distDir: 'out',
};

export default nextConfig;

