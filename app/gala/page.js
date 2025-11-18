"use client";

import Image from "next/image";
import Carousel from "@layouts/components/Carousel";

const GalaPage = () => {
  return (
    <main className="bg-white text-dark">
      {/* Hero Section avec carousel gala */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Carousel
          tags={["gala", "cup", "trophy"]}
          limit={8}
          className="absolute inset-0"
          showControls={true}
          showIndicators={true}
        />
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="container mx-auto max-w-5xl px-4 text-center text-white">
            <h1 className="mb-6 text-4xl font-bold sm:text-5xl text-white">
              Gala & Événements
            </h1>
            <p className="text-xl leading-relaxed">
              Le RCB organise régulièrement des galas de boxe et des événements
              sportifs pour promouvoir la boxe et rassembler la communauté.
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
                Les galas de boxe organisés par le RCB sont des moments forts
                qui rassemblent la communauté autour de la passion du noble art.
                Ces événements permettent de mettre en valeur nos boxeurs, de
                promouvoir la boxe anglaise et de créer des liens entre les
                pratiquants, les familles et les partenaires du club.
              </p>

              <p className="text-lg leading-relaxed">
                Que ce soit pour assister à des combats de haut niveau,
                découvrir les talents émergents du club ou simplement partager
                un moment convivial autour de la boxe, nos galas sont ouverts à
                tous.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-dark">
              Types d&apos;événements
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Découvrez les différents événements que nous organisons
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {[
              {
                title: "Galas de boxe amateur",
                description:
                  "Combats officiels de boxe amateur avec nos licenciés et des boxeurs d&apos;autres clubs. Ces événements permettent à nos compétiteurs de se mesurer et de progresser.",
                icon: "🥊",
              },
              {
                title: "Événements caritatifs",
                description:
                  "Organisation de galas au profit d&apos;associations ou de causes locales, alliant sport et solidarité.",
                icon: "❤️",
              },
              {
                title: "Stages et démonstrations",
                description:
                  "Démonstrations techniques, initiations à la boxe et stages de perfectionnement ouverts au public.",
                icon: "🎯",
              },
              {
                title: "Rencontres interclubs",
                description:
                  "Échanges sportifs avec d&apos;autres clubs de boxe pour favoriser la convivialité et l&apos;émulation.",
                icon: "🤝",
              },
            ].map((event, index) => (
              <article
                key={index}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{event.icon}</div>
                <h3 className="mb-3 text-xl font-semibold text-dark">
                  {event.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {event.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-dark">
              Galas précédents
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Revivez les moments forts de nos événements
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/images/blog-5.jpg",
                alt: "Public venu soutenir le club lors d&apos;un gala",
                title: "Gala 2023",
              },
              {
                src: "/images/blog-6.jpg",
                alt: "Remise de médailles après une compétition régionale",
                title: "Remise de médailles",
              },
              {
                src: "/images/blog-1.jpg",
                alt: "Préparation avant un gala",
                title: "Préparation",
              },
            ].map((image, index) => (
              <figure
                key={index}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={260}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{image.title}</p>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Participez à nos prochains événements
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Restez informé de nos prochains galas et événements en nous
            contactant ou en suivant nos actualités.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-primary transition-colors hover:bg-slate-100"
            >
              Nous contacter
            </a>
            <a
              href="/actu"
              className="inline-block rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Voir les actualités
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GalaPage;
