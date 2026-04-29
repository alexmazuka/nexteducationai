import Link from "next/link";
import type { Locale } from "@/lib/content";
import { altLocale, copy, homeHref, nav, site } from "@/lib/content";

export function Header({ locale }: { locale: Locale }) {
  const c = copy(locale);
  const links = nav(locale);
  const other = altLocale(locale);
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between gap-6">
        <Link
          href={homeHref(locale)}
          className="font-serif text-xl tracking-tight no-underline"
          aria-label={`${site.brand} — ${c.brandSubline}`}
        >
          <span className="font-semibold">{site.brand}</span>
        </Link>
        <nav aria-label={c.navAria} className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-ink/80 hover:text-ink no-underline">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href={homeHref(other)}
          className="text-sm text-muted hover:text-ink no-underline border border-line rounded-full px-3 py-1"
          aria-label={c.langSwitchAria}
        >
          {c.langSwitchTo}
        </Link>
      </div>
    </header>
  );
}
