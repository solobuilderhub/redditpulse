import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-red-100 pt-32 pb-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Elevate Your Reddit Game with{" "}
            <span className="text-orange-600">AI-Powered Comments</span>
          </h1>
          <p className="text-xl mb-6 text-gray-700">
            Generate witty responses, boost your karma, and become a Reddit pro
            effortlessly.
          </p>
          <div className="space-x-4">
            <Button
              asChild
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              <a href="/auth/signup" className="flex items-center">
                Start Commenting
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://chromewebstore.google.com/detail/reddit-ai-commenter/your-extension-id"
              >
                Add to Chrome
              </Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <Image
              src="/images/reddit-hero-image.webp"
              alt="AI Reddit Comment Generator"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-semibold text-gray-800 flex items-center">
                <MessageCircle className="mr-2 h-4 w-4 text-orange-600" />
                AI-crafted comments
              </p>
              <p className="text-xs text-gray-600">
                Increase your karma by 500%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
