import Image from "next/image";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        {/* Uncomment the following line if you want to use your custom logo */}
        {/* <Image src="/redditpulse-logo.png" alt="RedditPulse Logo" width={100} height={100} className="mb-4" /> */}

        {/* Comment out the following line if you're using the custom logo */}
        <Loader2 className="w-16 h-16 text-blue-500 animate-spin mb-4" />

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Loading...
        </h2>
        <p className="text-gray-600">
          Please wait while we fetch your content.
        </p>
      </div>
    </div>
  );
}
