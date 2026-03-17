import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import Client from "./client";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { teamMembers, contactLists, contacts } from "@/lib/db/schema";

// Dashboard route entry for /dashboard/contacts (Contact Lists & Contacts)
export const dynamic = "force-dynamic";

export default async function ContactsPage() {
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
    return <Client canManage={false} contactLists={[]} />;
  }

  const contactListsData = await db
    .select({
      id: contactLists.id,
      name: contactLists.name,
      createdAt: contactLists.createdAt,
    })
    .from(contactLists)
    .where(eq(contactLists.tenantId, membership.tenantId));

  return (
    <Client
      canManage={membership.role === "owner" || membership.role === "admin"}
      contactLists={contactListsData}
    />
  );
}