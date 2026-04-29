import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { copy } from "@/lib/content";

const c = copy("en");

export const metadata: Metadata = {
  title: c.aboutTitle,
  alternates: { canonical: "/en/about/", languages: { uk: "/about/", en: "/en/about/" } },
};

export default function Page() {
  return <AboutPage locale="en" />;
}
