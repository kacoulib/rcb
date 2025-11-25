"use client";

import Link from "next/link";
import { scrollToElement } from "@lib/utils/scrollToElement";
import Carousel from "@components/Carousel";

const Hero = () => {
  // Images par défaut si aucune image avec le tag "hero" n'est trouvée
  const defaultImages = [
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
  ];

  return (
    <section className="relative h-[calc(100vh-100px)] overflow-hidden pt-20 md:pt-24">
      {/* Carousel avec tag "hero" pour la page d'accueil */}
      <Carousel
        tags={["hero", "carousel", "competition", "event"]}
        limit={10}
        defaultImages={defaultImages}
        className="absolute inset-0 z-0"
        showControls={true}
        showIndicators={true}
        objectPosition="center center"
      />

      {/* Contenu principal */}
      <div className="relative z-10 flex h-full items-center justify-center py-8 pointer-events-none">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center text-white">
            {/* Titre principal */}
            <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl text-white">
              Rahilou Cergy Boxe
            </h1>

            {/* Sous-titre */}
            <p className="mb-8 text-xl leading-relaxed sm:text-2xl lg:text-3xl">
              Boxe pour tous à Cergy : initiation, loisir, compétition.
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center pointer-events-auto">
              <Link
                href="#planning"
                onClick={(e) => {
                  e.preventDefault();
                  // S'assurer que le header est visible sur mobile
                  const header = document.querySelector(".header");
                  if (header && window.innerWidth <= 768) {
                    header.style.transform = "translateY(0)";
                  }
                  setTimeout(() => {
                    scrollToElement("#planning");
                  }, 100);
                }}
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Voir le planning
              </Link>
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  // S'assurer que le header est visible sur mobile
                  const header = document.querySelector(".header");
                  if (header && window.innerWidth <= 768) {
                    header.style.transform = "translateY(0)";
                  }
                  setTimeout(() => {
                    scrollToElement("#contact");
                  }, 100);
                }}
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-6 right-8 z-20 animate-bounce">
        <div className="flex flex-col items-center text-white">
          <span className="text-sm font-medium">Découvrir</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
