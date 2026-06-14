import type { Metadata } from "next";
import { PageShell, LegalSection } from "@/components/site/page-shell";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms — 7Link",
  description:
    "Terms of use for 7Link — link and site protection powered by Cloudflare Turnstile.",
};

export default function TermsPage() {
  return (
    <PageShell
      eyebrow="Terms"
      title="Terms of Use"
      intro="By using 7Link, you agree to the terms described below."
    >
      <LegalSection heading="Service description">
        <p>
          7Link provides protected links that verify incoming traffic through
          Cloudflare Turnstile and redirect real visitors to the destination you
          set. The service includes unlimited link creation and protection from
          bots and DDoS attacks.
        </p>
      </LegalSection>
      <LegalSection heading="Acceptable use">
        <p>
          You may not use 7Link to redirect to malicious, fraudulent, or
          unlawful resources, or to distribute malware. We reserve the right to
          disable links that violate these terms.
        </p>
      </LegalSection>
      <LegalSection heading="Availability">
        <p>
          We aim to keep the service stable, but we do not guarantee
          uninterrupted availability and may carry out maintenance without prior
          notice.
        </p>
      </LegalSection>
      <LegalSection heading="Liability">
        <p>
          The service is provided on an &ldquo;as is&rdquo; basis. 7Link is not
          responsible for the content of the sites your links point to, or for
          any damages arising from their use.
        </p>
      </LegalSection>
      <LegalSection heading="Changes to the terms">
        <p>
          These terms may be updated. The current version is always available on
          this page. For any questions, write to{" "}
          <a
            href={contact.emailHref}
            className="text-primary underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>
          .
        </p>
      </LegalSection>
    </PageShell>
  );
}
