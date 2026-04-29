import type { Locale } from "@/lib/content";
import { copy, site } from "@/lib/content";
import { Prose, Section } from "@/components/Section";

export function SkillboostPage({ locale }: { locale: Locale }) {
  const c = copy(locale);
  return (
    <Section className="pt-16">
      <h1 className="font-serif text-3xl md:text-4xl tracking-tight">
        {c.skillboostTitle}
      </h1>
      <Prose className="mt-6">{c.skillboostBody}</Prose>
      <a
        href={site.telegramUrl}
        rel="noopener noreferrer"
        className="mt-8 inline-block bg-ink text-paper px-5 py-3 rounded-md no-underline hover:bg-accent"
      >
        {c.skillboostCta} · {site.telegram}
      </a>
    </Section>
  );
}
