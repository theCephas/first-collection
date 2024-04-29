/** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

// module.exports = {
//   images: {
//     domains: ["https://first-collectionz.onrender.com"],
//   },
// };

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "first-collectionz.onrender.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
