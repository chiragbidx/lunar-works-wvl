export const LayoutHowItWorksSection = () => (
  <section className="container py-24 sm:py-32" id="how-it-works">
    <div className="text-center mb-10">
      <h2 className="text-lg text-primary mb-2 tracking-wider">
        How it Works
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        Email Marketing Simplified with MailForge
      </h3>
      <p className="md:w-1/2 mx-auto text-xl text-muted-foreground">
        Powerful email campaigns from creation to analytics, in just a few steps.
      </p>
    </div>
    <div className="grid md:grid-cols-4 gap-6 mt-12">
      <div className="p-6 bg-card border border-secondary rounded-xl flex flex-col items-center">
        <span className="text-3xl font-bold mb-3 bg-primary/10 text-primary rounded-full w-14 h-14 flex items-center justify-center">1</span>
        <h4 className="text-lg font-semibold mb-2">Create/Import List</h4>
        <p className="text-sm text-muted-foreground">
          Onboard to MailForge, import existing contacts or create new lists for your campaigns.
        </p>
      </div>
      <div className="p-6 bg-card border border-secondary rounded-xl flex flex-col items-center">
        <span className="text-3xl font-bold mb-3 bg-primary/10 text-primary rounded-full w-14 h-14 flex items-center justify-center">2</span>
        <h4 className="text-lg font-semibold mb-2">Design Email</h4>
        <p className="text-sm text-muted-foreground">
          Use our intuitive editor or pre-built templates to craft engaging emails.
        </p>
      </div>
      <div className="p-6 bg-card border border-secondary rounded-xl flex flex-col items-center">
        <span className="text-3xl font-bold mb-3 bg-primary/10 text-primary rounded-full w-14 h-14 flex items-center justify-center">3</span>
        <h4 className="text-lg font-semibold mb-2">Launch Campaign</h4>
        <p className="text-sm text-muted-foreground">
          Choose your recipients, set a schedule, and send or automate with confidence.
        </p>
      </div>
      <div className="p-6 bg-card border border-secondary rounded-xl flex flex-col items-center">
        <span className="text-3xl font-bold mb-3 bg-primary/10 text-primary rounded-full w-14 h-14 flex items-center justify-center">4</span>
        <h4 className="text-lg font-semibold mb-2">Track Results</h4>
        <p className="text-sm text-muted-foreground">
          Monitor open, click, and conversion rates in real-time with actionable analytics.
        </p>
      </div>
    </div>
  </section>
);