import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-sand-100 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-lg font-semibold text-slate-900">Dinim3ak</p>
          <p className="text-sm text-slate-500">
            La mobilité qui rapproche les villes d&apos;Algérie.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
          <Link href="#">Conditions</Link>
          <Link href="#">Confidentialité</Link>
          <Link href="#">Support</Link>
          <Link href="#">Presse</Link>
        </div>
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Dinim3ak. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
