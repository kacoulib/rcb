"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { getImagesByTags } from "@lib/utils/imageGallery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";

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
 * @param {string|Object} props.objectPosition - Position de l'image (défaut: "center center")
 *   Peut être une string ("center center") ou un objet avec breakpoints:
 *   { default: "center center", sm: "center top", md: "center center", lg: "left center" }
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
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

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
      images = taggedImages.map((img, idx) => ({
        src: img.path,
        alt: img.alt || img.description,
        objectPosition: img.objectPosition || objectPosition, // Utiliser objectPosition du metadata ou la valeur par défaut
        id: `carousel-img-${idx}-${img.path?.replace(/[^a-zA-Z0-9]/g, "-") || idx}`,
      }));
    } else {
      console.log(
        "Carousel - Utilisation des images par défaut:",
        defaultImages.length,
      );
      // Ajouter objectPosition aux images par défaut si elles n'en ont pas
      images = defaultImages.map((img, idx) => ({
        ...img,
        objectPosition: img.objectPosition || objectPosition,
        id: `carousel-img-default-${idx}-${img.src?.replace(/[^a-zA-Z0-9]/g, "-") || idx}`,
      }));
    }

    // Mélanger aléatoirement les images
    return shuffleArray(images);
  }, [tags, limit, defaultImages, objectPosition]);

  // Générer le CSS pour les positions responsive
  const responsiveStyles = useMemo(() => {
    const breakpoints = {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    };

    let css = "";

    carouselImages.forEach((image) => {
      const pos = image.objectPosition;
      if (typeof pos === "object" && pos !== null) {
        const defaultPos = pos.default || pos.base || "center center";
        css += `.${image.id} { object-position: ${defaultPos}; }\n`;

        Object.entries(breakpoints).forEach(([key, value]) => {
          if (pos[key]) {
            css += `@media (min-width: ${value}) { .${image.id} { object-position: ${pos[key]}; } }\n`;
          }
        });
      }
    });

    return css;
  }, [carouselImages]);

  // Masquer l'indicateur de swipe après la première interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      setShowSwipeHint(false);
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("touchstart", handleFirstInteraction, {
        once: true,
      });
      carousel.addEventListener("click", handleFirstInteraction, {
        once: true,
      });
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("touchstart", handleFirstInteraction);
        carousel.removeEventListener("click", handleFirstInteraction);
      }
    };
  }, []);

  // Masquer l'indicateur après 5 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Mettre à jour Swiper quand les images changent
  useEffect(() => {
    if (swiperInstance && carouselImages.length > 0) {
      try {
        if (typeof swiperInstance.update === "function") {
          swiperInstance.update();
        }
      } catch (e) {
        console.warn("Swiper update failed:", e);
      }
    }
  }, [carouselImages, swiperInstance]);

  const goToSlide = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index);
    }
  };

  const goToPrevious = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const goToNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  // Toujours afficher le carousel si on a des images par défaut ou taguées
  if (carouselImages.length === 0) {
    console.warn("Carousel: Aucune image disponible");
    return null;
  }

  // Obtenir la position par défaut pour les images avec objectPosition string
  const getDefaultPosition = (pos) => {
    if (typeof pos === "string") {
      return pos;
    }
    if (typeof pos === "object" && pos !== null) {
      return pos.default || pos.base || "center center";
    }
    return "center center";
  };

  return (
    <div
      ref={carouselRef}
      className={`${className} overflow-hidden`}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      {/* Injecter les styles CSS responsive si nécessaire */}
      {responsiveStyles && (
        <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
      )}
      {/* Styles pour l'animation de bounce horizontal */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes bounce-x {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(-8px);
            }
          }
          .animate-bounce-x {
            animation: bounce-x 1.5s ease-in-out infinite;
          }
          .carousel-swiper {
            width: 100% !important;
            height: 100% !important;
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
          }
          .carousel-swiper .swiper-wrapper {
            height: 100% !important;
          }
          .carousel-swiper .swiper-slide {
            position: relative !important;
            width: 100% !important;
            height: 100% !important;
          }
        `,
        }}
      />
      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        speed={800}
        effect="slide"
        autoplay={
          carouselImages.length > 1
            ? {
                delay: autoRotateInterval,
                disableOnInteraction: false,
              }
            : false
        }
        loop={carouselImages.length > 1}
        navigation={false}
        pagination={false}
        className="carousel-swiper"
        style={{ width: "100%", height: "100%" }}
        onSwiper={(swiper) => {
          setSwiperInstance(swiper);
          // Forcer la mise à jour de la hauteur après l'initialisation
          if (swiper) {
            setTimeout(() => {
              try {
                if (swiper && typeof swiper.update === "function") {
                  swiper.update();
                }
              } catch (e) {
                console.warn("Swiper update failed:", e);
              }
            }, 100);
          }
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
      >
        {carouselImages.map((image, index) => {
          const isResponsive =
            typeof image.objectPosition === "object" &&
            image.objectPosition !== null;
          const defaultPos = getDefaultPosition(
            image.objectPosition || objectPosition,
          );

          return (
            <SwiperSlide key={`carousel-${index}-${image.src}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover ${isResponsive ? image.id : ""}`}
                style={!isResponsive ? { objectPosition: defaultPos } : {}}
                priority={index === 0}
                sizes="100vw"
                onError={(e) => {
                  console.error(
                    "Erreur de chargement de l'image:",
                    image.src,
                    e,
                  );
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
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Contrôles du carousel */}
      {showIndicators && carouselImages.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {carouselImages.map((_, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  isActive
                    ? "scale-125 bg-white"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Aller à l'image ${index + 1}`}
              />
            );
          })}
        </div>
      )}

      {/* Boutons de navigation */}
      {showControls && carouselImages.length > 1 && swiperInstance && (
        <>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-2 sm:p-3 text-white transition-all duration-300 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white touch-manipulation cursor-pointer"
            aria-label="Image précédente"
            type="button"
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
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full bg-white/20 p-2 sm:p-3 text-white transition-all duration-300 hover:bg-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white touch-manipulation cursor-pointer"
            aria-label="Image suivante"
            type="button"
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

      {/* Indicateurs visuels de swipe pour mobile */}
      {showSwipeHint && carouselImages.length > 1 && (
        <>
          {/* Flèche gauche animée */}
          <div className="absolute left-4 top-1/2 z-30 -translate-y-1/2 pointer-events-none md:hidden">
            <div className="flex items-center gap-2 rounded-full bg-white/30 backdrop-blur-sm px-4 py-2 animate-pulse">
              <svg
                className="h-6 w-6 text-white animate-bounce-x"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="text-xs font-medium text-white">Glisser</span>
            </div>
          </div>

          {/* Flèche droite animée */}
          <div className="absolute right-4 top-1/2 z-30 -translate-y-1/2 pointer-events-none md:hidden">
            <div className="flex items-center gap-2 rounded-full bg-white/30 backdrop-blur-sm px-4 py-2 animate-pulse">
              <span className="text-xs font-medium text-white">Glisser</span>
              <svg
                className="h-6 w-6 text-white animate-bounce-x"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;
