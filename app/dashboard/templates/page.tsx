import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import Client from "./client";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { teamMembers, emailTemplates } from "@/lib/db/schema";

// Dashboard route entry for /dashboard/templates
export const dynamic = "force-dynamic";

export default async function TemplatesPage() {
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
    return <Client canManage={false} templates={[]} />;
  }

  const templatesData = await db
    .select({
      id: emailTemplates.id,
      name: emailTemplates.name,
      subject: emailTemplates.subject,
      createdAt: emailTemplates.createdAt,
      updatedAt: emailTemplates.updatedAt,
    })
    .from(emailTemplates)
    .where(eq(emailTemplates.tenantId, membership.tenantId));

  return (
    <Client
      canManage={membership.role === "owner" || membership.role === "admin"}
      templates={templatesData}
    />
  );
}