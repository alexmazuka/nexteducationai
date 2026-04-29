import type { Metadata } from "next";
import { TrackPage } from "@/components/pages/TrackPage";
import { tracksList } from "@/lib/content";

const t = tracksList("uk").find((x) => x.slug === "professionals")!;

export const metadata: Metadata = {
  title: t.title,
  description: t.oneLiner,
  alternates: {
    canonical: "/tracks/professionals/",
    languages: { uk: "/tracks/professionals/", en: "/en/tracks/professionals/" },
  },
};

export default function Page() {
  return <TrackPage locale="uk" slug="professionals" />;
}
