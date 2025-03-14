"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function PricingTiers() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const pricingTiers = [
    {
      name: "Early Bird",
      description: "Perfect for those who plan ahead",
      price: billingCycle === "monthly" ? 299 : 249,
      features: [
        "General admission to all talks",
        "Access to networking events",
        "Conference materials",
        "Lunch and refreshments",
      ],
      cta: "Get Early Bird Ticket",
      popular: false,
    },
    {
      name: "Standard",
      description: "Our most popular ticket option",
      price: billingCycle === "monthly" ? 499 : 449,
      features: [
        "All Early Bird benefits",
        "Priority seating",
        "Access to workshops",
        "Exclusive Q&A sessions",
        "Conference recordings",
      ],
      cta: "Get Standard Ticket",
      popular: true,
    },
    {
      name: "VIP",
      description: "The ultimate conference experience",
      price: billingCycle === "monthly" ? 999 : 899,
      features: [
        "All Standard benefits",
        "VIP lounge access",
        "Private networking events",
        "Dinner with speakers",
        "One-on-one mentoring session",
        "Exclusive swag bag",
      ],
      cta: "Get VIP Ticket",
      popular: false,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <div className="flex items-center space-x-2">
          <Label htmlFor="billing-cycle">Monthly</Label>
          <Switch
            id="billing-cycle"
            checked={billingCycle === "yearly"}
            onCheckedChange={(checked) =>
              setBillingCycle(checked ? "yearly" : "monthly")
            }
          />
          <Label htmlFor="billing-cycle">
            Yearly <span className="text-sm text-primary">(Save 10%)</span>
          </Label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingTiers.map((tier, index) => (
          <Card
            key={index}
            className={`flex flex-col ${
              tier.popular ? "border-primary shadow-lg relative" : ""
            }`}
          >
            {tier.popular && (
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="mb-6">
                <p className="text-4xl font-bold">${tier.price}</p>
                <p className="text-muted-foreground">per attendee</p>
              </div>
              <ul className="space-y-2">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={tier.popular ? "default" : "outline"}
              >
                {tier.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
