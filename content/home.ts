// ─── Hero ───────────────────────────────────────────────────────────────────
export type HeroContent = {
  badgeInner: string;
  badgeOuter: string;
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  heroImageLight: string;
  heroImageDark: string;
  heroImageAlt: string;
};

// ...types unchanged...

export type HomeContent = {
  hero: HeroContent;
  sponsors: SponsorsContent;
  benefits: BenefitsContent;
  features: FeaturesContent;
  services: ServicesContent;
  testimonials: TestimonialsContent;
  team: TeamContent;
  pricing: PricingContent;
  contact: ContactContent;
  faq: FaqContent;
  footer: FooterContent;
  navbar: NavbarContent;
};

export const defaultHomeContent: HomeContent = {
  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badgeInner: "New",
    badgeOuter: "Welcome to MailForge",
    titleBefore: "Grow your business with ",
    titleHighlight: "MailForge",
    titleAfter: " Email Marketing",
    subtitle:
      "Powerful, easy-to-use email marketing campaigns—crafted for results, deliverability, and actionable insights. Create, send, and analyze campaigns all in one place.",
    primaryCta: { label: "Get Started Free", href: "#pricing" },
    secondaryCta: { label: "How MailForge Works", href: "#how-it-works" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "MailForge email campaign dashboard preview",
  },

  // ── Sponsors ─────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Powered by industry leaders",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "EnvelopeOpen", name: "SendGrid" },
      { icon: "Sparkle", name: "OpenAI" },
      { icon: "Wallet", name: "Stripe" },
      { icon: "Server", name: "Railway" },
    ],
  },

  // ── Benefits ─────────────────────────────────────────────────────────────
  benefits: {
    eyebrow: "Why MailForge",
    heading: "Email Marketing Made Effortless",
    description:
      "Get all the tools you need to build powerful campaigns, beautiful templates, and targeted lists—a single platform for your business growth.",
    items: [
      {
        icon: "MailPlus",
        title: "Designed for Deliverability",
        description: "Reach inboxes, not spam folders. Built-in best practices ensure your emails are delivered and read.",
      },
      {
        icon: "UserSearch",
        title: "Easy Audience Management",
        description: "Import, segment, and manage contacts with intuitive list tools and import wizards.",
      },
      {
        icon: "PenTool",
        title: "Stunning Email Templates",
        description: "Build branded emails in minutes with our drag-and-drop, WYSIWYG editor.",
      },
      {
        icon: "BarChart3",
        title: "Actionable Analytics",
        description: "See opens, clicks, bounces, and unsubscribes. Make data-driven decisions instantly.",
      },
    ],
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    eyebrow: "Features",
    heading: "Everything You Need to Grow",
    subtitle:
      "MailForge packs pro-level tools into a user-friendly dashboard. Scale from solo creator to enterprise effortlessly.",
    items: [
      { icon: "UserPlus2", title: "Contact Management", description: "Build unlimited lists, import contacts, segment by activity or custom fields." },
      { icon: "PenSquare", title: "WYSIWYG Template Editor", description: "Drag, drop, edit—create stunning, responsive emails with ease. No coding required." },
      { icon: "Send", title: "Campaign Scheduling & Sending", description: "Send now or schedule—MailForge handles deliverability and status tracking." },
      { icon: "PieChart", title: "Campaign Analytics", description: "Real-time stats: opens, clicks, bounces, unsubscribes—track, learn, improve." },
      { icon: "Users", title: "Multi-Tenant, Team Ready", description: "Invite teammates, assign roles, manage everything with fine-grained controls." },
      { icon: "Lock", title: "Secure & Compliant", description: "Data isolation, role-based access, and best practices for privacy and compliance." },
    ],
  },

  // ── Services ─────────────────────────────────────────────────────────────
  services: {
    eyebrow: "How it Works",
    heading: "Launch Your Email Campaign in Minutes",
    subtitle:
      "Create. Customize. Send. Analyze. MailForge keeps the workflow simple so you get results faster.",
    items: [
      { title: "Sign Up and Onboard", description: "Create your account—no credit card required.", pro: false },
      { title: "Import Contacts", description: "Build or import your contact list. Ensure compliance with built-in checks.", pro: false },
      { title: "Design a Template", description: "Use our drag-and-drop editor or start from a proven layout.", pro: false },
      { title: "Create Campaign", description: "Select recipients, choose your template, preview, and schedule/send.", pro: false },
      { title: "Track Performance", description: "See opens, clicks, bounces, unsubscribes in real time.", pro: false },
      { title: "Grow & Repeat", description: "Fine-tune your next campaign using analytics and audience insights.", pro: true },
    ],
  },

  // ── Testimonials ─────────────────────────────────────────────────────────
  testimonials: {
    eyebrow: "Customer Stories",
    heading: "MailForge Drives Real Growth",
    reviews: [
      {
        image: "/team1.jpg",
        name: "Lucas Pratt",
        role: "Marketing Lead, SwiftHQ",
        comment: "MailForge made campaign creation and analytics seamless. We doubled our open rates within the first month—could not ask for a more robust platform.",
        rating: 5.0,
      },
      {
        image: "/team2.jpg",
        name: "Samantha Lee",
        role: "Founder, CreateSpark",
        comment: "Migrating to MailForge was effortless. The UI is intuitive and support is excellent. Our team saves hours every week.",
        rating: 4.9,
      },
      {
        image: "/team3.jpg",
        name: "Ajay Dhillon",
        role: "Growth Strategist, CloudGram",
        comment: "Template editing is a breeze, and analytics help us optimize every send. Highly recommended for agencies and solo marketers alike.",
        rating: 5.0,
      },
      {
        image: "/demo-img.jpg",
        name: "Isabel Gutierrez",
        role: "Co-Founder, Nimbus Ecommerce",
        comment: "MailForge’s campaign dashboard quickly became our source of truth—it just works and scales with us.",
        rating: 4.8,
      },
    ],
  },

  // ── Team ─────────────────────────────────────────────────────────────────
  team: {
    eyebrow: "Meet the Team",
    heading: "Who’s Behind MailForge?",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder & CEO"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/chiragdodiya" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
        ],
      },
      {
        imageUrl: "/team2.jpg",
        firstName: "Priya",
        lastName: "Singh",
        positions: ["Lead Engineer"],
        socialNetworks: [
          { name: "LinkedIn", url: "#" },
        ],
      },
      {
        imageUrl: "/team3.jpg",
        firstName: "Marcus",
        lastName: "Nguyen",
        positions: ["Product Designer"],
        socialNetworks: [
          { name: "LinkedIn", url: "#" },
        ],
      },
      {
        imageUrl: "/team3.jpg",
        firstName: "Sara",
        lastName: "Kim",
        positions: ["Marketing Lead"],
        socialNetworks: [
          { name: "LinkedIn", url: "#" },
        ],
      },
    ],
  },

  // ── Pricing ──────────────────────────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    heading: "Plans for Teams of Any Size",
    subtitle: "Start free, scale as you grow—MailForge works for solo founders, agencies, and marketing teams.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Starter",
        popular: false,
        price: 0,
        description: "Perfect for solopreneurs and early MVPs.",
        buttonText: "Start for Free",
        benefits: [
          "Up to 500 contacts",
          "Basic campaign tools",
          "5 email templates",
          "Simple analytics",
          "Community support",
        ],
      },
      {
        title: "Growth",
        popular: true,
        price: 49,
        description: "All core features plus automation and advanced insight.",
        buttonText: "Start Trial",
        benefits: [
          "Unlimited contacts",
          "Advanced campaign scheduling",
          "Unlimited templates",
          "Real-time analytics",
          "Priority email support",
        ],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 199,
        description: "Compliance, integrations, and dedicated success.",
        buttonText: "Contact Sales",
        benefits: [
          "White-glove onboarding",
          "Dedicated manager",
          "API access & webhooks",
          "Custom reporting",
          "Security reviews",
        ],
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────
  contact: {
    eyebrow: "Contact",
    heading: "Connect with MailForge",
    description:
      "Questions about campaigns, features, or growth? Reach out—we’re here to help you forge meaningful connections.",
    mailtoAddress: "hi@chirag.co",
    info: {
      address: { label: "Location", value: "Remote-first • Global" },
      phone: { label: "Phone", value: "" },
      email: { label: "Email", value: "hi@chirag.co" },
      hours: { label: "Business Hours", value: ["Monday - Friday", "9AM - 6PM"] },
    },
    formSubjects: ["Product Demo", "Pricing", "Technical Help", "Feature Request", "Press / Media"],
    formSubmitLabel: "Send Message",
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently Asked About MailForge",
    items: [
      { question: "Is MailForge suitable for small businesses or agencies?", answer: "Absolutely. Our pricing and features scale for solo founders, teams, and fast-growing agencies." },
      { question: "Can I import and export my contacts?", answer: "Yes, you can import contacts from CSV and export your lists at any time." },
      { question: "Do you offer a trial or free tier?", answer: "Yes, MailForge offers a generous free Starter plan—try all core features risk-free." },
      { question: "Is my data secure and compliant?", answer: "Security and compliance are core to MailForge. We follow best practices for data isolation, encryption, and privacy regulations." },
      { question: "Can I send newsletters and automations?", answer: "Yes, the Growth plan unlocks advanced campaign scheduling, batch sends, and more automation features." },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────────────────
  footer: {
    brandName: "MailForge",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "hi@chirag.co", href: "mailto:hi@chirag.co" },
          { label: "Github", href: "https://github.com/chiragdodiya" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chiragdodiya" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/chiragdodiya" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chiragdodiya" },
        ],
      },
    ],
    copyright: "\u00a9 2026 MailForge Email Marketing Platform.",
    attribution: { label: "Built with Next.js", href: "https://nextjs.org" },
  },

  // ── Navbar ───────────────────────────────────────────────────────────────
  navbar: {
    brandName: "MailForge",
    routes: [
      { href: "/#how-it-works", label: "How it Works" },
      { href: "/#features", label: "Features" },
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Solutions",
    featureImage: { src: "/hero-image-light.jpeg", alt: "MailForge campaign dashboard" },
    features: [
      { title: "Campaign Creation", description: "Easily launch, schedule, and send powerful campaigns." },
      { title: "Audience Management", description: "Import, organize, segment, and personalize." },
      { title: "Analytics & Reporting", description: "Open rates, engagement insights, exportable reports." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Sign up",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya", ariaLabel: "View MailForge on GitHub" },
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}