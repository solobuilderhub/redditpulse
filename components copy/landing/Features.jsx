import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { MessageSquare, TrendingUp, Shield } from "lucide-react";

const features = [
  {
    title: "AI-Powered Comments",
    description:
      "Generate witty and contextual comments for Reddit posts using advanced AI technology.",
    image: "/images/reddit-ai-comments.webp",
    icon: MessageSquare,
  },
  {
    title: "Karma Booster",
    description:
      "Optimize your comments to increase engagement and boost your Reddit karma score.",
    image: "/images/reddit-karma-boost.webp",
    icon: TrendingUp,
  },
  {
    title: "Subreddit Insights",
    description:
      "Gain valuable insights into subreddit trends and tailor your comments accordingly.",
    image: "/images/reddit-insights.webp",
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-orange-50"
      id="features"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Elevate Your Reddit Game
        </h2>
        <p className="text-xl text-center mb-12 text-gray-700">
          Discover the powerful tools that will make you a Reddit pro
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white"
            >
              <div className="relative h-48">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-all duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white rounded-full p-2">
                  <feature.icon className="h-6 w-6 text-orange-500" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
