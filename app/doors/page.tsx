import type { Metadata } from "next";
import { DoorsRoutePage } from "@/components/sections/DoorsRoutePage";
import { getSectionById } from "@/data/sections";

const section = getSectionById("doors");

export const metadata: Metadata = {
  title: `${section.title.en} | ${section.title.ar} | Capital Oasis`,
  description:
    "Capital Oasis doors page with Wood, PVC, and WPC material directions, a general previous works gallery, process previews, and consultation-ready contact options.",
  alternates: {
    canonical: "/doors",
  },
};

export default function DoorsPage() {
  return <DoorsRoutePage />;
}
