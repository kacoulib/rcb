import Image from "next/image";
import Carousel from "@layouts/components/Carousel";
import config from "@config/config.json";
import { generateSeoMetadata, getFullBaseUrl } from "@lib/utils/seo";

export async function generateMetadata() {
  return generateSeoMetadata({
    title: "Gala & Événements",
    description:
      "Découvrez les galas de boxe et événements organisés par le RCB. Galas amateurs, événements caritatifs, stages et rencontres interclubs. Participez aux prochains événements du club de boxe de Cergy.",
    keywords: [
      "gala boxe",
      "événements boxe",
      "galas boxe amateur",
      "boxe Cergy",
      "événements sportifs",
      "combats boxe",
      "rencontres interclubs",
      "stages boxe",
    ],
    path: "/gala",
  });
}

const GalaPage = () => {
  const fullBaseUrl = getFullBaseUrl();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "Gala & Événements RCB95",
    description:
      "Galas de boxe et événements organisés par le Rahilou Cergy Boxe. Galas amateurs, événements caritatifs, stages et rencontres interclubs.",
    organizer: {
      "@type": "SportsOrganization",
      name: "RCB95 - Rahilou Cergy Boxe",
      url: fullBaseUrl,
    },
    sport: "Boxe anglaise",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Cergy",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cergy",
        addressCountry: "FR",
      },
    },
  };

  return (
    <main className="bg-white text-dark">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section avec carousel gala */}
      <section className="relative h-[calc(100vh-100px)] overflow-hidden pt-20 md:pt-24">
        <Carousel
          tags={["gala", "cup", "trophy"]}
          limit={8}
          className="absolute inset-0 z-0"
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
      <article className="py-16">
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
      </article>

      {/* Event Types Section */}
      <section
        aria-labelledby="event-types-heading"
        className="bg-slate-50 py-16"
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2
              id="event-types-heading"
              className="text-3xl font-semibold text-dark"
            >
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
