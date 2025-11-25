import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ImpactMetrics } from "@/components/impact-metrics";
import { RideEstimator } from "@/components/ride-estimator";
import { FeatureGrid } from "@/components/feature-grid";
import { CityCoverage } from "@/components/city-coverage";
import { DriverBenefits } from "@/components/driver-benefits";
import { Testimonials } from "@/components/testimonials";
import { AppDownload } from "@/components/app-download";
import { Footer } from "@/components/footer";

const partners = [
  "Air Algérie",
  "Naftal",
  "Jumia Food",
  "Sonatrach",
  "Université d'Alger",
  "Le Méridien",
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-20 pt-10 md:px-8 md:pt-14">
        <Hero />
        <ImpactMetrics />
        <RideEstimator />
        <FeatureGrid />
        <section className="rounded-3xl border border-sand-100 bg-white/80 p-6 text-center shadow-inner shadow-black/5 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
            Ils accompagnent Dinim3ak
          </p>
          <div className="mt-6 grid gap-4 text-sm font-semibold text-slate-500 md:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner}
                className="rounded-2xl border border-sand-100 bg-white/80 px-4 py-3 uppercase tracking-[0.2em]"
              >
                {partner}
              </div>
            ))}
          </div>
        </section>
        <CityCoverage />
        <DriverBenefits />
        <Testimonials />
        <AppDownload />
      </main>
      <Footer />
    </>
  );
}
