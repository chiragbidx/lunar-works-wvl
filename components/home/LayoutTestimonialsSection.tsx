export const LayoutTestimonialsSection = () => (
  <section className="container py-24 sm:py-32" id="testimonials">
    <div className="text-center mb-10">
      <h2 className="text-lg text-primary mb-2 tracking-wider">
        Testimonials
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold mb-4">
        Marketers Love MailForge
      </h3>
    </div>
    <div className="grid md:grid-cols-3 gap-8 mt-12">
      <div className="p-8 bg-card border border-secondary rounded-xl">
        <p className="text-base italic mb-3 text-muted-foreground">
          “MailForge’s intuitive design and robust analytics helped us grow our list and double engagement. Highly recommended!”
        </p>
        <h4 className="font-bold text-lg mb-0">Alex G.</h4>
        <span className="text-xs opacity-60">Growth Marketer, AgencyX</span>
      </div>
      <div className="p-8 bg-card border border-secondary rounded-xl">
        <p className="text-base italic mb-3 text-muted-foreground">
          “Switching to MailForge was effortless, and our deliverability rates immediately improved. The template editor is a game changer.”
        </p>
        <h4 className="font-bold text-lg mb-0">Priya D.</h4>
        <span className="text-xs opacity-60">Founder, DTC Brand</span>
      </div>
      <div className="p-8 bg-card border border-secondary rounded-xl">
        <p className="text-base italic mb-3 text-muted-foreground">
          “Finally, a platform that puts analytics front and center. MailForge gives us the insight to evolve every campaign.”
        </p>
        <h4 className="font-bold text-lg mb-0">Michael B.</h4>
        <span className="text-xs opacity-60">Marketing Ops, SaaS Co.</span>
      </div>
    </div>
  </section>
);