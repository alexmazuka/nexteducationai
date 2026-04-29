import Link from "next/link";
import type { Locale } from "@/lib/content";
import {
  copy,
  principles,
  principlesHref,
  trackHref,
  tracksList,
} from "@/lib/content";
import { Section, Prose } from "@/components/Section";

export function HomePage({ locale }: { locale: Locale }) {
  const c = copy(locale);
  const tracks = tracksList(locale);
  const ps = principles(locale);
  return (
    <>
      <Section className="pt-20 pb-12">
        <h1 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
          {c.heroHeadline}
        </h1>
        <Prose className="mt-6">{c.heroSub}</Prose>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={trackHref(locale, "professionals")}
            className="inline-block bg-ink text-paper px-5 py-3 rounded-md no-underline hover:bg-accent"
          >
            {c.heroCtaPrimary}
          </Link>
          <Link
            href={principlesHref(locale)}
            className="inline-block border border-line px-5 py-3 rounded-md no-underline hover:bg-line/40"
          >
            {c.heroCtaSecondary}
          </Link>
        </div>
      </Section>

      <Section className="py-12 border-t border-line">
        <h2 className="font-serif text-2xl md:text-3xl tracking-tight">
          {c.homeTracksTitle}
        </h2>
        <Prose className="mt-3 text-base text-muted">{c.homeTracksLead}</Prose>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {tracks.map((t) => (
            <Link
              key={t.slug}
              href={trackHref(locale, t.slug)}
              className="block border border-line rounded-lg p-6 hover:border-ink no-underline"
            >
              <div className="font-serif text-xl text-ink">{t.title}</div>
              <p className="mt-2 text-ink/80">{t.oneLiner}</p>
              <span className="mt-4 inline-block text-sm text-accent">
                {c.exploreTrackCta} →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="py-12 border-t border-line">
        <h2 className="font-serif text-2xl md:text-3xl tracking-tight">
          {c.homePrinciplesTeaserTitle}
        </h2>
        <Prose className="mt-4">{c.homePrinciplesTeaserBody}</Prose>
        <ul className="mt-8 grid gap-3 text-ink/90">
          {ps.map((p) => (
            <li key={p.title} className="flex gap-3">
              <span className="text-accent" aria-hidden>
                ◆
              </span>
              <span className="font-medium">{p.title}</span>
            </li>
          ))}
        </ul>
        <Link
          href={principlesHref(locale)}
          className="mt-8 inline-block text-accent hover:text-ink"
        >
          {c.homePrinciplesTeaserCta} →
        </Link>
      </Section>
    </>
  );
}
