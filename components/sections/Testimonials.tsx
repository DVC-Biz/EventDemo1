import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "This conference exceeded all my expectations. The speakers were world-class and the networking opportunities were invaluable.",
      author: "David Miller",
      title: "Marketing Director, Global Brands",
    },
    {
      quote:
        "I've attended many tech conferences, but this one stands out for its organization, content quality, and attention to detail.",
      author: "Emma Thompson",
      title: "Senior Developer, CodeCraft",
    },
    {
      quote:
        "The insights I gained from this event have directly impacted our company's strategy. We'll definitely be back next year.",
      author: "Robert Chen",
      title: "CEO, Startup Innovations",
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Attendees Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what past attendees have to
            say about our events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="text-lg mb-6 flex-grow">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-muted-foreground">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
