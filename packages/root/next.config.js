/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    let publicURL = process.env.NEXT_PUBLIC_URL || 'http://127.0.0.1:3001/subapp/:match*';

    // console.log('Rewrites', process.env);
    return [{ source: '/subapp/:match*', destination: publicURL }];
  },
};

module.exports = nextConfig;
