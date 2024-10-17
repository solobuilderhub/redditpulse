import ClientOnly from "@/components/ClientOnly";
import ManagedPosts from "../components/ManagedPosts";

export default function SubredditExplorerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <ClientOnly>
        <ManagedPosts />
      </ClientOnly>
    </div>
  );
}
