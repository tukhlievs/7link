import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { TrustBand } from "@/components/site/trust-band";
import { QuoteBlock } from "@/components/site/quote";
import { HowItWorks } from "@/components/site/how-it-works";
import { Features } from "@/components/site/features";
import { CallToAction } from "@/components/site/cta";
import { SiteFooter } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <TrustBand />
        <QuoteBlock />
        <HowItWorks />
        <Features />
        <CallToAction />
      </main>
      <SiteFooter />
    </>
  );
}
