"use client";
import React, { createContext, useContext } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const RedditContext = createContext();

export const RedditProvider = ({ children }) => {
  const [managedPosts, setManagedPosts] = useLocalStorage("managedPosts", []);
  const [trackedComments, setTrackedComments] = useLocalStorage(
    "trackedComments",
    []
  );

  const addManagedPost = (post) => {
    setManagedPosts((prevPosts) => {
      if (!prevPosts.some((p) => p.id === post.id)) {
        return [...prevPosts, post];
      }
      return prevPosts;
    });
  };

  const removeManagedPost = (postId) => {
    setManagedPosts((prevPosts) =>
      prevPosts.filter((post) => post.id !== postId)
    );
    // Also remove associated tracked comments
    setTrackedComments((prevComments) =>
      prevComments.filter((comment) => !comment.url.includes(postId))
    );
  };

  const addTrackedComment = (comment) => {
    setTrackedComments((prevComments) => {
      if (!prevComments.some((c) => c.id === comment.id)) {
        return [...prevComments, comment];
      }
      return prevComments;
    });
  };

  const removeTrackedComment = (commentId) => {
    setTrackedComments((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
  };

  const isCommentFromManagedPost = (commentUrl) => {
    return managedPosts.some((post) => commentUrl.includes(post.id));
  };

  return (
    <RedditContext.Provider
      value={{
        managedPosts,
        addManagedPost,
        removeManagedPost,
        trackedComments,
        addTrackedComment,
        removeTrackedComment,
        isCommentFromManagedPost,
      }}
    >
      {children}
    </RedditContext.Provider>
  );
};

export const useRedditContext = () => {
  const context = useContext(RedditContext);
  if (context === undefined) {
    throw new Error("useRedditContext must be used within a RedditProvider");
  }
  return context;
};
