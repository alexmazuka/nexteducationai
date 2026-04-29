import type { Metadata } from "next";
import { PrinciplesPage } from "@/components/pages/PrinciplesPage";
import { copy } from "@/lib/content";

const c = copy("en");

export const metadata: Metadata = {
  title: c.principlesIntroTitle,
  alternates: { canonical: "/en/principles/", languages: { uk: "/principles/", en: "/en/principles/" } },
};

export default function Page() {
  return <PrinciplesPage locale="en" />;
}
