/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/cs102",
        destination: "/courses/cs102",
      },
    ];
  },
};

export default nextConfig;
