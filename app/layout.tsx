import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "7Link — link protection powered by Cloudflare Turnstile",
  description:
    "7Link verifies every click through Cloudflare Turnstile in a fraction of a second and instantly redirects real visitors to your site — with no ads and no extra clicks.",
  metadataBase: new URL("https://7link.click"),
  openGraph: {
    title: "7Link — link protection powered by Cloudflare Turnstile",
    description:
      "Fast traffic verification and instant redirect. No ads, no extra clicks, unlimited protection from bots and DDoS.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
