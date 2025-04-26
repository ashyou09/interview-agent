import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure remote images (uncomment and adjust when needed)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        port: "",
      },
    ],
  },
  
  eslint: {
    ignoreDuringBuilds: true, // Ignores eslint during production builds
  },
  
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during build
  },
  
  // Any additional custom configurations can go here
};

export default nextConfig;
