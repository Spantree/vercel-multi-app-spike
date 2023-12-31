/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    const publicURL = process.env.NEXT_PUBLIC_SUBAPP_URL
      ? `${process.env.NEXT_PUBLIC_SUBAPP_URL.replace(/\/$/, '')}/:match*`
      : 'http://127.0.0.1:3001/subapp/:match*';

    const rules = [{ source: '/subapp/:match*', destination: publicURL }];
    console.log("Rewrites", rules);
    return rules;
  },
};

module.exports = nextConfig;
