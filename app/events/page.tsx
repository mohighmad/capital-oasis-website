import type { Metadata } from "next";
import { EventsRoutePage } from "@/components/sections/EventsRoutePage";

export const metadata: Metadata = {
  title: "Events & Exhibitions | الفعاليات والمعارض | Capital Oasis",
  description:
    "Capital Oasis events route for premium exhibition booths, stage and backdrop direction, celebration atmosphere, visitor-facing event solutions, and curated short event films.",
  alternates: {
    canonical: "/events",
  },
};

export default function EventsPage() {
  return <EventsRoutePage />;
}
