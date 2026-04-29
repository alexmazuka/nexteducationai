import type { Locale } from "@/lib/content";
import { copy, principles } from "@/lib/content";
import { Prose, Section } from "@/components/Section";

export function PrinciplesPage({ locale }: { locale: Locale }) {
  const c = copy(locale);
  const ps = principles(locale);
  return (
    <Section className="pt-16">
      <h1 className="font-serif text-3xl md:text-4xl tracking-tight">
        {c.principlesIntroTitle}
      </h1>
      <Prose className="mt-6">{c.principlesIntroBody}</Prose>
      <ol className="mt-12 space-y-10">
        {ps.map((p, i) => (
          <li key={p.title} className="flex gap-6">
            <span className="font-serif text-3xl text-accent leading-none">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="font-serif text-xl text-ink">{p.title}</h2>
              <p className="mt-2 text-ink/85 leading-relaxed">{p.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
