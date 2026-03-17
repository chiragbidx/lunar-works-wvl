export const LayoutFeaturesSection = () => (
  <section className="container py-24 sm:py-32" id="features">
    <div className="text-center mb-10">
      <h2 className="text-lg text-primary mb-2 tracking-wider">
        Features
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        Everything You Need for Results-Driven Email Campaigns
      </h3>
      <p className="md:w-1/2 mx-auto text-xl text-muted-foreground">
        MailForge gives you tools to create, manage, and optimize campaigns for your business.
      </p>
    </div>
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      <div className="p-8 bg-card border border-secondary rounded-xl">
        <h4 className="text-lg font-semibold mb-2">Beautiful Templates</h4>
        <p className="text-sm text-muted-foreground">
          Drag-and-drop editor and a library of responsive templates ensure your emails look great everywhere.
        </p>
      </div>
      <div className="p-8 bg-card border border-secondary rounded-xl">
        <h4 className="text-lg font-semibold mb-2">List & Contact Management</h4>
        <p className="text-sm text-muted-foreground">
          Easily import, manage, and segment contact lists to target the right audience every time.
        </p>
      </div>
      <div className="p-8 bg-card border border-secondary rounded-xl">
        <h4 className="text-lg font-semibold mb-2">Real-Time Analytics</h4>
        <p className="text-sm text-muted-foreground">
          Track opens, clicks, bounces, and unsubscribes to fine-tune your strategy and grow engagement.
        </p>
      </div>
      <div className="p-8 bg-card border border-secondary rounded-xl">
        <h4 className="text-lg font-semibold mb-2">Deliverability Focused</h4>
        <p className="text-sm text-muted-foreground">
          Industry-leading sending infrastructure to maximize inbox placement and campaign ROI.
        </p>
      </div>
      <div className="p-8 bg-card border border-secondary rounded-xl">
        <h4 className="text-lg font-semibold mb-2">Secure Multi-Tenancy</h4>
        <p className="text-sm text-muted-foreground">
          Robust permission system and tenant isolation keep your data private and secure.
        </p>
      </div>
      <div className="p-8 bg-card border border-secondary rounded-xl">
        <h4 className="text-lg font-semibold mb-2">Role-Based Access</h4>
        <p className="text-sm text-muted-foreground">
          Assign owner, admin, and member roles to control access and maintain oversight with ease.
        </p>
      </div>
    </div>
  </section>
);