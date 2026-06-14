import type { Metadata } from "next";
import { PageShell, LegalSection } from "@/components/site/page-shell";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy — 7Link",
  description:
    "7Link Privacy Policy: what data is processed when protecting links and verifying traffic.",
};

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      intro="We process the minimum data required to verify traffic and protect your links from bots and DDoS attacks."
    >
      <LegalSection heading="What data we process">
        <p>
          When a visitor follows a protected 7Link URL, we process technical
          request data: IP address, device and browser type, and the Cloudflare
          Turnstile verification token. This data is needed to tell a real
          visitor apart from automated traffic.
        </p>
      </LegalSection>
      <LegalSection heading="How we use data">
        <p>
          Data is used solely to verify traffic, protect against bots and DDoS
          attacks, and produce click statistics for your links. We do not sell
          or share your data with third parties for advertising purposes.
        </p>
      </LegalSection>
      <LegalSection heading="Cloudflare Turnstile">
        <p>
          Visitor verification is performed with Cloudflare Turnstile. The
          processing of verification tokens is carried out by Cloudflare in
          accordance with its own privacy policy.
        </p>
      </LegalSection>
      <LegalSection heading="Data retention">
        <p>
          Technical logs are kept for a limited time, sufficient to ensure
          security and analyze attacks, after which they are deleted or
          anonymized.
        </p>
      </LegalSection>
      <LegalSection heading="Contact">
        <p>
          For any questions about data processing, write to{" "}
          <a
            href={contact.emailHref}
            className="text-primary underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>{" "}
          or on Telegram{" "}
          <a
            href={contact.telegramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline-offset-4 hover:underline"
          >
            {contact.telegram}
          </a>
          .
        </p>
      </LegalSection>
    </PageShell>
  );
}
