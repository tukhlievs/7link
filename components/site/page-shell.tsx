import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <section className="mesh-light px-4 pt-36 pb-16 sm:px-6 sm:pt-44 sm:pb-20">
          <div className="mx-auto max-w-3xl">
            <span className="font-mono text-xs tracking-widest text-primary uppercase">
              {eyebrow}
            </span>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
              {title}
            </h1>
            {intro && (
              <p className="mt-5 text-base text-pretty text-muted-foreground sm:text-lg">
                {intro}
              </p>
            )}
          </div>
        </section>
        <section className="px-4 pb-28 sm:px-6">
          <div className="mx-auto max-w-3xl">{children}</div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-border py-8 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-semibold tracking-tight text-foreground">
        {heading}
      </h2>
      <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}
