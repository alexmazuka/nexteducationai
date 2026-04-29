import type { Metadata } from "next";
import { TrackPage } from "@/components/pages/TrackPage";
import { tracksList } from "@/lib/content";

const t = tracksList("uk").find((x) => x.slug === "educators")!;

export const metadata: Metadata = {
  title: t.title,
  description: t.oneLiner,
  alternates: {
    canonical: "/tracks/educators/",
    languages: { uk: "/tracks/educators/", en: "/en/tracks/educators/" },
  },
};

export default function Page() {
  return <TrackPage locale="uk" slug="educators" />;
}
