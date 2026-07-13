import type { Metadata } from "next";
import { KitchensRoutePage } from "@/components/sections/KitchensRoutePage";

export const metadata: Metadata = {
  title: "Kitchens | المطابخ | Capital Oasis",
  description:
    "Capital Oasis kitchens page for practical kitchen systems, material and finish directions, storage planning, and premium kitchen-selection consultation.",
  alternates: {
    canonical: "/kitchens",
  },
};

export default function KitchensPage() {
  return <KitchensRoutePage />;
}
