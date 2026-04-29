import type { Metadata } from "next";
import { TrackPage } from "@/components/pages/TrackPage";
import { tracksList } from "@/lib/content";

const t = tracksList("en").find((x) => x.slug === "family")!;

export const metadata: Metadata = {
  title: t.title,
  description: t.oneLiner,
  alternates: {
    canonical: "/en/tracks/family/",
    languages: { uk: "/tracks/family/", en: "/en/tracks/family/" },
  },
};

export default function Page() {
  return <TrackPage locale="en" slug="family" />;
}
