import type { Metadata } from "next";
import { OtherServicesRoutePage } from "@/components/sections/OtherServicesRoutePage";
import { getSectionById } from "@/data/sections";

const section = getSectionById("other-services");

export const metadata: Metadata = {
  title: `${section.title.en} | ${section.title.ar} | Capital Oasis`,
};

export default function OtherServicesPage() {
  return <OtherServicesRoutePage />;
}
