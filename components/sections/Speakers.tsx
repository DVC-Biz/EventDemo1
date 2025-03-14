import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Speakers() {
  const speakers = [
    {
      name: "Alex Johnson",
      role: "CEO, TechGiant",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Industry leader with over 20 years of experience in technology innovation.",
    },
    {
      name: "Sarah Williams",
      role: "CTO, FutureTech",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Pioneer in AI and machine learning with multiple patents to her name.",
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupX",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Serial entrepreneur who has successfully launched 5 tech startups.",
    },
    {
      name: "Jessica Rodriguez",
      role: "VP of Product, InnovateCorp",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Product strategist specializing in user-centered design and development.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Speakers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from industry leaders and innovators who are shaping the
            future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{speaker.name}</h3>
                <p className="text-primary font-medium">{speaker.role}</p>
                <p className="mt-2 text-muted-foreground">{speaker.bio}</p>
                <Button variant="link" className="p-0 h-auto mt-2">
                  View full bio
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">View All Speakers</Button>
        </div>
      </div>
    </section>
  );
}
