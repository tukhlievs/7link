import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  TelegramLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import { PageShell } from "@/components/site/page-shell";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact us — 7Link",
  description:
    "Свяжитесь с командой 7Link: адрес, телефон, Telegram и электронная почта.",
};

const items = [
  {
    icon: MapPin,
    label: "Our location",
    value: contact.location,
    href: undefined as string | undefined,
    external: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: contact.phone,
    href: contact.phoneHref,
    external: false,
  },
  {
    icon: TelegramLogo,
    label: "Support Telegram",
    value: contact.telegram,
    href: contact.telegramHref,
    external: true,
  },
  {
    icon: EnvelopeSimple,
    label: "Email",
    value: contact.email,
    href: contact.emailHref,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact us"
      title="Свяжитесь с нами"
      intro="Мы на связи и готовы помочь с подключением и защитой ваших ссылок."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;
          const inner = (
            <>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon size={26} weight="duotone" />
              </span>
              <div className="mt-5">
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  {item.label}
                </p>
                <p className="mt-1.5 text-lg font-medium tracking-tight text-foreground">
                  {item.value}
                </p>
              </div>
            </>
          );

          const cardClass =
            "block rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover";

          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={cardClass}
            >
              {inner}
            </a>
          ) : (
            <div key={item.label} className={cardClass}>
              {inner}
            </div>
          );
        })}
      </div>
    </PageShell>
  );
}
