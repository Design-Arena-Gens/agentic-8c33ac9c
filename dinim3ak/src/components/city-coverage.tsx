import { cities } from "@/data/cities";

export function CityCoverage() {
  return (
    <section
      id="villes"
      className="space-y-6 rounded-3xl border border-sand-100 bg-white/70 p-6 shadow-inner shadow-black/5 md:p-10"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Expansion nationale
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
            Dinim3ak déploie un réseau équilibré du nord au sud
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-base">
            Notre équipe terrain accompagne les chauffeurs dans chaque wilaya.
            Les villes pilotes sont déjà actives et de nouvelles zones
            rejoignent la plateforme chaque trimestre.
          </p>
        </div>
        <div className="rounded-2xl border border-emerald-600/20 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700">
          6 villes en 2024 · 12 prévu fin 2025
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cities.map((city) => (
          <article
            key={city.name}
            className="flex flex-col gap-3 rounded-2xl border border-sand-100 bg-white/80 p-5 shadow-sm shadow-emerald-600/10"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {city.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  {city.region}
                </p>
              </div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                {city.launchQuarter}
              </span>
            </div>
            <dl className="grid grid-cols-2 gap-4 text-sm text-slate-600">
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">
                  Population urbaine
                </dt>
                <dd className="text-base font-semibold text-slate-900">
                  {city.population}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">
                  Prise en charge
                </dt>
                <dd className="text-base font-semibold text-slate-900">
                  {city.baseFareDzd} DZD
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">
                  Prix / km
                </dt>
                <dd className="text-base font-semibold text-slate-900">
                  {city.perKmDzd} DZD
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">
                  Prix / minute
                </dt>
                <dd className="text-base font-semibold text-slate-900">
                  {city.perMinuteDzd} DZD
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
