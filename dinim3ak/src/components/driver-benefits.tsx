const benefits = [
  {
    title: "Inscription express",
    description:
      "Activation sous 48h avec dépôt digitalisé des documents, assistance en agences partenaires si besoin.",
  },
  {
    title: "Revenus transparents",
    description:
      "Suivi temps réel des gains, estimations hebdomadaires et transfert vers votre compte BaridiMob ou CCP.",
  },
  {
    title: "Programme carburant",
    description:
      "Réductions négociées avec Naftal et stations partenaires, cumul de points convertibles en entretien.",
  },
  {
    title: "Formation continue",
    description:
      "Modules sécurité, accueil client, gestion financière, disponibles en présentiel et e-learning.",
  },
];

export function DriverBenefits() {
  return (
    <section
      id="chauffeurs"
      className="grid gap-8 rounded-3xl border border-sand-100 bg-white/80 p-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:p-10"
    >
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
          Devenir chauffeur Dinim3ak
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          Une plateforme qui prend soin des professionnels du transport
        </h2>
        <p className="text-sm text-slate-600 md:text-base">
          Dinim3ak construit une relation durable avec ses chauffeurs partenaires
          en combinant revenus stables, accompagnement administratif et avantages
          exclusifs négociés localement.
        </p>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
          +8 500 chauffeurs actifs en 2024
        </div>
      </div>

      <div className="grid gap-4">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="rounded-2xl border border-sand-100 bg-white/90 p-5 shadow-sm shadow-emerald-600/10 transition hover:-translate-y-1 hover:border-emerald-600/40 hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {benefit.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{benefit.description}</p>
          </article>
        ))}
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/25 transition hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
        >
          Ouvrir mon compte chauffeur
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
      </div>
    </section>
  );
}
