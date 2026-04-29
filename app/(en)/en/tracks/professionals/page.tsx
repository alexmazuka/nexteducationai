import type { Metadata } from "next";
import { TrackPage } from "@/components/pages/TrackPage";
import { tracksList } from "@/lib/content";

const t = tracksList("en").find((x) => x.slug === "professionals")!;

export const metadata: Metadata = {
  title: t.title,
  description: t.oneLiner,
  alternates: {
    canonical: "/en/tracks/professionals/",
    languages: { uk: "/tracks/professionals/", en: "/en/tracks/professionals/" },
  },
};

export default function Page() {
  return <TrackPage locale="en" slug="professionals" />;
}
