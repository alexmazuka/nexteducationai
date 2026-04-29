import type { Metadata } from "next";
import { AboutPage } from "@/components/pages/AboutPage";
import { copy } from "@/lib/content";

const c = copy("uk");

export const metadata: Metadata = {
  title: c.aboutTitle,
  alternates: { canonical: "/about/", languages: { uk: "/about/", en: "/en/about/" } },
};

export default function Page() {
  return <AboutPage locale="uk" />;
}
