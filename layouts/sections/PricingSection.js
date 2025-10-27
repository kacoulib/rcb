"use client";

import { scrollToElement } from "@lib/utils/scrollToElement";

const pricingPlans = [
  {
    title: "MULTI BOXE",
    subtitle: "Adulte",
    price: "400",
    period: "an",
    features: [
      "Accès à tous les créneaux",
      "Boxe anglaise",
      "Muay Thai",
      "MMA",
      "Entraînement complet",
    ],
    highlighted: true,
    badges: [
      { label: "Boxe Loisir", color: "bg-red-300 text-white" },
      { label: "Muay Thai", color: "bg-blue-600 text-white" },
      { label: "MMA", color: "bg-purple-700 text-white" },
    ],
  },
  {
    title: "MMA",
    subtitle: "Adulte",
    price: "280",
    period: "an",
    features: [
      "Mixed Martial Arts",
      "2 séances par semaine",
      "Sport de combat complet",
      "Pugilat et lutte",
    ],
    highlighted: false,
    borderColor: "border-purple-700",
    badges: [{ label: "MMA", color: "bg-purple-700 text-white" }],
  },
  {
    title: "MUAY THAI",
    subtitle: "Adulte",
    price: "240",
    period: "an",
    features: [
      "Boxe thaïlandaise",
      "2 séances par semaine",
      "Art martial",
      "Boxes pieds-poings",
    ],
    highlighted: false,
    borderColor: "border-blue-600",
    badges: [{ label: "Muay Thai", color: "bg-blue-600 text-white" }],
  },
  {
    title: "BOXE LOISIR",
    subtitle: "Adulte",
    price: "200",
    period: "an",
    features: [
      "Boxe anglaise loisir",
      "3 séances par semaine",
      "Sans opposition",
      "Remise en forme",
    ],
    highlighted: false,
    borderColor: "border-red-300",
    badges: [{ label: "Boxe Loisir", color: "bg-red-300 text-white" }],
  },
  {
    title: "BEA 14-17 ANS",
    subtitle: "Boxe éducative assaut pour Ados",
    price: "185",
    period: "an",
    features: [
      "Boxe éducative",
      "2 séances par semaine",
      "Encadrement adapté",
      "Progression pédagogique",
    ],
    highlighted: false,
    borderColor: "border-cyan-400",
    badges: [{ label: "BEA 14-17", color: "bg-cyan-400 text-white" }],
  },
  {
    title: "BEA 9-14 ANS",
    subtitle: "Boxe éducative assaut pour Kids",
    price: "175",
    period: "an",
    features: [
      "Boxe éducative",
      "2 séances par semaine",
      "Coups portés interdits",
      "Matériel fourni",
    ],
    highlighted: false,
    borderColor: "border-lime-400",
    badges: [{ label: "BEA 9-13", color: "bg-lime-400 text-white" }],
  },
  {
    title: "ONLY GIRLS",
    subtitle: "Adulte",
    price: "150",
    period: "an",
    features: [
      "Cours 100% féminin",
      "Samedi et dimanche",
      "Ambiance conviviale",
      "Tous niveaux",
    ],
    highlighted: false,
    borderColor: "border-pink-500",
    badges: [{ label: "Only Girls", color: "bg-pink-500 text-white" }],
  },
];

const PricingSection = () => {
  return (
    <section id="tarifs" className="py-16 sm:py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-dark sm:text-4xl">Tarifs</h2>
          <p className="mt-4 text-lg text-text">
            Choisissez la formule qui correspond à vos objectifs et à votre
            pratique
          </p>
        </div>

        <div className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-2 md:overflow-visible md:snap-none lg:grid-cols-3 xl:grid-cols-4">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`flex h-full min-w-[85vw] flex-col rounded-xl border-l-4 bg-white p-6 shadow-md transition-all snap-center hover:-translate-y-1 hover:shadow-xl md:min-w-0 ${
                plan.borderColor || "border-primary"
              }`}
            >
              <div>
                <h3 className="text-xl font-bold uppercase text-dark">
                  {plan.title}
                </h3>
                {plan.subtitle && (
                  <p className="mt-1 text-sm text-slate-600">{plan.subtitle}</p>
                )}
                {plan.badges && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {plan.badges.map((badge, badgeIdx) => (
                      <span
                        key={badgeIdx}
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${badge.color}`}
                      >
                        {badge.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-primary">
                  {plan.price}
                </span>
                <span className="text-lg text-slate-600">€</span>
              </div>
              <ul className="mt-6 flex-1 space-y-2 text-sm">
                {plan.features.map((feature, featureIdx) => (
                  <li
                    key={featureIdx}
                    className="flex items-start gap-2 text-slate-600"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  // Utiliser la même fonction que le header
                  scrollToElement("#contact");
                }}
                className="mt-6 w-full rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                S&apos;INSCRIRE
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            <strong>Séance d&apos;essai gratuite</strong> pour tous les nouveaux
            adhérents
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Possibilité de paiement en plusieurs fois • Tarifs réduits sur
            demande
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
