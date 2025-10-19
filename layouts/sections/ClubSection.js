"use client";

import Image from "next/image";

const coaches = [
  {
    name: "Coach principal",
    role: "Entraîneur diplômé",
    bio: "Encadre les séances tous niveaux, du loisir à la compétition.",
    image: "/images/service-slide-1.png",
    imageAlt: "Portrait illustré d'un coach principal de boxe anglaise",
  },
  {
    name: "Assistant coach",
    role: "Préparation physique",
    bio: "Accompagnement technique et condition physique.",
    image: "/images/service-slide-2.png",
    imageAlt: "Illustration d'un assistant coach concentré sur l'entraînement",
  },
  {
    name: "Coach jeunes",
    role: "Initiation & perfectionnement",
    bio: "Pédagogie et progression pour les plus jeunes.",
    image: "/images/service-slide-3.png",
    imageAlt: "Illustration d'un coach dédié aux jeunes boxeurs",
  },
];

const galleryImages = [
  {
    src: "/images/blog-1.jpg",
    alt: "Entraînement au sac de frappe dans la salle du club",
  },
  {
    src: "/images/blog-2.jpg",
    alt: "Séance de sparring encadrée sur le ring",
  },
  {
    src: "/images/blog-3.jpg",
    alt: "Groupe de boxeurs réunis pour un briefing technique",
  },
  {
    src: "/images/blog-4.jpg",
    alt: "Atelier de renforcement musculaire pendant un stage",
  },
  {
    src: "/images/blog-5.jpg",
    alt: "Public venu soutenir le club lors d'un gala",
  },
  {
    src: "/images/blog-6.jpg",
    alt: "Remise de médailles après une compétition régionale",
  },
];

const ClubSection = () => {
  return (
    <section id="club" className="bg-white py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-dark sm:text-4xl">Le club</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-700">
            RCB est une association de boxe anglaise ancrée à Cergy. Nous
            accueillons tous les publics – jeunes, adultes, féminines,
            handi-boxe – autour d&apos;une pratique encadrée et bienveillante.
            Nos entraîneurs diplômés accompagnent chacun selon son niveau, de la
            découverte à la compétition. Au-delà du ring, le club cultive
            l&apos;entraide, le respect et la progression.
          </p>
        </div>

        {/* Coaches */}
        <div className="mb-16">
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-semibold text-dark">
              Nos entraîneurs
            </h3>
            <p className="mt-4 text-base text-slate-600">
              Une équipe engagée pour transmettre la passion de la boxe dans un
              cadre sécurisant et motivant.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coaches.map((coach) => (
              <article
                key={coach.name}
                className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <div className="relative mb-6 h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={coach.image}
                    alt={coach.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <h4 className="text-xl font-semibold text-dark">
                    {coach.name}
                  </h4>
                  <p className="mt-2 font-medium text-primary">{coach.role}</p>
                  <p className="mt-4 text-sm text-slate-600">{coach.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div>
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-semibold text-dark">En images</h3>
            <p className="mt-4 text-base text-slate-600">
              Moments forts du club : entraînements, sparrings et événements
              partagés avec nos membres.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image) => (
              <figure
                key={image.src}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={260}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubSection;
