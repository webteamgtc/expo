/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'gtcfx-bucket.s3.ap-southeast-1.amazonaws.com',
      'api.gtcfx.com'
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.gtcfx.com/',
        permanent: false
      }
    ];
  }
};

export default nextConfig;
