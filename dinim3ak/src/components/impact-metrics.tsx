const stats = [
  {
    label: "Courses finalisées",
    value: "1.2M",
    detail: "Depuis le lancement pilote à Alger en 2022",
  },
  {
    label: "Temps d'attente moyen",
    value: "4 min",
    detail: "Grâce à l'algorithme de rapprochement intelligent",
  },
  {
    label: "Satisfaction chauffeurs",
    value: "92%",
    detail: "Basé sur l'indicateur de revenus nets hebdomadaires",
  },
  {
    label: "Support multilingue",
    value: "24/7",
    detail: "Français, darija, kabyle et anglais",
  },
];

export function ImpactMetrics() {
  return (
    <section className="grid gap-4 rounded-3xl border border-emerald-600/30 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 p-6 text-white shadow-xl shadow-emerald-600/30 md:grid-cols-4 md:p-10">
      {stats.map((stat) => (
        <article
          key={stat.label}
          className="flex flex-col gap-1 rounded-2xl bg-white/10 p-4 backdrop-blur-sm transition hover:bg-white/15"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-white/80">
            {stat.label}
          </span>
          <span className="text-3xl font-semibold">{stat.value}</span>
          <span className="text-sm text-white/80">{stat.detail}</span>
        </article>
      ))}
    </section>
  );
}
