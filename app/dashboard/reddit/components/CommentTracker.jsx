"use client";
import React, { useState, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw, Trash2 } from "lucide-react";
import CommentTable from "./CommentTable";
import AddCommentDialog from "./AddCommentDialog";
import { toast } from "sonner";
import { useRedditContext } from "../RedditContext";

const CommentTracker = () => {
  const [subredditFilter, setSubredditFilter] = useState("");
  const [selectedComments, setSelectedComments] = useState([]);
  const {
    trackedComments,
    addTrackedComment,
    removeTrackedComment,
    isCommentFromManagedPost,
  } = useRedditContext();

  const parseRedditUrl = (url) => {
    const match = url.match(
      /\/r\/([^/]+)\/comments\/([^/]+)(?:\/[^/]+\/([^/]+))?/
    );
    if (match) {
      return {
        subreddit: match[1],
        postId: match[2],
        commentId: match[3] || match[2],
      };
    }
    return null;
  };

  const fetchCommentStatus = useCallback(
    async (comment) => {
      try {
        const parsedUrl = parseRedditUrl(comment.url);
        if (!parsedUrl) throw new Error("Invalid Reddit URL");

        const apiUrl = `https://www.reddit.com/r/${parsedUrl.subreddit}/comments/${parsedUrl.postId}/_/${parsedUrl.commentId}.json`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          // removeTrackedComment(comment.id);
          return null;
        }

        const data = await response.json();

        // Enhanced checks for deleted/removed comments
        if (
          !data[1]?.data?.children?.[0]?.data || // No data
          data[1].data.children.length === 0 || // Empty children array
          data[1].data.children[0].kind === "more" || // "more" type instead of "t1" for comments
          data[1].data.children[0].data.body === "[deleted]" || // Deleted by user
          data[1].data.children[0].data.body === "[removed]" || // Removed by moderator
          data[1].data.children[0].data.author === "[deleted]" // Deleted account
        ) {
          // removeTrackedComment(comment.id);
          return null;
        }

        const commentData = data[1].data.children[0].data;
        return {
          ...comment,
          body: commentData.body,
          upvotes: commentData.ups,
          organicTraffic: commentData.score,
          status: commentData.removed_by_category ? "Removed" : "Active",
          isFromManagedPost: isCommentFromManagedPost(comment.url),
        };
      } catch (error) {
        console.error("Error fetching comment status:", error);
        // For network errors or other issues, we might want to keep the comment
        // and just mark it as having an error rather than removing it
        return {
          ...comment,
          upvotes: 0,
          organicTraffic: 0,
          status: "Error",
          isFromManagedPost: isCommentFromManagedPost(comment.url),
        };
      }
    },
    [isCommentFromManagedPost, removeTrackedComment]
  );

  const { refetch } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      // console.log("Current tracked comments:", trackedComments);
      const updatedComments = await Promise.all(
        trackedComments.map(async (comment) => {
          const result = await fetchCommentStatus(comment);
          // console.log(`Comment ${comment.id} status:`, result);
          return result;
        })
      );
      const filteredComments = updatedComments.filter(
        (comment) => comment !== null
      );
      // console.log("Filtered comments after refresh:", filteredComments);
      return filteredComments;
    },
    enabled: false,
  });

  const handleRefresh = async () => {
    toast.promise(refetch(), {
      loading: "Refreshing comments...",
      success: "Comments refreshed successfully!",
      error: "Failed to refresh comments",
    });
  };

  const handleAddComment = async (newCommentUrl) => {
    const parsedUrl = parseRedditUrl(newCommentUrl);
    if (!parsedUrl) {
      alert("Invalid Reddit URL. Please enter a valid comment URL.");
      return;
    }

    const currentDate = new Date().toISOString().split("T")[0];
    const newCommentEntry = {
      id: Date.now(),
      date: currentDate,
      subreddit: parsedUrl.subreddit,
      url: newCommentUrl,
      organicTraffic: "0",
      upvotes: 0,
      affiliateStatus: "Checking...",
    };

    const updatedComment = await fetchCommentStatus(newCommentEntry);
    addTrackedComment(updatedComment);
  };

  const handleRemoveComment = (commentId) => {
    removeTrackedComment(commentId);
    setSelectedComments((prevSelected) =>
      prevSelected.filter((id) => id !== commentId)
    );
  };

  const handleRemoveSelectedComments = () => {
    selectedComments.forEach((commentId) => removeTrackedComment(commentId));
    setSelectedComments([]);
  };

  const handleSelectComment = (commentId) => {
    setSelectedComments((prevSelected) =>
      prevSelected.includes(commentId)
        ? prevSelected.filter((id) => id !== commentId)
        : [...prevSelected, commentId]
    );
  };

  const filteredComments = trackedComments.filter((comment) =>
    comment.subreddit.toLowerCase().includes(subredditFilter.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Input
          type="text"
          placeholder="Filter by subreddit"
          value={subredditFilter}
          onChange={(e) => setSubredditFilter(e.target.value)}
          className="max-w-sm"
        />
        <div className="space-x-2">
          <Button onClick={handleRefresh} variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <AddCommentDialog onAddComment={handleAddComment} />
          {selectedComments.length > 0 && (
            <Button
              onClick={handleRemoveSelectedComments}
              variant="destructive"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Remove Selected
            </Button>
          )}
        </div>
      </div>
      <CommentTable
        comments={filteredComments}
        selectedComments={selectedComments}
        onSelectComment={handleSelectComment}
        onRemoveComment={handleRemoveComment}
      />
    </div>
  );
};

export default CommentTracker;
