import {
  ShieldCheck,
  Plus,
  LinkSimple,
  ChartBar,
  Gear,
  House,
  TrendUp,
} from "@phosphor-icons/react/dist/ssr";

const links = [
  { slug: "7l.ink/launch", dest: "producthunt.com", clicks: "42 310" },
  { slug: "7l.ink/promo", dest: "shop.example.com", clicks: "31 540" },
  { slug: "7l.ink/docs", dest: "docs.example.io", clicks: "18 902" },
  { slug: "7l.ink/vip", dest: "t.me/channel", clicks: "9 786" },
];

const navItems = [
  { icon: House, label: "Обзор", active: false },
  { icon: LinkSimple, label: "Ссылки", active: true },
  { icon: ChartBar, label: "Аналитика", active: false },
  { icon: ShieldCheck, label: "Защита", active: false },
  { icon: Gear, label: "Настройки", active: false },
];

function Sparkline() {
  return (
    <svg viewBox="0 0 120 36" className="h-9 w-full" preserveAspectRatio="none">
      <polyline
        points="0,30 18,26 36,28 54,18 72,20 90,10 108,12 120,5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DashboardMockup() {
  return (
    <div className="product-frame shadow-product overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-3">
        <span className="size-3 rounded-full bg-border" />
        <span className="size-3 rounded-full bg-border" />
        <span className="size-3 rounded-full bg-border" />
        <div className="mx-auto flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1">
          <span className="size-1.5 rounded-full bg-primary" />
          <span className="font-mono text-[11px] text-muted-foreground">
            app.7link.click
          </span>
        </div>
      </div>

      <div className="flex">
        <aside className="hidden w-44 shrink-0 border-r border-border p-3 sm:block">
          <div className="flex items-center gap-2 px-2 py-1.5">
            <span className="flex size-6 items-center justify-center rounded-md bg-primary/12 text-primary">
              <ShieldCheck size={15} weight="fill" />
            </span>
            <span className="text-sm font-semibold tracking-tight">7Link</span>
          </div>
          <nav className="mt-4 space-y-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] ${
                    item.active
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  <Icon size={16} weight={item.active ? "fill" : "regular"} />
                  {item.label}
                </div>
              );
            })}
          </nav>
        </aside>

        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                Мои ссылки
              </h3>
              <p className="text-xs text-muted-foreground">
                Защита активна на всех ссылках
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
              <Plus size={13} weight="bold" />
              Создать
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2.5">
            <div className="rounded-xl border border-border bg-background p-3">
              <p className="text-[11px] text-muted-foreground">Переходов</p>
              <p className="mt-1 font-mono text-lg font-semibold tracking-tight text-foreground">
                128 540
              </p>
              <div className="mt-1 text-primary">
                <Sparkline />
              </div>
            </div>
            <div className="rounded-xl border border-border bg-background p-3">
              <p className="text-[11px] text-muted-foreground">Боты отклонены</p>
              <p className="mt-1 font-mono text-lg font-semibold tracking-tight text-foreground">
                9 312
              </p>
              <p className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-primary">
                <ShieldCheck size={12} weight="fill" />
                заблокировано
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background p-3">
              <p className="text-[11px] text-muted-foreground">Аптайм</p>
              <p className="mt-1 font-mono text-lg font-semibold tracking-tight text-foreground">
                99.99%
              </p>
              <p className="mt-1 inline-flex items-center gap-1 text-[11px] font-medium text-primary">
                <TrendUp size={12} weight="bold" />
                30 дней
              </p>
            </div>
          </div>

          <div className="mt-3 overflow-hidden rounded-xl border border-border">
            <div className="hidden grid-cols-[1.4fr_1.2fr_0.7fr_0.9fr] gap-2 border-b border-border bg-muted/40 px-3.5 py-2 text-[11px] font-medium tracking-wide text-muted-foreground uppercase sm:grid">
              <span>Ссылка</span>
              <span>Назначение</span>
              <span className="text-right">Клики</span>
              <span className="text-right">Статус</span>
            </div>
            {links.map((link, i) => (
              <div
                key={link.slug}
                className={`grid grid-cols-[1.4fr_0.9fr_0.9fr] items-center gap-2 px-3.5 py-2.5 sm:grid-cols-[1.4fr_1.2fr_0.7fr_0.9fr] ${
                  i !== links.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="truncate font-mono text-[12px] font-medium text-foreground">
                  {link.slug}
                </span>
                <span className="hidden truncate text-[12px] text-muted-foreground sm:block">
                  {link.dest}
                </span>
                <span className="text-right font-mono text-[12px] text-muted-foreground">
                  {link.clicks}
                </span>
                <span className="flex justify-end">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                    <ShieldCheck size={11} weight="fill" />
                    Защищено
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
