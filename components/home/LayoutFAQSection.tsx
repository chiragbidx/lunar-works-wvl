export const LayoutFAQSection = () => (
  <section className="container py-24 sm:py-32" id="faq">
    <div className="text-center mb-10">
      <h2 className="text-lg text-primary mb-2 tracking-wider">
        Frequently Asked Questions
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        Your MailForge Questions Answered
      </h3>
      <p className="md:w-1/2 mx-auto text-xl text-muted-foreground">
        Everything you need to know about getting started and maximizing your email campaigns.
      </p>
    </div>
    <div className="md:w-2/3 mx-auto mt-12 space-y-6">
      <div className="bg-card border border-secondary rounded-xl p-6 text-left">
        <h4 className="font-semibold mb-1">Can I import my contacts from another service?</h4>
        <p className="text-sm text-muted-foreground">
          Yes, MailForge allows easy contact import from CSV. Our import tool provides guidance to ensure a seamless transition.
        </p>
      </div>
      <div className="bg-card border border-secondary rounded-xl p-6 text-left">
        <h4 className="font-semibold mb-1">Is MailForge suitable for teams?</h4>
        <p className="text-sm text-muted-foreground">
          Absolutely. MailForge supports multi-user teams, with role-based access control for owners, admins, and members.
        </p>
      </div>
      <div className="bg-card border border-secondary rounded-xl p-6 text-left">
        <h4 className="font-semibold mb-1">Do you offer a free trial?</h4>
        <p className="text-sm text-muted-foreground">
          Yes, start with our 14-day free trial to explore all features. No credit card required!
        </p>
      </div>
      <div className="bg-card border border-secondary rounded-xl p-6 text-left">
        <h4 className="font-semibold mb-1">How does MailForge handle data security?</h4>
        <p className="text-sm text-muted-foreground">
          We prioritize your privacy with secure, tenant-isolated data and built-in compliance features.
        </p>
      </div>
      <div className="bg-card border border-secondary rounded-xl p-6 text-left">
        <h4 className="font-semibold mb-1">Where can I get support?</h4>
        <p className="text-sm text-muted-foreground">
          Reach out to us anytime at <a href="mailto:hi@chirag.co" className="text-primary underline">hi@chirag.co</a> or use the in-app help for assistance.
        </p>
      </div>
    </div>
  </section>
);