/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    distDir: '.next',
    eslint: {
      dirs: ['src/client'], // https://github.com/thisismydesign/nestjs-starter/issues/82
    },
  }
  
  module.exports = nextConfig