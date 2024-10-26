"use client";
import { motion } from "framer-motion";
import { Star, Quote, User } from "lucide-react";

const testimonials = [
  {
    name: "u/RedditPro42",
    role: "r/AskReddit Moderator",
    content:
      "This extension has completely transformed how I engage with my community. The AI-generated comments are spot-on and save me tons of time!",
    icon: "reddit",
  },
  {
    name: "u/MemeQueen99",
    role: "Karma Millionaire",
    content:
      "I've seen a significant boost in my karma since using this extension. The witty responses it generates are pure gold!",
    icon: "star",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Redditor Reviews
        </h2>
        <p className="text-xl text-center mb-12 text-gray-700">
          See what our users are saying about their enhanced Reddit experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <div className="flex flex-col bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden flex-grow">
                <Quote className="absolute top-4 right-4 h-12 w-12 text-orange-100" />
                <p className="text-gray-700 mb-6 relative z-10">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center mr-4">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg text-gray-800">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-orange-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
