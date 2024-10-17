"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
import { BoxIcon, MessageCircle, TrendingUp, UserCogIcon } from "lucide-react";

const steps = [
  {
    title: "Add to Chrome",
    description: "Install our extension from the Chrome Web Store.",
    icon: BoxIcon,
  },
  {
    title: "Create Personas",
    description: "Create your own personas & prompts.",
    icon: UserCogIcon,
  },
  {
    title: "Generate Comments",
    description: "Use AI to craft witty and relevant responses.",
    icon: MessageCircle,
  },
  {
    title: "Boost Engagement",
    description: "Increase your karma and community interaction.",
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-br from-orange-50 to-red-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Enhance Your Reddit Experience
        </h2>
        <p className="text-xl text-center mb-12 text-gray-700">
          Become a Reddit pro in four simple steps
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-gray-900">
                    <span className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mr-3 shadow-md">
                      {index + 1}
                    </span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    <step.icon className="w-16 h-16 text-orange-500 mb-4" />
                    <p className="text-center text-gray-700">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
