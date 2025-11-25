import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-emerald-600/30 bg-white/80 p-8 shadow-xl shadow-emerald-600/10 md:p-12">
      <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-[radial-gradient(circle_at_top,rgba(47,179,95,0.18),transparent_60%)] md:block" />
      <div className="relative grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
        <div className="space-y-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            Dinim3ak · Mobilité inspirée d&apos;inDrive, pensée pour l&apos;Algérie
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            La plateforme VTC qui vous laisse négocier et voyager en toute
            confiance
          </h1>
          <p className="max-w-2xl text-sm text-slate-600 md:text-lg">
            Dinim3ak connecte passagers et chauffeurs de manière équitable.
            Choisissez votre prix, partagez votre position en direct et profitez
            d&apos;un réseau vérifié de professionnels locaux dans toutes les
            grandes villes algériennes.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#simuler"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:bg-emerald-700"
            >
              Commander ma course
            </Link>
            <Link
              href="#chauffeurs"
              className="inline-flex items-center justify-center rounded-full border border-slate-900/10 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-600 hover:text-emerald-700"
            >
              Devenir chauffeur partenaire
            </Link>
          </div>
          <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-3">
            <div className="rounded-2xl border border-sand-100 bg-white/70 p-4">
              <p className="text-2xl font-semibold text-slate-900">54%</p>
              <p>
                Des utilisateurs préfèrent Dinim3ak pour la liberté de fixer un
                prix.
              </p>
            </div>
            <div className="rounded-2xl border border-sand-100 bg-white/70 p-4">
              <p className="text-2xl font-semibold text-slate-900">5/5</p>
              <p>Satisfaction moyenne des courses vérifiées par nos équipes.</p>
            </div>
            <div className="rounded-2xl border border-sand-100 bg-white/70 p-4">
              <p className="text-2xl font-semibold text-slate-900">35k</p>
              <p>Courses quotidiennes aux heures de pointe sur 6 wilayas.</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-3xl border border-sand-100 bg-white/80 p-6 shadow-lg shadow-black/10">
          <div className="absolute -top-12 right-6 hidden rounded-full border border-emerald-500/40 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 md:inline-flex">
            Suivi en temps réel
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-slate-900">
                Course vers Aéroport Houari Boumediene
              </p>
              <span className="rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-semibold text-emerald-700">
                Confirmée
              </span>
            </div>
            <div className="rounded-2xl border border-sand-100 bg-sand-50 p-4 text-sm">
              <div className="flex items-center justify-between">
                <span>Demande envoyée</span>
                <span className="font-semibold text-slate-900">08:12</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span>Prix négocié</span>
                <span className="text-lg font-semibold text-emerald-600">
                  1 250 DZD
                </span>
              </div>
            </div>
            <div className="space-y-2 rounded-2xl border border-sand-100 bg-white p-4 text-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Chauffeur assigné
              </p>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-emerald-100" />
                <div>
                  <p className="font-semibold text-slate-900">Safia Rahmani</p>
                  <p className="text-xs text-slate-500">
                    Dacia Logan · 182 | 116 | 16
                  </p>
                </div>
              </div>
              <div className="grid gap-2 rounded-xl bg-emerald-50/70 p-3 text-xs text-emerald-700">
                <div className="flex items-center justify-between">
                  <span>Arrivée estimée</span>
                  <span>6 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Score sécurité</span>
                  <span>4.9 / 5</span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-sand-100 bg-white/70 p-4 text-xs text-slate-500">
              Un agent Dinim3ak suit discrètement le trajet pour assurer votre
              sécurité, avec partage de position pour vos proches.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
