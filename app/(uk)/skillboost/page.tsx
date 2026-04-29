import type { Metadata } from "next";
import { SkillboostPage } from "@/components/pages/SkillboostPage";
import { copy } from "@/lib/content";

const c = copy("uk");

export const metadata: Metadata = {
  title: c.skillboostTitle,
  alternates: { canonical: "/skillboost/", languages: { uk: "/skillboost/", en: "/en/skillboost/" } },
};

export default function Page() {
  return <SkillboostPage locale="uk" />;
}
