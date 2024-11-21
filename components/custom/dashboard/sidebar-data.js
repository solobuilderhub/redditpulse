import {
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  ListIcon,
  Send,
  Settings2,
  SquareTerminal,
  NetworkIcon,
  GalleryVerticalIcon,
} from "lucide-react";
export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: SquareTerminal,
      isActive: true,
      items: [],
    },
    {
      title: "Personas",
      url: "/dashboard/personas",
      icon: ListIcon,
      items: [
        {
          title: "Add Persona",
          url: "/dashboard/personas/create",
        },
        {
          title: "Explorer",
          url: "/dashboard/personas",
        },
      ],
    },
    {
      title: "Prompts",
      url: "/dashboard/prompts",
      icon: BookOpen,
      items: [],
    },
    {
      title: "Reddit",
      url: "/dashboard/reddit",
      icon: NetworkIcon,
      items: [
        {
          title: "Subreddit Explorer",
          url: "/dashboard/reddit/subreddit-explorer",
        },
        {
          title: "Comment Viewer",
          url: "/dashboard/reddit/comment-viewer",
        },
        {
          title: "Comment Tracker",
          url: "/dashboard/reddit/comment-tracker",
        },
        {
          title: "Managed Posts",
          url: "/dashboard/reddit/managed-posts",
        },
      ],
    },
    { title: "AI Playground", url: "/dashboard/playground", icon: Bot },
    { title: "Meme Generator", url: "/dashboard/generate-meme", icon: Frame },
    // {
    //   title: "Settings",
    //   url: "/dashboard/settings",
    //   icon: Settings2,
    //   items: [],
    // },
  ],
  navSecondary: [
    {
      title: "Subscription",
      url: "/dashboard/subscription",
      icon: GalleryVerticalIcon,
    },
    {
      title: "Extension",
      url: "https://chromewebstore.google.com/detail/redditpulse/kbinlfidhigbkaegjhbljpjfkchgmpob",
      target: "_blank",
      icon: LifeBuoy,
    },
  ],
};
