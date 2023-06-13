/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    // const publicURL = process.env.NEXT_PUBLIC_SUBAPP_URL
    //   ? `${process.env.NEXT_PUBLIC_SUBAPP_URL}/:match*`
    //   : 'http://127.0.0.1:3001/subapp/:match*';

    // console.log('Rewrites', process.env);
    const rules = [{ source: '/subapp/:match*', destination: 'https://vmas-root.vercel.app/:match*' }];
    console.log("Rewrites", rules);
    return rules;
  },
};

module.exports = nextConfig;
