/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/cs102",
        destination: "/courses/cs102",
      },
      {
        source: "/cs601",
        destination: "/courses/cs601",
      },
    ];
  },
};

export default nextConfig;
