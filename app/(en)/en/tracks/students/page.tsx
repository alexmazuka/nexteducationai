import type { Metadata } from "next";
import { TrackPage } from "@/components/pages/TrackPage";
import { tracksList } from "@/lib/content";

const t = tracksList("en").find((x) => x.slug === "students")!;

export const metadata: Metadata = {
  title: t.title,
  description: t.oneLiner,
  alternates: {
    canonical: "/en/tracks/students/",
    languages: { uk: "/tracks/students/", en: "/en/tracks/students/" },
  },
};

export default function Page() {
  return <TrackPage locale="en" slug="students" />;
}
