import Hero from "@/components/sections/Hero";
import EventDetails from "@/components/EventDetails";
import Speakers from "@/components/sections/Speakers";
import Testimonials from "@/components/sections/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EventCon | Premium Conference & Event Template",
  description:
    "A premium conference and event website template built with Next.js",
  keywords: "conference, event, template, next.js",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <EventDetails />
      <Speakers />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
