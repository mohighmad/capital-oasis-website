import type { Metadata } from "next";
import { HomeRoutePage } from "@/components/sections/HomeRoutePage";

export const metadata: Metadata = {
  title:
    "Capital Oasis | كابيتال واسي لتصنيع وتوريد حلول الديكور الخشبي والتجاري",
  description:
    "Capital Oasis homepage for doors, kitchens, dressing rooms, commercial shops, events, exhibitions, and premium woodworking solutions in Riyadh.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeRoutePage />;
}
