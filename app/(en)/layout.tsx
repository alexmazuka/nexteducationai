import type { Metadata } from "next";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { copy, site } from "@/lib/content";

const c = copy("en");

export const metadata: Metadata = {
  metadataBase: new URL("https://nexteducationai.org"),
  title: { default: c.metaTitle, template: `%s · ${site.brand}` },
  description: c.metaDescription,
  alternates: {
    canonical: "/en/",
    languages: {
      uk: "/",
      en: "/en/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexteducationai.org/en/",
    siteName: site.brand,
    title: c.metaTitle,
    description: c.metaDescription,
  },
  robots: { index: true, follow: true },
};

export default function EnRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink">
        <Header locale="en" />
        <main>{children}</main>
        <Footer locale="en" />
      </body>
    </html>
  );
}
