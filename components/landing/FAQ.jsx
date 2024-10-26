"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is this extension safe to use with my Reddit account?",
    answer:
      "Absolutely! Our extension is fully compliant with Reddit's API terms of service and uses secure authentication methods to protect your account.",
  },
  {
    question: "How does the AI generate comments?",
    answer:
      "Our advanced AI analyzes the content of the post, considers the subreddit context, and generates relevant comments based on your chosen persona or style.",
  },
  {
    question: "Can I use this for other social media platforms?",
    answer:
      "Currently, we're focused on enhancing your Reddit experience. However, we're exploring options to expand to other platforms in the future.",
  },
  {
    question: "What's included in the free plan?",
    answer:
      "The free plan includes 10 AI-generated comments per day, the ability to monitor up to 5 subreddits, and access to 3 pre-defined comment personas.",
  },
  {
    question: "How do I create a custom persona for comment generation?",
    answer:
      "In your extension dashboard, you can create custom personas by defining characteristics, tone, expertise levels, and even favorite subreddits to mimic authentic Reddit behavior.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-orange-50 to-red-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-center mb-12 text-gray-700">
          Curious about our Reddit AI Comment Generator? We&apos;ve got you
          covered
        </p>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  {activeIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-orange-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-orange-600" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white px-4 pb-4 rounded-b-lg shadow-md"
                  >
                    <p className="text-gray-600 mt-2">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
