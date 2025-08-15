/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true // If you want to use <img> instead of next/image for now
  }
};

export default nextConfig;