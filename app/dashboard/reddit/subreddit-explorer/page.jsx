import ClientOnly from "@/components/ClientOnly";
import SubredditExplorer from "../components/SubredditExplorer";

export default function SubredditExplorerPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <ClientOnly>
        <SubredditExplorer />
      </ClientOnly>
    </div>
  );
}
