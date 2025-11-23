"use client";

import Image from "next/image";
import Carousel from "@layouts/components/Carousel";

const CompetitionClient = () => {
  return (
    <main className="bg-white text-dark">
      {/* Hero Section avec carousel compétition */}
      <section className="relative h-[calc(100vh-100px)] overflow-hidden pt-20 md:pt-24">
        <Carousel
          tags={["competition", "cup", "trophy", "combat"]}
          limit={8}
          className="absolute inset-0 z-0"
          showControls={true}
          showIndicators={true}
        />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="container mx-auto max-w-5xl px-4 text-center text-white">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl text-white">
              Boxe Amateur & Compétition
            </h1>
            <p className="text-xl leading-relaxed">
              La boxe pratiquée aux Jeux Olympiques, réservée à ceux qui
              souhaitent faire de la compétition où la recherche
              d&apos;efficacité et le KO sont autorisés.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="space-y-8 text-slate-700">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                Les acquisitions technique, tactique, physique et psychologique
                sont essentielles pour engranger des points. Chaque coup porté
                et réussi est pris en compte. Cette pratique permet notamment
                d&apos;accéder au Haut Niveau, toutes les composantes de la
                performance sont abordées.
              </p>

              <p className="text-lg leading-relaxed">
                L&apos;entraînement est exigeant et très rigoureux, le passage à
                la compétition est validé par l&apos;entraîneur qui veille avant
                tout à accompagner le boxeur dans sa formation pour que ce
                dernier soit capable de veiller à son intégrité physique.
              </p>

              <div className="my-8 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
                <h3 className="mb-4 text-xl font-semibold text-dark">
                  Exigences médicales
                </h3>
                <p className="text-base leading-relaxed">
                  La pratique nécessite le passage d&apos;examens médicaux et
                  ophtalmologique. Après 32 ans, les pratiquants sont soumis à
                  des examens complémentaires (test d&apos;effort et IRM
                  cérébral).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-dark">
              Résultats de compétition
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Consultez les résultats de nos boxeurs en compétition
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="/pdf/RAHILOU-CERGY-BOXE-resultats-2024-2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-lg border-2 border-primary bg-white px-8 py-4 shadow-md transition-all hover:bg-primary hover:text-white hover:shadow-lg"
            >
              <svg
                className="h-8 w-8 text-primary transition-colors group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <div>
                <div className="font-semibold text-dark group-hover:text-white">
                  Résultats 2024-2025
                </div>
                <div className="text-sm text-slate-600 group-hover:text-white/90">
                  Télécharger le PDF
                </div>
              </div>
              <svg
                className="h-5 w-5 text-primary transition-colors group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-dark">
              Les avantages de la compétition
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Développez vos compétences et atteignez vos objectifs sportifs
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Développement technique",
                description:
                  "Perfectionnement des techniques de boxe avec un encadrement professionnel",
                icon: "🥊",
              },
              {
                title: "Condition physique",
                description:
                  "Préparation physique intensive pour atteindre le haut niveau",
                icon: "💪",
              },
              {
                title: "Mental de champion",
                description:
                  "Développement de la confiance en soi et de la gestion du stress",
                icon: "🧠",
              },
              {
                title: "Accès au haut niveau",
                description:
                  "Possibilité de participer aux compétitions régionales, nationales et internationales",
                icon: "🏆",
              },
              {
                title: "Suivi personnalisé",
                description:
                  "Accompagnement individualisé par des entraîneurs diplômés",
                icon: "👨‍🏫",
              },
              {
                title: "Esprit d'équipe",
                description:
                  "Intégration dans une communauté de boxeurs motivés et solidaires",
                icon: "🤝",
              },
            ].map((benefit, index) => (
              <article
                key={index}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{benefit.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-dark">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Prêt à relever le défi ?</h2>
          <p className="mb-8 text-lg opacity-90">
            Rejoignez notre section compétition et développez votre potentiel
            avec nos entraîneurs expérimentés.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-slate-100"
          >
            Nous contacter
          </a>
        </div>
      </section>
    </main>
  );
};

export default CompetitionClient;
