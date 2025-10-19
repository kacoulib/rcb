/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/club",
        destination: "/#club",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/infos",
        destination: "/#planning",
        permanent: true,
      },
      {
        source: "/actu",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
