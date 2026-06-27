import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Capital Oasis",
    short_name: "Capital Oasis",
    description:
      "Capital Oasis provides manufacturing and supply solutions for doors and furniture, commercial shop decorations, exhibition decor, and different event setups in Riyadh, Saudi Arabia.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B3B35",
    theme_color: "#0B3B35",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
