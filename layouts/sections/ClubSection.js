"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { getAllImages } from "@lib/utils/imageGallery";

const ClubSection = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Fonction pour mélanger aléatoirement un tableau (Fisher-Yates shuffle)
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Charger les images du metadata (9 images aléatoires pour une grille 3x3 parfaite)
  useEffect(() => {
    try {
      // Récupérer toutes les images disponibles
      const allImages = getAllImages();
      // Mélanger aléatoirement
      const shuffledImages = shuffleArray(allImages);
      // Prendre 10 images (la dernière prendra toute la largeur si seule)
      const selectedImages = shuffledImages.slice(0, 10);
      const formattedImages = selectedImages.map((img) => ({
        src: img.path,
        alt: img.alt || img.description || "Image du club Rahilou Cergy Boxe",
      }));
      setGalleryImages(formattedImages);
    } catch (error) {
      console.warn("Erreur lors du chargement des images:", error);
      // Images de fallback si erreur
      setGalleryImages([
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
      ]);
    }
  }, []);

  // Intersection Observer pour détecter quand la section est visible
  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Une fois visible, on peut arrêter d'observer
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "200px", // Commencer à charger 200px avant que la section soit visible
        threshold: 0.1,
      },
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);
  return (
    <section id="club" className="bg-white py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-dark sm:text-4xl">
            Présentation du club
          </h2>
        </div>

        {/* Présentation historique */}
        <div className="mb-16 space-y-8">
          <div className="max-w-4xl mx-auto space-y-6 text-slate-700">
            <p className="text-lg leading-relaxed">
              L&apos;exploit de{" "}
              <strong className="text-primary">Khalid Rahilou</strong> de
              détrôner le titre mondial à un américain aux USA, a généré un
              engouement des habitants de Cergy pour la boxe anglaise et
              c&apos;est dans ce contexte qu&apos;est née l&apos;association{" "}
              <strong className="text-primary">
                &laquo; Rahilou Cergy Boxe &raquo;
              </strong>{" "}
              (RCB) en septembre 2006.
            </p>

            <p className="text-lg leading-relaxed">
              Le RCB est une association Loi 1901 située à quelques pas de la
              gare Cergy Préfecture. Elle a pour objet l&apos;enseignement, la
              pratique et la promotion de la Boxe anglaise amateur,
              professionnelle, loisir et éducative d&apos;assaut.
            </p>

            <p className="text-lg leading-relaxed">
              Elle s&apos;adresse à tout public : jeune et moins jeune, filles
              et garçons. Que vous ayez envie de vous engager en compétition, de
              pratiquer en loisir ou tout simplement de garder la forme, le RCB
              vous ouvre les portes de sa salle de boxe{" "}
              <strong className="text-primary">
                &laquo; Khalid Rahilou &raquo;
              </strong>{" "}
              pour vous transmettre ses valeurs : dépassement de soi et respect
              de l&apos;autre.
            </p>

            <p className="text-lg leading-relaxed">
              Que tu sois néophyte ou expérimenté, n&apos;hésites pas à te
              joindre au RCB. Nous proposons de la boxe éducative, loisir et
              compétiteur pour tous niveaux.
            </p>
          </div>
        </div>

        {/* Timeline historique de Khalid Rahilou */}
        <div className="mb-16">
          <div className="mb-8 text-center md:mb-10">
            <h3 className="text-2xl font-semibold text-dark">
              L&apos;histoire de Khalid Rahilou
            </h3>
            <p className="mt-2 text-base text-slate-600 md:mt-3">
              Un parcours exceptionnel qui a inspiré la création du club
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:gap-4">
              {[
                { date: "1987/11", title: "Les débuts de Khalid" },
                { date: "1996/12", title: "Champion d'Europe" },
                { date: "1997/02", title: "Titre mondial" },
                { date: "1998/09", title: "Inauguration place Marcel Cerdan" },
                { date: "2006/09", title: "Création de l'association RCB" },
                { date: "2008/08", title: "Création de la Ligue Pro « GNBP »" },
                { date: "2013/12", title: "Sacre mondial de Gaëlle" },
                { date: "2014/01", title: "Le grand jour de Gaëlle" },
                { date: "2016/11", title: "Cergy by Gaëlle" },
                { date: "2019/03", title: "50 ans de Cergy" },
                { date: "2022/03", title: "Cergy A fond la forme avec Gaëlle" },
              ].map((event, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 border-l-2 border-primary pl-4 md:pl-5"
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-semibold md:h-9 md:w-9 md:text-base">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <div className="text-xs font-medium text-primary mb-1 md:text-sm">
                      {event.date}
                    </div>
                    <div className="text-base font-semibold text-dark leading-snug md:text-lg">
                      {event.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div ref={sectionRef}>
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-semibold text-dark">En images</h3>
            <p className="mt-4 text-base text-slate-600">
              Moments forts du club : entraînements, sparrings et événements
              partagés avec nos membres.
            </p>
          </div>
          {isVisible && galleryImages.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((image, index) => {
                const isLast = index === galleryImages.length - 1;
                const isAloneOnLastRow =
                  galleryImages.length % 3 === 1 && isLast;

                return (
                  <figure
                    key={`${image.src}-${index}`}
                    className={`group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-sm ${
                      isAloneOnLastRow ? "sm:col-span-2 lg:col-span-3" : ""
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={260}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </figure>
                );
              })}
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Placeholders pendant le chargement */}
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={`placeholder-${index}`}
                  className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 aspect-[400/260] animate-pulse"
                >
                  <div className="absolute inset-0 bg-slate-200" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClubSection;
