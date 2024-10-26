"use client";
import { PersonaList } from "./persona-list";

export default function PersonaMain({ personas, user }) {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
            Manage your personas to customize the voice and tone of your AI
            comments.
          </p>
        </div>
        <PersonaList personas={personas} />
      </div>
    </div>
  );
}
