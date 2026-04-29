import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { copy, site } from "@/lib/content";

const c = copy("uk");

export const metadata: Metadata = {
  metadataBase: new URL("https://nexteducationai.org"),
  title: { default: c.metaTitle, template: `%s · ${site.brand}` },
  description: c.metaDescription,
  alternates: {
    canonical: "/",
    languages: {
      uk: "/",
      en: "/en/",
    },
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://nexteducationai.org/",
    siteName: site.brand,
    title: c.metaTitle,
    description: c.metaDescription,
  },
  robots: { index: true, follow: true },
};

export default function UkRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className="bg-paper text-ink">
        <Header locale="uk" />
        <main>{children}</main>
        <Footer locale="uk" />
      </body>
    </html>
  );
}
