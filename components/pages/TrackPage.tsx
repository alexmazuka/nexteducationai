import Link from "next/link";
import type { Locale } from "@/lib/content";
import {
  copy,
  site,
  skillboostHref,
  tracksList,
  trackHref,
} from "@/lib/content";
import { Section, Prose } from "@/components/Section";

export function TrackPage({
  locale,
  slug,
}: {
  locale: Locale;
  slug: "professionals" | "students" | "educators" | "family";
}) {
  const c = copy(locale);
  const all = tracksList(locale);
  const track = all.find((t) => t.slug === slug);
  if (!track) return null;
  const others = all.filter((t) => t.slug !== slug);
  return (
    <>
      <Section className="pt-16 pb-10">
        <p className="text-sm uppercase tracking-wider text-muted">
          {locale === "uk" ? "Трек" : "Track"}
        </p>
        <h1 className="mt-2 font-serif text-3xl md:text-4xl tracking-tight">
          {track.title}
        </h1>
        <Prose className="mt-4">{track.oneLiner}</Prose>
      </Section>

      <Section className="py-10 border-t border-line grid gap-10 md:grid-cols-3">
        <div>
          <h2 className="text-sm uppercase tracking-wider text-muted">
            {c.forWhomLabel}
          </h2>
          <p className="mt-2 text-ink/90">{track.forWhom}</p>
        </div>
        <div>
          <h2 className="text-sm uppercase tracking-wider text-muted">
            {c.aboutLabel}
          </h2>
          <p className="mt-2 text-ink/90">{track.about}</p>
        </div>
        <div>
          <h2 className="text-sm uppercase tracking-wider text-muted">
            {c.insideLabel}
          </h2>
          <p className="mt-2 text-ink/90">{track.inside}</p>
        </div>
      </Section>

      <Section className="py-10 border-t border-line">
        <div className="flex flex-wrap gap-3">
          <Link
            href={skillboostHref(locale)}
            className="inline-block bg-ink text-paper px-5 py-3 rounded-md no-underline hover:bg-accent"
          >
            SkillBoost · @nextedubot
          </Link>
          <a
            href={site.substackUrl}
            rel="noopener noreferrer"
            className="inline-block border border-line px-5 py-3 rounded-md no-underline hover:bg-line/40"
          >
            Substack
          </a>
        </div>
      </Section>

      <Section className="py-10 border-t border-line">
        <h2 className="font-serif text-xl tracking-tight">
          {locale === "uk" ? "Інші треки" : "Other tracks"}
        </h2>
        <ul className="mt-4 grid gap-2">
          {others.map((t) => (
            <li key={t.slug}>
              <Link
                href={trackHref(locale, t.slug)}
                className="text-accent hover:text-ink"
              >
                {t.title} — {t.oneLiner}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
