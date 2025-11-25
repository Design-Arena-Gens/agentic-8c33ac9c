const features = [
  {
    title: "Négociation intelligente",
    description:
      "Proposez votre prix, négociez en direct avec les chauffeurs et obtenez une course au juste coût sans surprise.",
    icon: "🤝",
  },
  {
    title: "Sécurité renforcée",
    description:
      "Profil chauffeur vérifié, numéro masqué, suivi temps réel et bouton assistance 24/7 pour circuler sereinement.",
    icon: "🛡️",
  },
  {
    title: "Optimisé pour l'Algérie",
    description:
      "Paiement en espèces ou BaridiMob, interface en arabe dialectal et français, support local 7j/7.",
    icon: "🇩🇿",
  },
  {
    title: "Courses planifiées",
    description:
      "Réservez en avance pour vos trajets réguliers, Dinim3ak garantit une confirmation la veille.",
    icon: "🕒",
  },
  {
    title: "Offres entreprises",
    description:
      "Gestion flotte, reporting automatisé et facturation groupée pour les équipes mobiles et le tourisme.",
    icon: "🏢",
  },
  {
    title: "Revenus chauffeurs boostés",
    description:
      "Commission flexible dès 8%, primes heures pleines, programme fidélité carburant & maintenance.",
    icon: "🚗",
  },
];

export function FeatureGrid() {
  return (
    <section id="offre" className="space-y-6">
      <div className="flex flex-col gap-3 text-center md:gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
          Dinim3ak en un coup d&apos;œil
        </p>
        <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
          Une expérience pensée pour les passagers et chauffeurs algériens
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-slate-600 md:text-base">
          Nous mélangeons le meilleur du digital et de l&apos;humain pour fluidifier
          les déplacements urbains en Algérie, avec une plateforme fiable,
          transparente et inclusive.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="flex flex-col gap-3 rounded-2xl border border-sand-100 bg-white/80 p-6 shadow-lg shadow-black/5 transition hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-emerald-500/20"
          >
            <div className="text-3xl">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-slate-900">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-600">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
