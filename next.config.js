/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public'
})

const isProd = (process.env.NODE_ENV = 'production')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true
}

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public',
    disable: !isProd
  }
})
