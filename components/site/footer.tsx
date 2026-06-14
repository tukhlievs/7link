import Link from "next/link";
import { MapPin, Phone, TelegramLogo, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/components/site/logo";
import { contact, nav } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card px-4 pt-16 pb-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.3fr]">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold tracking-tight text-foreground"
            >
              <Logo className="text-primary" />
              <span className="text-lg">7Link</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Link protection powered by Cloudflare Turnstile. Fast traffic
              verification and instant redirect for real visitors.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-tight text-foreground">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-tight text-foreground">
              Contact
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={18} weight="duotone" className="mt-0.5 shrink-0 text-primary" />
                <span>{contact.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} weight="duotone" className="shrink-0 text-primary" />
                <a href={contact.phoneHref} className="transition-colors hover:text-foreground">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <TelegramLogo size={18} weight="duotone" className="shrink-0 text-primary" />
                <a
                  href={contact.telegramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {contact.telegram}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeSimple size={18} weight="duotone" className="shrink-0 text-primary" />
                <a href={contact.emailHref} className="transition-colors hover:text-foreground">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-7 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 7Link. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
