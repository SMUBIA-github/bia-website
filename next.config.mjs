/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ssvs8thfuktvqsqk.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "thisisformygif.s3.ap-southeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
