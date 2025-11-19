"use client";

import Image from "next/image";
import Carousel from "@layouts/components/Carousel";

const EnfantPage = () => {
  return (
    <main className="bg-white text-dark">
      {/* Hero Section avec carousel enfant */}
      <section className="relative h-[calc(100vh-100px)] overflow-hidden pt-20 md:pt-24">
        <Carousel
          tags={["young"]}
          limit={8}
          className="absolute inset-0 z-0"
          showControls={true}
          showIndicators={true}
        />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="container mx-auto max-w-5xl px-4 text-center text-white">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl text-white">
              Boxe Éducative Assaut (BEA)
            </h1>
            <p className="text-xl leading-relaxed">
              La boxe éducative assaut est une forme de pratique ouverte à
              toutes et à tous. C&apos;est une pratique sans danger,
              puisqu&apos;elle exige de ne pas nuire à son adversaire.
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
                La boxe éducative assaut est une forme de pratique ouverte à
                toutes et à tous. C&apos;est une pratique sans danger,
                puisqu&apos;elle exige de ne pas nuire à son adversaire par un
                comportement violent sous peine de sanctions : le boxeur doit
                toucher et ne pas provoquer de douleur à l&apos;adversaire.
              </p>

              <p className="text-lg leading-relaxed">
                La pratique éducative est ludique et permet à chacun de
                développer des compétences technico-tactique en toute sécurité
                (veille de l&apos;intégrité physique et psychologique).
              </p>

              <div className="my-8 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
                <h3 className="mb-4 text-xl font-semibold text-dark">
                  Notre approche pédagogique
                </h3>
                <p className="text-base leading-relaxed mb-4">
                  Au RCB, l&apos;éducation est prioritaire, permettant au plus
                  jeune de développer leur coordination et leur motricité. À
                  noter que la compétition est secondaire dans notre politique
                  d&apos;apprentissage et d&apos;enseignement. La formation
                  étant prioritaire dans la recherche d&apos;évolution en toute
                  sécurité.
                </p>
                <p className="text-base leading-relaxed">
                  La compétition et l&apos;évaluation de la progression
                  technique sont en effet uniquement proposées à partir des
                  Benjamins ayant validé un certain nombre de compétences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-dark">
              Les bienfaits pour les enfants
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Développement physique, mental et social en toute sécurité
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Développement moteur",
                description:
                  "Amélioration de la coordination, de l&apos;équilibre et de la motricité globale",
                icon: "🏃",
              },
              {
                title: "Confiance en soi",
                description:
                  "Renforcement de l&apos;estime de soi et de la capacité à se dépasser",
                icon: "✨",
              },
              {
                title: "Respect et discipline",
                description:
                  "Apprentissage du respect de l&apos;autre, des règles et de la discipline",
                icon: "🤝",
              },
              {
                title: "Gestion des émotions",
                description:
                  "Apprendre à canaliser son énergie et à gérer ses émotions de manière positive",
                icon: "🧘",
              },
              {
                title: "Socialisation",
                description:
                  "Rencontre avec d&apos;autres enfants et développement de l&apos;esprit d&apos;équipe",
                icon: "👥",
              },
              {
                title: "Sécurité avant tout",
                description:
                  "Pratique encadrée par des professionnels diplômés dans un environnement sécurisé",
                icon: "🛡️",
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

      {/* Age Groups Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-dark">
              Par tranches d&apos;âge
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Des cours adaptés à chaque niveau et à chaque âge
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                age: "6-8 ans",
                title: "Poussins",
                description:
                  "Initiation ludique à la boxe avec développement de la motricité et du respect",
              },
              {
                age: "9-10 ans",
                title: "Pupilles",
                description:
                  "Apprentissage des bases techniques dans un cadre sécurisé et bienveillant",
              },
              {
                age: "11-12 ans",
                title: "Benjamins",
                description:
                  "Perfectionnement technique avec possibilité d&apos;évaluation et de compétition",
              },
              {
                age: "13-15 ans",
                title: "Minimes/Cadets",
                description:
                  "Approfondissement technique et tactique avec préparation à la compétition",
              },
            ].map((group, index) => (
              <article
                key={index}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="mb-3 text-sm font-semibold text-primary">
                  {group.age}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-dark">
                  {group.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {group.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">Inscrivez votre enfant</h2>
          <p className="mb-8 text-lg opacity-90">
            Rejoignez notre section enfants et offrez à votre enfant une
            activité sportive enrichissante dans un cadre sécurisé et
            bienveillant.
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

export default EnfantPage;
