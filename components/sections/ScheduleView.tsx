"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ScheduleView() {
  const [activeDay, setActiveDay] = useState("day1");

  const schedule = {
    day1: [
      {
        time: "08:00 - 09:00",
        title: "Registration & Breakfast",
        description: "Check in and enjoy a complimentary breakfast",
        location: "Main Hall",
        type: "break",
      },
      {
        time: "09:00 - 10:00",
        title: "Opening Keynote: The Future of Technology",
        speaker: "Alex Johnson, CEO of TechGiant",
        description:
          "An inspiring talk about where technology is headed in the next decade",
        location: "Main Stage",
        type: "keynote",
      },
      {
        time: "10:15 - 11:15",
        title: "AI in Business: Practical Applications",
        speaker: "Sarah Williams, CTO of FutureTech",
        description: "Learn how businesses are implementing AI solutions today",
        location: "Room A",
        type: "talk",
      },
      {
        time: "11:30 - 12:30",
        title: "Building Scalable Systems",
        speaker: "Michael Chen, Founder of StartupX",
        description:
          "Best practices for creating systems that can grow with your business",
        location: "Room B",
        type: "talk",
      },
      {
        time: "12:30 - 14:00",
        title: "Lunch Break & Networking",
        description: "Enjoy lunch and connect with fellow attendees",
        location: "Dining Area",
        type: "break",
      },
      {
        time: "14:00 - 15:30",
        title: "Workshop: Hands-on with New Technologies",
        speaker: "Jessica Rodriguez, VP of Product at InnovateCorp",
        description: "Interactive session exploring cutting-edge tech",
        location: "Workshop Room",
        type: "workshop",
      },
      {
        time: "15:45 - 16:45",
        title: "Panel Discussion: The Ethics of AI",
        description:
          "Industry experts discuss the ethical implications of artificial intelligence",
        location: "Main Stage",
        type: "panel",
      },
      {
        time: "17:00 - 19:00",
        title: "Welcome Reception",
        description: "Drinks, appetizers, and networking",
        location: "Rooftop Lounge",
        type: "social",
      },
    ],
    day2: [
      {
        time: "08:30 - 09:30",
        title: "Breakfast & Morning Networking",
        description: "Start your day with breakfast and conversations",
        location: "Main Hall",
        type: "break",
      },
      {
        time: "09:30 - 10:30",
        title: "Keynote: Innovation at Scale",
        speaker: "Robert Chen, CEO of Startup Innovations",
        description: "How to maintain innovation as your company grows",
        location: "Main Stage",
        type: "keynote",
      },
      // More day 2 events would be added here
    ],
    day3: [
      {
        time: "08:30 - 09:30",
        title: "Breakfast & Morning Networking",
        description: "Final day breakfast and networking",
        location: "Main Hall",
        type: "break",
      },
      {
        time: "09:30 - 10:30",
        title: "Closing Keynote: Looking Ahead",
        speaker: "Emma Thompson, Senior Developer at CodeCraft",
        description: "Reflecting on the event and looking to the future",
        location: "Main Stage",
        type: "keynote",
      },
      // More day 3 events would be added here
    ],
  };

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "keynote":
        return "default";
      case "talk":
        return "secondary";
      case "workshop":
        return "destructive";
      case "panel":
        return "outline";
      case "break":
        return "muted";
      case "social":
        return "purple"; // Custom variant that would need to be added to the theme
      default:
        return "default";
    }
  };

  return (
    <div>
      <Tabs defaultValue="day1" value={activeDay} onValueChange={setActiveDay}>
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="day1">Day 1</TabsTrigger>
            <TabsTrigger value="day2">Day 2</TabsTrigger>
            <TabsTrigger value="day3">Day 3</TabsTrigger>
          </TabsList>
        </div>

        {Object.entries(schedule).map(([day, events]) => (
          <TabsContent key={day} value={day} className="space-y-6">
            {events.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle>{event.title}</CardTitle>
                      {event.speaker && (
                        <CardDescription>{event.speaker}</CardDescription>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="default">
                        {event.type.charAt(0).toUpperCase() +
                          event.type.slice(1)}
                      </Badge>
                      <span className="text-sm font-medium">{event.time}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{event.description}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Location: {event.location}
                  </p>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
