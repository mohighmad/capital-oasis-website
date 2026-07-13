import type { Metadata } from "next";
import { CommercialShopsRoutePage } from "@/components/sections/CommercialShopsRoutePage";

export const metadata: Metadata = {
  title: "Commercial Shops | ديكورات المحلات التجارية | Capital Oasis",
  description:
    "Capital Oasis commercial-shops route for executed commercial fit-out, retail display walls, counters, shelving systems, branded commercial videos, and previous works.",
  alternates: {
    canonical: "/commercial-shops",
  },
};

export default function CommercialShopsPage() {
  return <CommercialShopsRoutePage />;
}
