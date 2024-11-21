import { toast } from "sonner";

export const fetchUserComments = async (username) => {
  // Remove 'u/' prefix if present
  const cleanUsername = username.replace(/^u\//, "");

  console.log(`Fetching comments for user: ${cleanUsername}`);

  try {
    const response = await fetch(
      `https://www.reddit.com/user/${cleanUsername}/comments.json`
    );

    if (!response.ok) {
      console.error("Error fetching comments:", response.statusText);
      throw new Error(response.statusText);
    }

    const data = await response.json();
    console.log("Received data:", data);

    return data.data.children.map((child) => ({
      id: child.data.id,
      body: child.data.body,
      subreddit: child.data.subreddit,
      created_utc: child.data.created_utc,
      score: child.data.score,
      permalink: `https://reddit.com${child.data.permalink}`,
    }));
  } catch (error) {
    console.error("Error in fetchUserComments:", error);
    toast.error("Error fetching user comments");
    throw error;
  }
};
