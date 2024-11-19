"use client";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "../ui/card";
import { Button } from "../ui/button";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Lurker",
    price: "$0",
    period: "forever",
    features: [
      { text: "50 AI-generated comments per month", included: true },
      { text: "Limited number of tokens", included: true },
      { text: "Limited subreddits monitoring requests", included: true },
      { text: "Advanced features", included: false },
    ],
    cta: "Start Commenting",
    href: "/auth/signup",
  },
  {
    name: "Redditor Pro",
    price: "$50",
    period: "per month",
    features: [
      { text: "Unlimited AI-generated comments", included: true },
      { text: "Monitor unlimited subreddits", included: true },
      { text: "Advanced sentiment analysis", included: true },
      { text: "Maximum token consumption limit", included: true },
      { text: "Karma optimization suggestions", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Become a Pro",
    href: "/auth/signup?plan=pro",
  },
  {
    name: "Redditor Pro",
    price: "$120",
    period: "quarterly",
    features: [
      { text: "Unlimited AI-generated comments", included: true },
      { text: "Monitor unlimited subreddits", included: true },
      { text: "Advanced sentiment analysis", included: true },
      { text: "Maximum token consumption limit", included: true },
      { text: "Karma optimization suggestions", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Become a Pro",
    href: "/auth/signup?plan=pro",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-orange-50 to-red-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Choose Your Reddit Adventure
        </h2>
        <p className="text-xl text-center mb-12 text-gray-700">
          Select the perfect plan to enhance your Reddit experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-orange-600">
                    {plan.name}
                  </CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-700">/{plan.period}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        {feature.included ? (
                          <Check className="w-5 h-5 mr-2 text-green-500" />
                        ) : (
                          <X className="w-5 h-5 mr-2 text-red-500" />
                        )}
                        <span
                          className={
                            feature.included
                              ? "text-gray-800"
                              : "text-gray-500"
                          }
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full text-lg py-6"
                    variant={
                      plan.name === "Redditor Pro" ? "default" : "outline"
                    }
                    style={{
                      backgroundColor:
                        plan.name === "Redditor Pro" ? "#FF4500" : "white",
                      color:
                        plan.name === "Redditor Pro" ? "white" : "#FF4500",
                      borderColor: "#FF4500",
                    }}
                    asChild
                  >
                    <a href={plan.href}>{plan.cta}</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
