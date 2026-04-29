import type { Locale } from "@/lib/content";
import { copy, site } from "@/lib/content";

export function Footer({ locale }: { locale: Locale }) {
  const c = copy(locale);
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line mt-24">
      <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-muted space-y-3">
        <p>
          © {year} {site.brand} · {c.footerTagline}
        </p>
        <p className="space-x-3">
          <a href={`mailto:${site.email}`} className="hover:text-ink">{site.email}</a>
          <span aria-hidden>·</span>
          <a href={site.telegramUrl} className="hover:text-ink" rel="noopener noreferrer">Telegram</a>
          <span aria-hidden>·</span>
          <a href={site.substackUrl} className="hover:text-ink" rel="noopener noreferrer">Substack</a>
        </p>
        <p className="text-xs">{c.footerNoTrackers}</p>
      </div>
    </footer>
  );
}
