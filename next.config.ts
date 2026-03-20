import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/assurance-emprunteur-:banque",
        destination: "/assurance-emprunteur/:banque",
      },
    ];
  },
};

export default nextConfig;
