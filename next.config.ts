import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   eslint: {
    // Ignorer les erreurs ESLint lors du build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignorer les erreurs TypeScript lors du build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
