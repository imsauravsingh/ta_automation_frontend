/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@ui/components",
    "@hooks/shared",
    "@api/client",
    "@types/shared",
    "@utils/shared",
  ],
};
module.exports = nextConfig;
