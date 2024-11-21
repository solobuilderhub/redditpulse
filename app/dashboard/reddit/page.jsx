import { PageHeader } from "@/components/custom/dashboard/page-header";
import {
  ArrowRight,
  MessageSquare,
  Layout,
  Target,
  TrainTrack,
} from "lucide-react";
import Link from "next/link";

const RedditPage = async () => {
  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Reddit", current: true },
  ];

  const navigationCards = [
    {
      title: "Managed Posts",
      description: "Track and manage your Reddit posts in one place",
      href: "/dashboard/reddit/managed-posts",
      icon: Layout,
      color: "bg-blue-500",
    },
    {
      title: "Subreddit Explorer",
      description: "Discover and analyze trending subreddits",
      href: "/dashboard/reddit/subreddit-explorer",
      icon: Target,
      color: "bg-green-500",
    },
    {
      title: "Comment Tracker",
      description: "Monitor and engage with post comments",
      href: "/dashboard/reddit/comment-tracker",
      icon: MessageSquare,
      color: "bg-purple-500",
    },
    {
      title: "Comment Viewer",
      description: "View recent comments of a user in one place",
      href: "/dashboard/reddit/comment-viewer",
      icon: TrainTrack,
      color: "bg-purple-500",
    },
  ];

  return (
    <>
      <PageHeader items={breadcrumbItems} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Reddit Management Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden"
            >
              <div className="p-6">
                <div
                  className={`inline-flex p-3 ${card.color} rounded-lg mb-4`}
                >
                  <card.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {card.title}
                </h3>

                <p className="text-gray-600 mb-4">{card.description}</p>

                <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-500">
                  Explore
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default RedditPage;
