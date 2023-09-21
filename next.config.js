/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xhcucozjulskkfgxiulx.supabase.co",
        port: "",
        pathname: "/storage/v1/object/**",
      },
    ],
  },
};
