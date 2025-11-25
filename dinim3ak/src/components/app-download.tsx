export function AppDownload() {
  return (
    <section
      id="app"
      className="overflow-hidden rounded-3xl border border-emerald-600/40 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-700 text-white"
    >
      <div className="grid gap-8 p-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:p-12">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Application mobile Dinim3ak
          </p>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Disponible sur Android & iOS
          </h2>
          <p className="text-sm text-slate-200 md:text-base">
            Interface intuitive en darija et français, mode hors-ligne pour les
            zones à faible réseau, notifications intelligentes et paiement
            sécurisé BaridiMob, carte Edahabia ou espèces.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-left text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:bg-white/20"
            >
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                className="h-6 w-6 fill-current"
              >
                <path d="M16.69 13.08a4.08 4.08 0 0 1 1.92 3.43 7.56 7.56 0 0 1-1.87 3.81c-.7.68-1.47.97-2.18.97-.52 0-.92-.15-1.32-.31-.43-.17-.88-.35-1.59-.35-.75 0-1.22.18-1.68.35-.38.15-.73.29-1.22.29-.77 0-1.56-.35-2.27-1.05A8.16 8.16 0 0 1 4 13.93c0-2.63 1.54-4.01 3.06-4.01.81 0 1.43.27 1.96.5.43.19.79.34 1.13.34.3 0 .66-.14 1.09-.33.61-.27 1.37-.62 2.41-.62.47 0 1.87.04 2.91 1.27-.07.05-1.67.88-1.67 2.99ZM12.98 3c.58-.69 1.56-1.2 2.35-1.2.17 0 .34.02.48.05-.1.32-.25.64-.46.94-.29.43-.67.93-1.19 1.22-.36.21-.77.36-1.22.37-.15-.16-.31-.32-.45-.52-.37-.53-.65-1.21-.51-1.86.6-.05 1.22.32 1.99 1Z" />
              </svg>
              <span>
                Disponible sur
                <br />
                <span className="text-base">App Store</span>
              </span>
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-left text-sm font-semibold text-white shadow-lg shadow-black/30 transition hover:bg-white/20"
            >
              <svg
                aria-hidden
                viewBox="0 0 20 20"
                className="h-6 w-6 fill-current"
              >
                <path d="M3.456.159A1.976 1.976 0 0 0 2.5 1.91v16.18a1.976 1.976 0 0 0 2.956 1.75l13.202-8.09c1.47-.9 1.47-3.02 0-3.92L3.456.159Z" />
              </svg>
              <span>
                Disponible sur
                <br />
                <span className="text-base">Play Store</span>
              </span>
            </button>
          </div>
          <div className="grid gap-3 text-sm text-slate-200 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
                Mode hors-ligne
              </p>
              <p>Continuation de la course même en 3G instable grâce au cache.</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-200">
                Assistance
              </p>
              <p>Chat intégré et ligne d&apos;urgence dédiée aux trajets nuit.</p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-500/40 blur-3xl" />
          <div className="absolute -left-20 top-24 h-44 w-44 rounded-full bg-emerald-300/30 blur-3xl" />
          <div className="relative grid gap-6">
            <div className="flex flex-col gap-2 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/40 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                App passager
              </p>
              <p className="text-lg font-semibold">
                Demande confirmée · Ahmed arrive en 6 min
              </p>
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 text-sm">
                <div className="h-10 w-10 rounded-full bg-white/20" />
                <div>
                  <p className="font-semibold">Renault Symbol</p>
                  <p className="text-xs text-emerald-200">213 | 122 | 16</p>
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 p-3 text-sm">
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                  Tarif négocié
                </p>
                <p className="text-lg font-semibold">780 DZD</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm shadow-2xl shadow-black/40 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">
                App chauffeur
              </p>
              <div className="flex items-center justify-between">
                <p className="font-semibold">
                  Course acceptée · Cheraga → Bab Ezzouar
                </p>
                <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-100">
                  Prime +12%
                </span>
              </div>
              <p className="text-emerald-100">
                Bonus heures de pointe · Versement sous 24h
              </p>
              <div className="flex items-center justify-between rounded-2xl bg-white/10 p-3">
                <span>Gain net estimé</span>
                <span className="text-lg font-semibold">920 DZD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
