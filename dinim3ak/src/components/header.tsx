import Link from "next/link";

const navItems = [
  { label: "Offre", href: "#offre" },
  { label: "Simuler", href: "#simuler" },
  { label: "Villes", href: "#villes" },
  { label: "Chauffeurs", href: "#chauffeurs" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "App", href: "#app" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link
          href="#"
          className="text-lg font-semibold tracking-wide text-slate-900 md:text-xl"
        >
          Dinim3ak
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-emerald-50 hover:text-emerald-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#simuler"
            className="hidden rounded-full border border-emerald-600/40 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:border-emerald-600 hover:text-emerald-600 md:inline-flex"
          >
            Commander une course
          </Link>
          <Link
            href="#chauffeurs"
            className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700"
          >
            Rejoindre comme chauffeur
          </Link>
        </div>
      </div>
    </header>
  );
}
