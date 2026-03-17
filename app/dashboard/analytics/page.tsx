import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import Client from "./client";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { teamMembers, campaigns, analytics } from "@/lib/db/schema";

// Dashboard route entry for /dashboard/analytics
export const dynamic = "force-dynamic";

export default async function AnalyticsPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  // Find user's tenant and role
  const [membership] = await db
    .select({
      tenantId: teamMembers.tenantId,
      role: teamMembers.role,
    })
    .from(teamMembers)
    .where(eq(teamMembers.userId, session.userId))
    .limit(1);

  if (!membership) {
    return <Client analytics={[]} />;
  }

  const analyticsData = await db
    .select({
      id: analytics.id,
      campaignId: analytics.campaignId,
      opens: analytics.opens,
      clicks: analytics.clicks,
      bounces: analytics.bounces,
      unsubscribes: analytics.unsubscribes,
      updatedAt: analytics.updatedAt,
      createdAt: analytics.createdAt,
    })
    .from(analytics)
    .where(
      eq(analytics.campaignId, campaigns.id)
    );
  // Note: For simplicity, join or enrich with campaign names as needed in the real app

  return (
    <Client
      analytics={analyticsData}
    />
  );
}