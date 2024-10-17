"use client";

const SubredditTags = ({
  selectedSubreddits,
  activeSubreddit,
  onSubredditClick,
  onRemoveSubreddit,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {selectedSubreddits.map((subreddit) => (
        <div
          key={subreddit}
          className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 ${
            activeSubreddit === subreddit
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          <span
            onClick={() => onSubredditClick(subreddit)}
            className="cursor-pointer"
          >
            {subreddit}
          </span>
          <button
            className="text-xs"
            onClick={() => onRemoveSubreddit(subreddit)}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default SubredditTags;
