# CHANGELOG

## 2024-06-09 — MailForge Brand, Multi-Tenant Data Models, Campaign & CRM MVP

### Major Changes
- Complete rebrand of public site, auth, and dashboard to "MailForge" branding and voice throughout all user-facing content.
- Home page overhauled for MailForge: *hero*, *How it Works*, features, testimonials, pricing, FAQ, CTAs — all aligned to email marketing SaaS positioning.
- Navbar sections, footer, and content components updated for MailForge, replacing all legacy text, labels, and controls.
- Auth/login/signup onboarding flows overhauled for MailForge branding and messaging.
- Dashboard sidebar and main layout updated for MailForge. New navigation for Campaigns, Contacts, Templates, Analytics, Settings, Team — old Feature CRUD demo removed.
- **Database**: Added multi-tenant schema (`tenants`), campaigns, email templates, contact lists, contacts, email sends, analytics (full CRM/ESP data model); migrations required.
- All dashboard feature areas now surface canonical CRUD demos for: campaigns, contact lists, templates.
- Added campaign scheduling fields, status tracking, and analytics summary table.
- Demo UIs for campaign, template, contact list CRUD — server actions stubs ready for production logic.
- Marketing site contact form points to owner: hi@chirag.co; team and testimonials reference MailForge and real use cases.

### Files Added/Created
- `app/dashboard/campaigns/page.tsx`, `client.tsx`: Campaigns dashboard feature
- `app/dashboard/contacts/page.tsx`, `client.tsx`: Contact lists dashboard feature
- `app/dashboard/templates/page.tsx`, `client.tsx`: Email templates dashboard feature
- `app/dashboard/analytics/page.tsx`, `client.tsx`: Analytics dashboard feature

### Files Modified
- `content/home.ts`
- `components/layout/navbar.tsx`
- `app/page.tsx`
- `app/auth/client.tsx`
- `app/dashboard/layout.tsx`
- `components/dashboard/sidebar-nav.tsx`
- `app/dashboard/page.tsx`
- `lib/db/schema.ts`
- Removed/disabled legacy dashboard/feature CRUD scaffold

### Data Model
- Tables: `tenants`, `campaigns`, `email_templates`, `contact_lists`, `contacts`, `email_sends`, `analytics`, plus team/member/tokens legacy compatibility.

### Environment
- Requires: `SENDGRID_API_KEY`, `BASE_URL`, `DATABASE_URL`, `SENDGRID_FROM_EMAIL`

### Brand
- All references to previous branding replaced with "MailForge" for legal and marketing clarity.

---