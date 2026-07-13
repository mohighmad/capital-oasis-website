import type { Metadata } from "next";
import { DressingRoomsRoutePage } from "@/components/sections/DressingRoomsRoutePage";

export const metadata: Metadata = {
  title: "Dressing Rooms | غرف الملابس | Capital Oasis",
  description:
    "Premium dressing-room and wardrobe design directions by Capital Oasis, including walk-in layouts, glass wardrobes, mirrors, sliding fronts, and compact storage solutions.",
};

export default function DressingRoomsPage() {
  return <DressingRoomsRoutePage />;
}
