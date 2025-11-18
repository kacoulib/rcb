"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { getImagesByTags } from "@lib/utils/imageGallery";

/**
 * Composant Carousel réutilisable avec tags personnalisables
 * @param {Object} props
 * @param {string[]} props.tags - Tags pour filtrer les images (ex: ['hero'], ['competition'], ['gala'])
 * @param {number} props.limit - Nombre maximum d'images (défaut: 10)
 * @param {Array} props.defaultImages - Images par défaut si aucune image avec les tags n'est trouvée
 * @param {number} props.autoRotateInterval - Intervalle de rotation en ms (défaut: 5000)
 * @param {string} props.className - Classes CSS supplémentaires
 * @param {boolean} props.showControls - Afficher les contrôles de navigation (défaut: true)
 * @param {boolean} props.showIndicators - Afficher les indicateurs de slide (défaut: true)
 * @param {string} props.objectPosition - Position de l'image (défaut: "center center")
 */
const Carousel = ({
  tags = [],
  limit = 10,
  defaultImages = [],
  autoRotateInterval = 5000,
  className = "",
  showControls = true,
  showIndicators = true,
  objectPosition = "center center",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fonction pour mélanger aléatoirement un tableau (Fisher-Yates shuffle)
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Récupérer les images selon les tags avec useMemo pour éviter les recalculs
  const carouselImages = useMemo(() => {
    let taggedImages = [];
    try {
      taggedImages = getImagesByTags(tags, limit);
      console.log("Carousel - Tags recherchés:", tags);
      console.log(
        "Carousel - Images trouvées:",
        taggedImages.length,
        taggedImages,
      );
    } catch (error) {
      console.warn("Erreur lors de la récupération des images taguées:", error);
    }

    // Utiliser les images taguées si disponibles, sinon les images par défaut
    let images = [];
    if (taggedImages.length > 0) {
      images = taggedImages.map((img) => ({
        src: img.path,
        alt: img.alt || img.description,
        objectPosition: img.objectPosition || objectPosition, // Utiliser objectPosition du metadata ou la valeur par défaut
      }));
    } else {
      console.log(
        "Carousel - Utilisation des images par défaut:",
        defaultImages.length,
      );
      // Ajouter objectPosition aux images par défaut si elles n'en ont pas
      images = defaultImages.map((img) => ({
        ...img,
        objectPosition: img.objectPosition || objectPosition,
      }));
    }

    // Mélanger aléatoirement les images
    return shuffleArray(images);
  }, [tags, limit, defaultImages, objectPosition]);

  // Auto-rotation du carousel (auto-play)
  useEffect(() => {
    if (carouselImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [carouselImages.length, autoRotateInterval]);

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

  // Toujours afficher le carousel si on a des images par défaut ou taguées
  if (carouselImages.length === 0) {
    console.warn("Carousel: Aucune image disponible");
    return null;
  }

  console.log("Carousel - Images finales à afficher:", carouselImages);

  return (
    <div className={`${className} overflow-hidden`}>
      {/* Carousel Background - conteneur avec position relative pour fill */}
      <div className="relative w-full h-full">
        {carouselImages.map((image, index) => (
          <div
            key={`carousel-${index}-${image.src}`}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: index === currentSlide ? 1 : 0 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              style={{ objectPosition: image.objectPosition || objectPosition }}
              priority={index === 0}
              sizes="100vw"
              onError={(e) => {
                console.error("Erreur de chargement de l'image:", image.src, e);
              }}
              onLoad={() => {
                console.log("Image chargée avec succès:", image.src);
              }}
            />
            {/* Overlay sombre pour améliorer la lisibilité du texte */}
            <div
              className="absolute inset-0 bg-black bg-opacity-40"
              style={{ zIndex: 2 }}
            />
          </div>
        ))}
      </div>

      {/* Contrôles du carousel */}
      {showIndicators && carouselImages.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "scale-125 bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Boutons de navigation */}
      {showControls && carouselImages.length > 1 && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Carousel;
