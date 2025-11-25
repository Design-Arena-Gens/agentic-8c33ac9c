const testimonials = [
  {
    quote:
      "Dinim3ak a changé notre façon de bouger à Alger. Les chauffeurs respectent les tarifs négociés et l'application est claire même pour mes parents.",
    name: "Nesrine",
    role: "Responsable marketing · Hydra",
  },
  {
    quote:
      "En tant que chauffeur, je choisis mes courses en fonction des horaires et je vois directement le revenu final. Le support est disponible même tard le soir.",
    name: "Soufiane",
    role: "Chauffeur partenaire · Oran",
  },
  {
    quote:
      "Nous utilisons Dinim3ak pour nos clients VIP à l'aéroport d'Alger. Service fiable, chauffeurs formés et facturation adaptée aux entreprises.",
    name: "Agence Atlas Travel",
    role: "Partenaire business · Alger",
  },
];

export function Testimonials() {
  return (
    <section id="temoignages" className="space-y-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
          Ils nous font confiance
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">
          Témoignages de la communauté Dinim3ak
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-sand-100 bg-white/80 p-6 shadow-lg shadow-emerald-500/10"
          >
            <blockquote className="text-sm text-slate-600 md:text-base">
              « {testimonial.quote} »
            </blockquote>
            <figcaption className="space-y-1 text-sm">
              <p className="font-semibold text-slate-900">{testimonial.name}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {testimonial.role}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
