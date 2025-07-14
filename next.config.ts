/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  distDir: 'out',
  // basePath: isProd ? '/My-portfolior' : '',
  // assetPrefix: isProd ? '/My-portfolior/' : '',
}

module.exports = nextConfig
