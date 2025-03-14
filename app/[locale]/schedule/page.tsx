import type { Metadata } from "next";
import ScheduleView from "@/components/sections/ScheduleView";

export const metadata: Metadata = {
  title: "Schedule | EventCon",
  description: "Event schedule and agenda",
};

export default function SchedulePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Event Schedule</h1>
      <ScheduleView />
    </main>
  );
}
