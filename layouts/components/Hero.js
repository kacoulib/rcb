"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { scrollToElement } from "@lib/utils/scrollToElement";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Images du carousel
  const carouselImages = [
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

  // Auto-rotation du carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change d'image toutes les 5 secondes

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <section className="relative h-[calc(100vh-100px)] overflow-hidden pt-20 md:pt-24">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Overlay sombre pour améliorer la lisibilité du texte */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex h-full items-center justify-center py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center text-white">
            {/* Titre principal */}
            <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Rahilou Cergy Boxe
            </h1>

            {/* Sous-titre */}
            <p className="mb-8 text-xl leading-relaxed sm:text-2xl lg:text-3xl">
              Boxe pour tous à Cergy : initiation, loisir, compétition.
            </p>

            {/* Boutons d'action */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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

      {/* Contrôles du carousel */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>

      {/* Boutons de navigation */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 sm:p-3 text-white transition-all duration-300 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white touch-manipulation"
        aria-label="Image précédente"
      >
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 p-2 sm:p-3 text-white transition-all duration-300 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white touch-manipulation"
        aria-label="Image suivante"
      >
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

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
