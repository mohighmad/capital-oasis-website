import type { Metadata } from "next";
import { PlaceholderRoutePage } from "@/components/sections/PlaceholderRoutePage";
import { getSectionById } from "@/data/sections";

const section = getSectionById("events");

export const metadata: Metadata = {
  title: `${section.title.en} | ${section.title.ar} | Capital Oasis`,
};

export default function EventsPage() {
  return <PlaceholderRoutePage section={section} />;
}
