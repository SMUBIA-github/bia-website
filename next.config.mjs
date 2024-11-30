/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ssvs8thfuktvqsqk.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
