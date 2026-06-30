import type { Metadata } from "next";
import { PlaceholderRoutePage } from "@/components/sections/PlaceholderRoutePage";
import { getSectionById } from "@/data/sections";

const section = getSectionById("commercial-shops");

export const metadata: Metadata = {
  title: `${section.title.en} | ${section.title.ar} | Capital Oasis`,
};

export default function CommercialShopsPage() {
  return <PlaceholderRoutePage section={section} />;
}
