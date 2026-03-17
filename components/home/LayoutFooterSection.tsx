import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const LayoutFooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex font-bold items-center">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />
              <h3 className="text-2xl">MailForge</h3>
            </Link>
            <p className="mt-2 opacity-70 text-sm">
              Powerful Email Marketing Made Easy.<br />
              Copyright © {new Date().getFullYear()} Chirag Dodiya. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Product</h3>
            <Link href="#features" className="opacity-60 hover:opacity-100">Features</Link>
            <Link href="#pricing" className="opacity-60 hover:opacity-100">Pricing</Link>
            <Link href="#faq" className="opacity-60 hover:opacity-100">FAQs</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Company</h3>
            <Link href="/about" className="opacity-60 hover:opacity-100">About</Link>
            <Link href="/privacy" className="opacity-60 hover:opacity-100">Privacy</Link>
            <Link href="/terms" className="opacity-60 hover:opacity-100">Terms</Link>
          </div>
          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            <h3 className="font-bold text-lg">Resources</h3>
            <Link href="/blog" className="opacity-60 hover:opacity-100">Blog</Link>
            <Link href="/guides" className="opacity-60 hover:opacity-100">Guides</Link>
            <Link href="/support" className="opacity-60 hover:opacity-100">Help Center</Link>
          </div>
          <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
            <h3 className="font-bold text-lg">Contact</h3>
            <a
              href="mailto:hi@chirag.co"
              className="opacity-60 hover:opacity-100"
            >hi@chirag.co</a>
            <Link href="/contact" className="opacity-60 hover:opacity-100">Contact Form</Link>
          </div>
        </div>
        <Separator className="my-6" />
        <section>
          <span className="opacity-70 text-xs">
            Made with ♥ by MailForge • Powered by Next.js & React
          </span>
        </section>
      </div>
    </footer>
  );
};