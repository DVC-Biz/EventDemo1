import type { Metadata } from "next";
import PricingTiers from "@/components/sections/PricingTiers";

export const metadata: Metadata = {
  title: "Tickets & Pricing | EventCon",
  description: "Purchase tickets for the event",
};

export default function TicketsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">
        Tickets & Pricing
      </h1>
      <PricingTiers />
    </main>
  );
}
