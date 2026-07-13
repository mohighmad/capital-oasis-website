import type { Metadata } from "next";
import { ContactRoutePage } from "@/components/sections/ContactRoutePage";

export const metadata: Metadata = {
  title: "Contact Us | تواصل معنا | Capital Oasis",
  description:
    "Capital Oasis contact page for WhatsApp, direct calls, project inquiries, location details, and calm premium client-facing contact access.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactRoutePage />;
}
