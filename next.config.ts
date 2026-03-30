import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/assurance-emprunteur-:banque",
        destination: "/assurance-emprunteur/:banque",
      },
      {
        source: "/avis-:slug-assurance-emprunteur",
        destination: "/avis-assurance-emprunteur/:slug",
      },
    ];
  },
};

export default nextConfig;
