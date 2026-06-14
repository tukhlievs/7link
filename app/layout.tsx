import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "7Link — защита сайтов на базе Cloudflare Turnstile",
  description:
    "7Link проверяет трафик через Cloudflare Turnstile за доли секунды и мгновенно перенаправляет настоящих посетителей на ваш сайт без единого лишнего клика.",
  metadataBase: new URL("https://7link.click"),
  openGraph: {
    title: "7Link — защита сайтов на базе Cloudflare Turnstile",
    description:
      "Быстрая проверка трафика и мгновенный редирект. Без рекламы, без лишних кликов, безлимитная защита от ботов и DDoS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
