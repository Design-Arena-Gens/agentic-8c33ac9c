'use client';

import { useMemo, useState } from "react";
import { cities } from "@/data/cities";

const kmMarks = [3, 5, 10, 15, 20, 30, 40, 50];
const durationMarks = [5, 10, 15, 20, 30, 45, 60, 90];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("fr-DZ", {
    style: "currency",
    currency: "DZD",
    minimumFractionDigits: 0,
  }).format(value);

export function RideEstimator() {
  const [cityIndex, setCityIndex] = useState(0);
  const [distanceKm, setDistanceKm] = useState(8);
  const [durationMin, setDurationMin] = useState(18);

  const city = cities[cityIndex];

  const { estimate, lowBid, highBid } = useMemo(() => {
    const raw =
      city.baseFareDzd +
      distanceKm * city.perKmDzd +
      durationMin * city.perMinuteDzd;
    const optimized = Math.max(200, Math.round(raw / 10) * 10);
    const negotiationWindow = Math.max(50, Math.round(optimized * 0.08));

    return {
      estimate: optimized,
      lowBid: optimized - negotiationWindow,
      highBid: optimized + negotiationWindow,
    };
  }, [city, distanceKm, durationMin]);

  return (
    <section
      id="simuler"
      className="rounded-3xl border border-sand-100 bg-white/80 p-6 shadow-lg shadow-emerald-600/5 backdrop-blur-sm md:p-10"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Calculateur dynamique
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-slate-900 md:text-3xl">
            Simulez une course Dinim3ak
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-base">
            Ajustez la distance et le temps pour visualiser instantanément une
            fourchette de prix transparente, adaptée aux habitudes de
            négociation locales.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
          Tarification maîtrisée pour {city.name}
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] md:gap-10">
        <div className="flex flex-col gap-6">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700">
              Ville sélectionnée
            </span>
            <select
              className="w-full rounded-xl border border-sand-100 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm shadow-black/5 transition hover:border-emerald-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              value={cityIndex}
              onChange={(event) => setCityIndex(Number(event.target.value))}
            >
              {cities.map((item, index) => (
                <option key={item.name} value={index}>
                  {item.name} · {item.region}
                </option>
              ))}
            </select>
          </label>

          <div className="grid gap-5 rounded-2xl border border-sand-100 bg-white/60 p-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-slate-700">
                  Distance estimée
                </span>
                <p className="text-2xl font-semibold text-slate-900">
                  {distanceKm} km
                </p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                Tarif {formatCurrency(city.perKmDzd)} / km
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={50}
              step={1}
              value={distanceKm}
              onChange={(event) => setDistanceKm(Number(event.target.value))}
              className="accent-emerald-600"
            />
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
              {kmMarks.map((mark) => (
                <button
                  key={mark}
                  type="button"
                  onClick={() => setDistanceKm(mark)}
                  className={`rounded-full border px-3 py-1 transition ${
                    distanceKm === mark
                      ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                      : "border-sand-100 text-slate-500 hover:border-emerald-400 hover:text-emerald-600"
                  }`}
                >
                  {mark} km
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-5 rounded-2xl border border-sand-100 bg-white/60 p-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-slate-700">
                  Durée estimée
                </span>
                <p className="text-2xl font-semibold text-slate-900">
                  {durationMin} min
                </p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                Tarif {formatCurrency(city.perMinuteDzd)} / min
              </span>
            </div>
            <input
              type="range"
              min={5}
              max={120}
              step={1}
              value={durationMin}
              onChange={(event) => setDurationMin(Number(event.target.value))}
              className="accent-emerald-600"
            />
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
              {durationMarks.map((mark) => (
                <button
                  key={mark}
                  type="button"
                  onClick={() => setDurationMin(mark)}
                  className={`rounded-full border px-3 py-1 transition ${
                    durationMin === mark
                      ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                      : "border-sand-100 text-slate-500 hover:border-emerald-400 hover:text-emerald-600"
                  }`}
                >
                  {mark} min
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-5 rounded-2xl border border-emerald-600/30 bg-gradient-to-br from-white via-white to-emerald-50/80 p-6 shadow-lg shadow-emerald-600/10">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">
                Proposition recommandée
              </p>
              <p className="text-4xl font-semibold text-slate-900">
                {formatCurrency(estimate)}
              </p>
            </div>
            <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow shadow-emerald-600/30">
              {city.name}
            </span>
          </div>
          <div className="rounded-xl border border-emerald-600/20 bg-white/70 p-4 text-sm text-slate-600 shadow-sm shadow-emerald-600/5">
            <p>
              La fourchette Dinim3ak reflète les usages de négociation locaux.
              Proposez un montant entre{" "}
              <span className="font-semibold text-emerald-600">
                {formatCurrency(lowBid)}
              </span>{" "}
              et{" "}
              <span className="font-semibold text-emerald-600">
                {formatCurrency(highBid)}
              </span>{" "}
              pour équilibrer budget et satisfaction chauffeur.
            </p>
          </div>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-lg bg-white/70 p-3 shadow-inner shadow-black/5">
              <span>Prise en charge</span>
              <span className="font-semibold">
                {formatCurrency(city.baseFareDzd)}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-white/70 p-3 shadow-inner shadow-black/5">
              <span>Distance ({distanceKm} km)</span>
              <span className="font-semibold">
                {formatCurrency(distanceKm * city.perKmDzd)}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-white/70 p-3 shadow-inner shadow-black/5">
              <span>Durée ({durationMin} min)</span>
              <span className="font-semibold">
                {formatCurrency(durationMin * city.perMinuteDzd)}
              </span>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 py-3 text-base font-semibold text-white shadow-xl shadow-emerald-600/30 transition hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
          >
            Lancer ma demande maintenant
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                d="M5 12h14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m13 6 6 6-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p className="text-xs text-slate-500">
            Les chauffeurs reçoivent des demandes vérifiées avec l&apos;estimation
            Dinim3ak, pour décider rapidement d&apos;accepter ou négocier.
          </p>
        </div>
      </div>
    </section>
  );
}
