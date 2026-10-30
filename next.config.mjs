/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
   images: {
    remotePatterns: [
      // TheMealDB ki photos allow karo
      { protocol: "https", hostname: "www.themealdb.com" },
    ],
  },
};

export default nextConfig;
