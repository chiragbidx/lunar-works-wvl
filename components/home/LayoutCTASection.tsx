import { Button } from "@/components/ui/button";
import Link from "next/link";

export const LayoutCTASection = () => (
  <section className="container py-24 sm:py-32" id="get-started">
    <div className="bg-primary rounded-2xl py-16 px-8 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="text-white md:w-2/3">
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          Ready to Supercharge Your Email Marketing?
        </h2>
        <p className="mb-6 text-lg opacity-90">
          Try MailForge free and discover how easy it is to create, send, and analyze effective campaigns today.
        </p>
        <span className="block font-medium">
          Questions? <a href="mailto:hi@chirag.co" className="underline">Contact us</a>
        </span>
      </div>
      <div className="w-full md:w-auto flex flex-col items-center md:items-end">
        <Button asChild size="lg" className="w-full md:w-auto">
          <Link href="/auth#signup">
            Get Started Free
          </Link>
        </Button>
        <span className="opacity-70 text-white mt-2 text-sm">No credit card required</span>
      </div>
    </div>
  </section>
);