import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Conference hall"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-24 md:py-36 text-white">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Global Tech Conference 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Join industry leaders and innovators for three days of inspiration,
            learning, and networking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-lg">
              Register Now
            </Button>
            <Link href="/schedule">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg border-white hover:text-white hover:bg-white/20"
              >
                View Schedule
              </Button>
            </Link>
          </div>
          <div className="pt-6 flex items-center gap-4">
            <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
              <p className="text-sm font-medium">June 15-17, 2025</p>
            </div>
            <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg">
              <p className="text-sm font-medium">New York City</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
