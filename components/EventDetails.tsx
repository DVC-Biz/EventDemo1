import { CalendarDays, MapPin, Users, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function EventDetails() {
  const details = [
    {
      icon: <CalendarDays className="h-8 w-8 text-primary" />,
      title: "Date & Time",
      description: "June 15-17, 2025 • 9:00 AM - 6:00 PM",
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Location",
      description: "Tech Conference Center, New York City",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Attendees",
      description: "Over 5,000 industry professionals",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Duration",
      description: "3 days of keynotes, workshops & networking",
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Event Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="mx-auto">{detail.icon}</div>
                  <h3 className="text-xl font-semibold">{detail.title}</h3>
                  <p className="text-muted-foreground">{detail.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
