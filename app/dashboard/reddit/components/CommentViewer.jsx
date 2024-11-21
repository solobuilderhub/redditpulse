"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUserComments } from "../data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

const CommentViewer = () => {
  const [username, setUsername] = useState("");
  const [searchTrigger, setSearchTrigger] = useState(0);

  const {
    data: comments,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["comments", username, searchTrigger],
    queryFn: () => fetchUserComments(username),
    enabled: !!username && searchTrigger > 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      toast.warning("Please enter a username");
      return;
    }
    setSearchTrigger((prev) => prev + 1);
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-background p-6  animate-fadeIn">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            Enter a Reddit username to view their comments
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
          <Input
            type="text"
            placeholder="Enter Reddit username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Loading..." : "View Comments"}
          </Button>
        </form>

        <div className="space-y-4">
          {isLoading && (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="p-6 space-y-4">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-4 w-24" />
                </Card>
              ))}
            </div>
          )}

          {comments?.map((comment) => (
            <Card
              key={comment.id}
              className="p-6 space-y-4 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium bg-accent px-3 py-1 rounded-full">
                  r/{comment.subreddit}
                </span>
                <span className="text-sm text-muted-foreground">
                  {formatDate(comment.created_utc)}
                </span>
              </div>

              <p className="text-foreground whitespace-pre-wrap">
                {comment.body}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Score: {comment.score}
                </span>
                <a
                  href={comment.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-reddit-orange hover:text-reddit-light transition-colors"
                >
                  View on Reddit
                </a>
              </div>
            </Card>
          ))}

          {isError && (
            <Card className="p-6 text-center text-destructive">
              Failed to fetch comments. Please check the username and try again.
            </Card>
          )}

          {comments?.length === 0 && (
            <Card className="p-6 text-center text-muted-foreground">
              No comments found for this user.
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentViewer;
