import type { Locale } from "@/lib/content";
import { copy, site } from "@/lib/content";
import { Prose, Section } from "@/components/Section";

export function AboutPage({ locale }: { locale: Locale }) {
  const c = copy(locale);
  return (
    <Section className="pt-16">
      <h1 className="font-serif text-3xl md:text-4xl tracking-tight">
        {c.aboutTitle}
      </h1>
      <Prose className="mt-6">{c.aboutBody}</Prose>

      <div className="mt-12 border-t border-line pt-8 text-ink/85 space-y-2">
        <p>
          <span className="text-muted">{c.aboutHostedBy}: </span>
          {locale === "uk"
            ? `ГО «${site.ngoName}»`
            : `NGO «Democratic Information Initiative»`}{" "}
          ({locale === "uk" ? "ЄДРПОУ" : "registry code"} {site.ngoCode})
        </p>
        <p>
          <span className="text-muted">Email: </span>
          <a
            href={`mailto:${site.email}`}
            className="text-accent hover:text-ink"
          >
            {site.email}
          </a>
        </p>
        <p>
          <span className="text-muted">Telegram: </span>
          <a
            href={site.telegramUrl}
            rel="noopener noreferrer"
            className="text-accent hover:text-ink"
          >
            {site.telegram}
          </a>
        </p>
        <p>
          <span className="text-muted">Substack: </span>
          <a
            href={site.substackUrl}
            rel="noopener noreferrer"
            className="text-accent hover:text-ink"
          >
            {site.substack}
          </a>
        </p>
      </div>
    </Section>
  );
}
