import type { Metadata } from "next";
import { TrackPage } from "@/components/pages/TrackPage";
import { tracksList } from "@/lib/content";

const t = tracksList("uk").find((x) => x.slug === "students")!;

export const metadata: Metadata = {
  title: t.title,
  description: t.oneLiner,
  alternates: {
    canonical: "/tracks/students/",
    languages: { uk: "/tracks/students/", en: "/en/tracks/students/" },
  },
};

export default function Page() {
  return <TrackPage locale="uk" slug="students" />;
}
