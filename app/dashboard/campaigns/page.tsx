import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import Client from "./client";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { teamMembers, tenants, campaigns, emailTemplates, contactLists } from "@/lib/db/schema";

// Dashboard route entry for /dashboard/campaigns
export const dynamic = "force-dynamic";

export default async function CampaignsPage() {
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

  // If no membership, user can't manage campaigns
  if (!membership) {
    return <Client canManage={false} campaigns={[]} templates={[]} contactLists={[]} />;
  }

  const campaignsData = await db
    .select({
      id: campaigns.id,
      name: campaigns.name,
      status: campaigns.status,
      subject: campaigns.subject,
      scheduledAt: campaigns.scheduledAt,
      sentAt: campaigns.sentAt,
      createdAt: campaigns.createdAt,
      templateName: emailTemplates.name,
      listName: contactLists.name,
    })
    .from(campaigns)
    .leftJoin(emailTemplates, eq(emailTemplates.id, campaigns.emailTemplateId))
    .leftJoin(contactLists, eq(contactLists.id, campaigns.contactListId))
    .where(eq(campaigns.tenantId, membership.tenantId));

  const templatesData = await db
    .select({
      id: emailTemplates.id,
      name: emailTemplates.name,
    })
    .from(emailTemplates)
    .where(eq(emailTemplates.tenantId, membership.tenantId));

  const contactListsData = await db
    .select({
      id: contactLists.id,
      name: contactLists.name,
    })
    .from(contactLists)
    .where(eq(contactLists.tenantId, membership.tenantId));

  return (
    <Client
      canManage={membership.role === "owner" || membership.role === "admin"}
      campaigns={campaignsData}
      templates={templatesData}
      contactLists={contactListsData}
    />
  );
}