"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const SubredditSearch = ({ onSubredditSelect, searchTerm, setSearchTerm }) => {
  const searchSubreddits = async (term) => {
    const response = await fetch(
      `https://www.reddit.com/subreddits/search.json?q=${term}`
    );
    const data = await response.json();
    return data.data.children.map((child) => child.data);
  };

  const {
    data: subreddits,
    isLoading: isLoadingSubreddits,
    refetch: refetchSubreddits,
  } = useQuery({
    queryKey: ["subreddits", searchTerm],
    queryFn: () => searchSubreddits(searchTerm),
    enabled: false,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    refetchSubreddits();
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <Input
          type="text"
          placeholder="Search subreddits"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button type="submit">Search</Button>
      </form>
      {isLoadingSubreddits && <Loader2 className="animate-spin mt-2" />}
      {subreddits && searchTerm && (
        <Card className="mt-2">
          <CardContent className="p-2">
            {subreddits.map((subreddit) => (
              <div
                key={subreddit.id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => onSubredditSelect(subreddit.display_name)}
              >
                {subreddit.display_name}
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SubredditSearch;
