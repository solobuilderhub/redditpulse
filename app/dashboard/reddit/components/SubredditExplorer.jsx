"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useRedditContext } from "../RedditContext";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import SubredditSearch from "./SubredditSearch";
import SubredditTags from "./SubredditTags";
import PostTypeSelector from "./PostTypeSelector";
import PostTable from "./PostTable";

const SubredditExplorer = () => {
  const [selectedSubreddits, setSelectedSubreddits] = useLocalStorage(
    "selectedSubreddits",
    []
  );
  const [activeSubreddit, setActiveSubreddit] = useLocalStorage(
    "activeSubreddit",
    null
  );
  const [postType, setPostType] = useState("hot");
  const { addManagedPost, managedPosts } = useRedditContext();

  const fetchSubredditPosts = async (subreddit) => {
    const response = await fetch(
      `https://www.reddit.com/r/${subreddit}/${postType}.json`
    );
    const data = await response.json();
    return data.data.children.map((child) => child.data);
  };

  const {
    data: posts,
    isLoading: isLoadingPosts,
    refetch: refetchPosts,
  } = useQuery({
    queryKey: ["posts", activeSubreddit, postType],
    queryFn: () => fetchSubredditPosts(activeSubreddit),
    enabled: !!activeSubreddit,
  });

  const handlePostCheck = (post) => {
    addManagedPost(post);
  };

  const handleSubredditSelect = (subreddit) => {
    if (!selectedSubreddits.includes(subreddit)) {
      setSelectedSubreddits([...selectedSubreddits, subreddit]);
    }
    setActiveSubreddit(subreddit);
  };

  const handleRemoveSubreddit = (subreddit) => {
    setSelectedSubreddits(selectedSubreddits.filter((s) => s !== subreddit));
    if (activeSubreddit === subreddit) {
      setActiveSubreddit(selectedSubreddits[0] || null);
    }
  };

  const handlePostTypeChange = (value) => {
    setPostType(value);
    refetchPosts();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Subreddit Explorer</h1>

      <SubredditSearch onSubredditSelect={handleSubredditSelect} />

      <SubredditTags
        selectedSubreddits={selectedSubreddits}
        activeSubreddit={activeSubreddit}
        onSubredditClick={setActiveSubreddit}
        onRemoveSubreddit={handleRemoveSubreddit}
      />

      {activeSubreddit && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              Posts in r/{activeSubreddit}
            </h2>
            <PostTypeSelector
              postType={postType}
              onPostTypeChange={handlePostTypeChange}
            />
          </div>

          {isLoadingPosts && <Loader2 className="animate-spin" />}
          {posts && (
            <PostTable
              posts={posts}
              handlePostCheck={handlePostCheck}
              managedPosts={managedPosts}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SubredditExplorer;
