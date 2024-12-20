import { auth } from "@/app/(auth)/auth";
import PricingCard from "./components/pricing-card";
import { PricingStatus } from "./components/pricing-status";
import { getUser } from "@/api/user-data";
import { PageHeader } from "@/components/custom/dashboard/page-header";

const SubscriptionPage = async () => {
  const session = await auth();
  const user = await getUser(session.user.email);
  const token = session.accessToken;
  const { name, email, subscriptionStatus, subscriptionPlan } = user;

  const breadcrumbItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Subscription", current: true },
  ];
  return (
    <>
      <PageHeader items={breadcrumbItems} />
      <div className="flex flex-col min-h-screen w-full max-w-5xl mx-auto">
        <header className="flex items-center h-16 border-b px-6">
          <h1 className="font-semibold text-2xl text-gray-800">Subscription</h1>
        </header>
        <main className="flex-1 flex flex-col gap-8 p-6 bg-gray-50">
          <PricingStatus
            name={name}
            email={email}
            subscriptionStatus={subscriptionStatus}
            subscriptionPlan={subscriptionPlan}
          />
          {subscriptionPlan === "free" && (
            <PricingCard email={email} userToken={token} />
          )}
        </main>
      </div>
    </>
  );
};

export default SubscriptionPage;
