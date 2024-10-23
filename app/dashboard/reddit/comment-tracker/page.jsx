"use client";

import ClientOnly from "@/components/ClientOnly";
import CommentTracker from "../components/CommentTracker";

export default function CommentTrackerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8">Track Comments in One Place</h1>
      <ClientOnly>
        <CommentTracker />
      </ClientOnly>
    </div>
  );
}
