import type { Metadata } from "next";
import { PrinciplesPage } from "@/components/pages/PrinciplesPage";
import { copy } from "@/lib/content";

const c = copy("uk");

export const metadata: Metadata = {
  title: c.principlesIntroTitle,
  alternates: { canonical: "/principles/", languages: { uk: "/principles/", en: "/en/principles/" } },
};

export default function Page() {
  return <PrinciplesPage locale="uk" />;
}
