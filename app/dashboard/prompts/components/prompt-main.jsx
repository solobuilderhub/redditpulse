// /app/dashboard/prompts/components/prompt-main.jsx
"use client";
import { PromptList } from "./prompt-list";

export default function PromptMain({ prompts }) {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
            Manage your prompts to customize the AI-generated comments.
          </p>
        </div>
        <PromptList prompts={prompts} />
      </div>
    </div>
  );
}
