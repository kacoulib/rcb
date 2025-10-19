"use client";

import Image from "next/image";
import { useState } from "react";

import SeoMeta from "@layouts/SeoMeta";

const activityInfo = {
  Compétiteur: {
    title: "Compétiteur",
    description:
      "Entraînement intensif pour les boxeurs engagés en compétition",
    details:
      "Préparation physique et technique de haut niveau. Réservé aux licenciés compétition.",
    color: "bg-slate-200",
  },
  "ONLY GIRLS": {
    title: "Only Girls",
    description: "Cours 100% féminin dans une ambiance bienveillante",
    details: "Tous niveaux. Boxe anglaise et fitness boxe. Matériel fourni.",
    color: "bg-pink-500",
  },
  "BEA 9-13 ANS": {
    title: "BEA 9-13 ANS",
    description: "Boxe éducative assaut pour les enfants",
    details:
      "Initiation à la boxe sans opposition. Développement de la coordination et de la confiance en soi.",
    color: "bg-lime-400",
  },
  "Haut Niveau": {
    title: "Haut Niveau",
    description: "Entraînement technique avancé",
    details:
      "Pour boxeurs expérimentés. Travail technique poussé, sparring contrôlé.",
    color: "bg-slate-200",
  },
  "BOXE LOISIR": {
    title: "Boxe Loisir",
    description: "Boxe anglaise sans opposition",
    details:
      "Remise en forme, technique de base, travail au sac. Ambiance conviviale.",
    color: "bg-red-300",
  },
  "BEA 14-17 ANS": {
    title: "BEA 14-17 ANS",
    description: "Boxe éducative assaut pour adolescents",
    details:
      "Perfectionnement technique, respect des règles, préparation aux compétitions jeunes.",
    color: "bg-cyan-400",
  },
  "MUAY THAI": {
    title: "Muay Thaï",
    description: "Boxe thaïlandaise - Art martial",
    details:
      "Boxes pieds-poings. Travail des coudes, genoux, tibias. Condition physique excellente.",
    color: "bg-blue-600",
  },
  MMA: {
    title: "MMA",
    description: "Mixed Martial Arts",
    details:
      "Sport de combat complet combinant pugilat et lutte. Tous les aspects du combat.",
    color: "bg-purple-700",
  },
};

const schedule = [
  {
    time: "10H00-12H00",
    slots: [
      { day: "LUNDI", activity: "Compétiteur", color: "bg-slate-200" },
      { day: "MARDI", activity: "Compétiteur", color: "bg-slate-200" },
      { day: "MERCREDI", activity: "Compétiteur", color: "bg-slate-200" },
      { day: "JEUDI", activity: "Compétiteur", color: "bg-slate-200" },
      { day: "VENDREDI", activity: "Compétiteur", color: "bg-slate-200" },
      { day: "SAMEDI", activity: "ONLY GIRLS", color: "bg-pink-500" },
      { day: "DIMANCHE", activity: "", color: "bg-white" },
    ],
  },
  {
    time: "11H00-13H00",
    slots: [
      { day: "LUNDI", activity: "", color: "bg-white" },
      { day: "MARDI", activity: "", color: "bg-white" },
      { day: "MERCREDI", activity: "", color: "bg-white" },
      { day: "JEUDI", activity: "", color: "bg-white" },
      { day: "VENDREDI", activity: "", color: "bg-white" },
      { day: "SAMEDI", activity: "", color: "bg-white" },
      { day: "DIMANCHE", activity: "ONLY GIRLS", color: "bg-pink-500" },
    ],
  },
  {
    time: "14H00-15H30",
    slots: [
      { day: "LUNDI", activity: "", color: "bg-white" },
      { day: "MARDI", activity: "", color: "bg-white" },
      { day: "MERCREDI", activity: "BEA 9-13 ANS", color: "bg-lime-400" },
      { day: "JEUDI", activity: "", color: "bg-white" },
      { day: "VENDREDI", activity: "", color: "bg-white" },
      { day: "SAMEDI", activity: "BEA 9-13 ANS", color: "bg-lime-400" },
      { day: "DIMANCHE", activity: "", color: "bg-white" },
    ],
  },
  {
    time: "17H00-19H00",
    slots: [
      { day: "LUNDI", activity: "Haut Niveau", color: "bg-slate-200" },
      { day: "MARDI", activity: "Haut Niveau", color: "bg-slate-200" },
      { day: "MERCREDI", activity: "Haut Niveau", color: "bg-slate-200" },
      { day: "JEUDI", activity: "Haut Niveau", color: "bg-slate-200" },
      { day: "VENDREDI", activity: "Haut Niveau", color: "bg-slate-200" },
      { day: "SAMEDI", activity: "", color: "bg-white" },
      { day: "DIMANCHE", activity: "", color: "bg-white" },
    ],
  },
  {
    time: "18H30-20H30",
    slots: [
      { day: "LUNDI", activity: "BOXE LOISIR", color: "bg-red-300" },
      { day: "MARDI", activity: "BEA 14-17 ANS", color: "bg-cyan-400" },
      { day: "MERCREDI", activity: "BOXE LOISIR", color: "bg-red-300" },
      { day: "JEUDI", activity: "BEA 14-17 ANS", color: "bg-cyan-400" },
      { day: "VENDREDI", activity: "BOXE LOISIR", color: "bg-red-300" },
      { day: "SAMEDI", activity: "", color: "bg-white" },
      { day: "DIMANCHE", activity: "", color: "bg-white" },
    ],
  },
  {
    time: "20H30-22H00",
    slots: [
      { day: "LUNDI", activity: "MUAY THAI", color: "bg-blue-600" },
      { day: "MARDI", activity: "MMA", color: "bg-purple-700" },
      { day: "MERCREDI", activity: "MUAY THAI", color: "bg-blue-600" },
      { day: "JEUDI", activity: "BOXE LOISIR", color: "bg-red-300" },
      { day: "VENDREDI", activity: "MMA", color: "bg-purple-700" },
      { day: "SAMEDI", activity: "", color: "bg-white" },
      { day: "DIMANCHE", activity: "", color: "bg-white" },
    ],
  },
];

const pricingPlans = [
  {
    title: "MULTI BOXE",
    subtitle: "Adulte",
    price: "400",
    period: "an",
    features: [
      "Accès à tous les créneaux",
      "Boxe anglaise",
      "Muay Thai",
      "MMA",
      "Entraînement complet",
    ],
    highlighted: true,
    badges: [
      { label: "Boxe Loisir", color: "bg-red-300" },
      { label: "Muay Thai", color: "bg-blue-600 text-white" },
      { label: "MMA", color: "bg-purple-700 text-white" },
    ],
  },
  {
    title: "MMA",
    subtitle: "Adulte",
    price: "280",
    period: "an",
    features: [
      "Mixed Martial Arts",
      "2 séances par semaine",
      "Sport de combat complet",
      "Pugilat et lutte",
    ],
    highlighted: false,
    borderColor: "border-purple-700",
    badges: [{ label: "MMA", color: "bg-purple-700 text-white" }],
  },
  {
    title: "MUAY THAI",
    subtitle: "Adulte",
    price: "240",
    period: "an",
    features: [
      "Boxe thaïlandaise",
      "2 séances par semaine",
      "Art martial",
      "Boxes pieds-poings",
    ],
    highlighted: false,
    borderColor: "border-blue-600",
    badges: [{ label: "Muay Thai", color: "bg-blue-600 text-white" }],
  },
  {
    title: "BOXE LOISIR",
    subtitle: "Adulte",
    price: "200",
    period: "an",
    features: [
      "Boxe anglaise loisir",
      "3 séances par semaine",
      "Sans opposition",
      "Remise en forme",
    ],
    highlighted: false,
    borderColor: "border-red-300",
    badges: [{ label: "Boxe Loisir", color: "bg-red-300" }],
  },
  {
    title: "BEA 14-17 ANS",
    subtitle: "Boxe éducative assaut pour Ados",
    price: "185",
    period: "an",
    features: [
      "Boxe éducative",
      "2 séances par semaine",
      "Encadrement adapté",
      "Progression pédagogique",
    ],
    highlighted: false,
    borderColor: "border-cyan-400",
    badges: [{ label: "BEA 14-17", color: "bg-cyan-400" }],
  },
  {
    title: "BEA 9-14 ANS",
    subtitle: "Boxe éducative assaut pour Kids",
    price: "175",
    period: "an",
    features: [
      "Boxe éducative",
      "2 séances par semaine",
      "Coups portés interdits",
      "Matériel fourni",
    ],
    highlighted: false,
    borderColor: "border-lime-400",
    badges: [{ label: "BEA 9-13", color: "bg-lime-400" }],
  },
  {
    title: "ONLY GIRLS",
    subtitle: "Adulte",
    price: "150",
    period: "an",
    features: [
      "Cours 100% féminin",
      "Samedi et dimanche",
      "Ambiance conviviale",
      "Tous niveaux",
    ],
    highlighted: false,
    borderColor: "border-pink-500",
    badges: [{ label: "Only Girls", color: "bg-pink-500 text-white" }],
  },
];

const practices = [
  {
    title: "LA BOXE ÉDUCATIVE ASSAUT (BEA)",
    description:
      "Boxer sans nuire à son adversaire, les coups portés étant interdits.",
    color: "bg-lime-400",
  },
  {
    title: "LA BOXE AMATEUR (BA)",
    description:
      "Sport olympique, opposition et engagement maximal entre 2 adversaires.",
    color: "bg-slate-200",
  },
  {
    title: "LA BOXE LOISIR (BL)",
    description: "Boxer sans faire d'opposition",
    color: "bg-red-300",
  },
  {
    title: "MUAY THAI",
    description:
      "Le muay-thaï, boxe thaïlandaise ou encore boxe thaï, est un art martial et un sport de combat, classé en Occident parmi les boxes pieds-poings",
    color: "bg-blue-600",
  },
  {
    title: "MMA",
    description:
      "Le MMA (mixed martial arts) est un sport de combat complet, associant pugilat et lutte au corps à corps.",
    color: "bg-purple-700",
  },
];

const practiceHighlights = [
  {
    title: "Découverte",
    description:
      "Vous débutez ? Profitez de nos séances d'essai pour découvrir la boxe anglaise dans un cadre convivial et sécurisé.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M12 6v6l3 3" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
  },
  {
    title: "Entraînement",
    description:
      "Des coachs passionnés vous accompagnent pour progresser à votre rythme, dans le respect et la bienveillance.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M4 12h16" />
        <path d="M8 8h8v8H8z" />
        <path d="M6 6h12v12H6z" />
      </svg>
    ),
  },
  {
    title: "Compétition",
    description:
      "Objectif performance : préparation physique et mentale, suivi individualisé et engagement sur les rings.",
    icon: (
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path d="M5 3h14l-1 9-6 9-6-9z" />
        <path d="M7 3l1 9 4 6" />
        <path d="M17 3l-1 9-4 6" />
      </svg>
    ),
  },
];

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

const Home = () => {
  const pageTitle = "Rahilou Cergy Boxe";
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (activity) => {
    if (activity && activityInfo[activity]) {
      setSelectedActivity(activityInfo[activity]);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedActivity(null);
  };

  return (
    <>
      <SeoMeta title={pageTitle} />

      <main>
        <section id="accueil" className="bg-body py-16 sm:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-primary text-4xl font-bold text-dark sm:text-5xl">
                Rahilou Cergy Boxe
              </h1>
              <p className="mt-6 text-lg text-text sm:text-xl">
                Boxe pour tous à Cergy : initiation, loisir, compétition.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#club"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#club")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                >
                  Découvrir le club
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Planning Section */}
        <section
          id="planning"
          className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 sm:py-24"
        >
          <div className="container">
            <div className="mx-auto max-w-6xl text-center">
              <h2 className="text-3xl font-bold text-dark sm:text-5xl">
                Planning des entraînements
              </h2>
              <p className="mt-4 text-lg text-text">
                Retrouvez tous les créneaux d&apos;entraînement au Gymnase des
                Chênes à Cergy
              </p>
              <p className="mt-2 flex items-center justify-center gap-2 text-sm text-primary">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
                Cliquez sur un créneau pour plus d&apos;infos
              </p>
            </div>

            <div className="mt-12 overflow-x-auto rounded-2xl bg-white shadow-xl">
              <div className="min-w-[800px]">
                <div className="grid grid-cols-8 bg-primary text-white">
                  <div className="border-r border-white p-4 font-bold">
                    CERGY
                  </div>
                  <div className="border-r border-white p-4 text-center font-bold">
                    LUNDI
                  </div>
                  <div className="border-r border-white p-4 text-center font-bold">
                    MARDI
                  </div>
                  <div className="border-r border-white p-4 text-center font-bold">
                    MERCREDI
                  </div>
                  <div className="border-r border-white p-4 text-center font-bold">
                    JEUDI
                  </div>
                  <div className="border-r border-white p-4 text-center font-bold">
                    VENDREDI
                  </div>
                  <div className="border-r border-white p-4 text-center font-bold">
                    SAMEDI
                  </div>
                  <div className="p-4 text-center font-bold">DIMANCHE</div>
                </div>

                {schedule.map((timeSlot, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-8 border-b border-gray-200"
                  >
                    <div className="border-r border-gray-200 bg-primary p-4 font-bold text-white">
                      {timeSlot.time}
                    </div>
                    {timeSlot.slots.map((slot, slotIdx) => (
                      <div
                        key={slotIdx}
                        onClick={() => openModal(slot.activity)}
                        className={`border-r border-gray-200 p-4 text-center font-semibold transition-all ${slot.color} ${
                          slot.color === "bg-pink-500" ||
                          slot.color === "bg-blue-600" ||
                          slot.color === "bg-purple-700"
                            ? "text-white"
                            : "text-dark"
                        } ${
                          slot.activity
                            ? "cursor-pointer hover:opacity-80 hover:scale-105 hover:shadow-lg"
                            : ""
                        }`}
                        role={slot.activity ? "button" : undefined}
                        tabIndex={slot.activity ? 0 : undefined}
                        onKeyDown={(e) => {
                          if (
                            slot.activity &&
                            (e.key === "Enter" || e.key === " ")
                          ) {
                            e.preventDefault();
                            openModal(slot.activity);
                          }
                        }}
                      >
                        {slot.activity}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Légende des couleurs */}
            <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
              <h3 className="mb-4 text-center text-lg font-semibold text-dark">
                Légende des activités
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded bg-pink-500"></span>
                  <span className="text-sm">Only Girls</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded bg-lime-400"></span>
                  <span className="text-sm">BEA 9-13 ans</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded bg-cyan-400"></span>
                  <span className="text-sm">BEA 14-17 ans</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded bg-red-300"></span>
                  <span className="text-sm">Boxe Loisir</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded bg-blue-600"></span>
                  <span className="text-sm text-white">Muay Thai</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded bg-purple-700"></span>
                  <span className="text-sm text-white">MMA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-4 w-4 rounded bg-slate-200"></span>
                  <span className="text-sm">Haut niveau</span>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-slate-600">
                💡 Les mêmes couleurs sont utilisées dans la section Tarifs
                ci-dessous
              </p>
            </div>
          </div>
        </section>

        {/* Tarifs Section */}
        <section id="tarifs" className="py-16 sm:py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-dark sm:text-4xl">
                Tarifs
              </h2>
              <p className="mt-4 text-lg text-text">
                Choisissez la formule qui correspond à vos objectifs et à votre
                pratique
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {pricingPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`flex h-full flex-col rounded-xl border-l-4 bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl ${
                    plan.borderColor || "border-primary"
                  }`}
                >
                  <div>
                    <h3 className="text-xl font-bold uppercase text-dark">
                      {plan.title}
                    </h3>
                    {plan.subtitle && (
                      <p className="mt-1 text-sm text-slate-600">
                        {plan.subtitle}
                      </p>
                    )}
                    {plan.badges && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {plan.badges.map((badge, badgeIdx) => (
                          <span
                            key={badgeIdx}
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${badge.color}`}
                          >
                            {badge.label}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-lg text-slate-600">€</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-2 text-sm">
                    {plan.features.map((feature, featureIdx) => (
                      <li
                        key={featureIdx}
                        className="flex items-start gap-2 text-slate-600"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#contact")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className="mt-6 rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    S&apos;INSCRIRE
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600">
                <strong>Séance d&apos;essai gratuite</strong> pour tous les
                nouveaux adhérents
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Possibilité de paiement en plusieurs fois • Tarifs réduits sur
                demande
              </p>
            </div>
          </div>
        </section>

        {/* Practices Section */}
        <section className="py-16 sm:py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-dark sm:text-4xl">
                L&apos;équipe pédagogique encadre différentes pratiques
              </h2>
              <p className="mt-4 text-lg text-text">
                Découvrez nos différentes disciplines et trouvez celle qui vous
                correspond
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {practices.map((practice, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col justify-between rounded-2xl p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-xl ${practice.color} ${
                    practice.color === "bg-blue-600" ||
                    practice.color === "bg-purple-700"
                      ? "text-white"
                      : "text-dark"
                  }`}
                >
                  <div>
                    <h3 className="text-lg font-bold leading-tight">
                      {practice.title}
                    </h3>
                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        practice.color === "bg-blue-600" ||
                        practice.color === "bg-purple-700"
                          ? "text-white/90"
                          : "text-dark/80"
                      }`}
                    >
                      {practice.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-theme-light py-16 sm:py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-dark sm:text-4xl">
                Pratiquer la boxe à RCB
              </h2>
              <p className="mt-4 text-lg text-text">
                Quel que soit votre objectif, notre club vous accompagne sur le
                ring et en dehors, avec une ambiance chaleureuse et motivante.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {practiceHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {highlight.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-dark">
                    {highlight.title}
                  </h3>
                  <p className="mt-4 text-base text-text">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Club Section */}
        <section id="club" className="bg-white py-16 sm:py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-dark sm:text-4xl">
                Le club
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-700">
                RCB est une association de boxe anglaise ancrée à Cergy. Nous
                accueillons tous les publics – jeunes, adultes, féminines,
                handi-boxe – autour d&apos;une pratique encadrée et
                bienveillante. Nos entraîneurs diplômés accompagnent chacun
                selon son niveau, de la découverte à la compétition. Au-delà du
                ring, le club cultive l&apos;entraide, le respect et la
                progression.
              </p>
            </div>

            {/* Coaches */}
            <div className="mb-16">
              <div className="mb-12 text-center">
                <h3 className="text-2xl font-semibold text-dark">
                  Nos entraîneurs
                </h3>
                <p className="mt-4 text-base text-slate-600">
                  Une équipe engagée pour transmettre la passion de la boxe dans
                  un cadre sécurisant et motivant.
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
                      <p className="mt-2 font-medium text-primary">
                        {coach.role}
                      </p>
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

        {/* Contact Section */}
        <section id="contact" className="bg-slate-50 py-16 sm:py-20">
          <div className="container mx-auto max-w-5xl px-4 space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold text-dark sm:text-4xl">
                Contact
              </h2>
              <p className="text-lg text-slate-600">
                Besoin d&apos;informations ? Laissez-nous un message ou
                retrouvez nos coordonnées ci-dessous.
              </p>
            </div>

            <div className="space-y-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-slate-900">
                  Nous contacter
                </h3>
                <form
                  method="post"
                  action="#"
                  className="space-y-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex flex-col">
                      <label
                        htmlFor="name"
                        className="mb-2 text-sm font-medium text-slate-700"
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Votre nom"
                        className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="mb-2 text-sm font-medium text-slate-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="votre@email.com"
                        className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="message"
                      className="mb-2 text-sm font-medium text-slate-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Votre message"
                      className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:bg-primary/90"
                    >
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>

              <div className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Notre Gymnase
                  </h3>

                  <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                    <h4 className="text-xl font-semibold text-slate-900 mb-4">
                      Gymnase des Chênes — Cergy
                    </h4>
                    <div className="space-y-3 text-slate-700">
                      <p>
                        <strong>Adresse :</strong> Rue des Chênes Pourpres,
                        95000 Cergy
                      </p>
                      <p>
                        <strong>Surface :</strong> 300m²
                      </p>
                      <div>
                        <p className="font-semibold mb-2">Équipements :</p>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          <li>2 Rings</li>
                          <li>7 Sacs de frappe</li>
                          <li>Tatami</li>
                          <li>
                            Accessoires pédagogiques : cerceaux, kettle bell,
                            plot, haltères, medecin ball, cordes à sauter
                          </li>
                          <li>
                            Appareils cardio musculaires Technogym : 2 Tapis, 2
                            vélos
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                      Réseaux sociaux
                    </p>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-primary transition hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-primary transition hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                          Facebook
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    Nous trouver
                  </h3>
                  <div className="overflow-hidden rounded-lg border border-slate-200">
                    <iframe
                      title="Plan du Gymnase des Chênes à Cergy"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.123456789!2d2.0371!3d49.0411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f8c8c8c8c8c8%3A0x1234567890abcdef!2sRue%20des%20Ch%C3%AAnes%20Pourpres%2C%2095000%20Cergy!5e0!3m2!1sfr!2sfr!4v1640000000000"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-96 w-full border-0"
                      allowFullScreen
                    />
                    <div className="p-4 bg-slate-50">
                      <p className="text-sm font-medium text-slate-900">
                        Gymnase des Chênes
                      </p>
                      <p className="text-xs text-slate-600">
                        Rue des Chênes Pourpres, 95000 Cergy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modal pour les détails des activités */}
        {isModalOpen && selectedActivity && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
            onClick={closeModal}
          >
            <div
              className={`relative max-w-lg rounded-2xl ${selectedActivity.color} p-8 shadow-2xl ${
                selectedActivity.color === "bg-blue-600" ||
                selectedActivity.color === "bg-purple-700" ||
                selectedActivity.color === "bg-pink-500"
                  ? "text-white"
                  : "text-dark"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className={`absolute right-4 top-4 rounded-full p-2 transition hover:bg-black hover:bg-opacity-10 ${
                  selectedActivity.color === "bg-blue-600" ||
                  selectedActivity.color === "bg-purple-700" ||
                  selectedActivity.color === "bg-pink-500"
                    ? "text-white"
                    : "text-dark"
                }`}
                aria-label="Fermer"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="mb-6">
                <h3 className="text-3xl font-bold">{selectedActivity.title}</h3>
                <p className="mt-2 text-lg font-medium opacity-90">
                  {selectedActivity.description}
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  {selectedActivity.details}
                </p>

                <div className="mt-6 flex gap-4">
                  <a
                    href="#tarifs"
                    onClick={(e) => {
                      e.preventDefault();
                      closeModal();
                      setTimeout(() => {
                        document.querySelector("#tarifs")?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 100);
                    }}
                    className={`rounded-lg px-6 py-3 font-semibold transition ${
                      selectedActivity.color === "bg-blue-600" ||
                      selectedActivity.color === "bg-purple-700" ||
                      selectedActivity.color === "bg-pink-500"
                        ? "bg-white text-dark hover:bg-opacity-90"
                        : "bg-primary text-white hover:bg-primary/90"
                    }`}
                  >
                    Voir les tarifs
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      closeModal();
                      setTimeout(() => {
                        document.querySelector("#contact")?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 100);
                    }}
                    className={`rounded-lg border-2 px-6 py-3 font-semibold transition ${
                      selectedActivity.color === "bg-blue-600" ||
                      selectedActivity.color === "bg-purple-700" ||
                      selectedActivity.color === "bg-pink-500"
                        ? "border-white text-white hover:bg-white hover:bg-opacity-10"
                        : "border-primary text-dark hover:bg-primary hover:text-white"
                    }`}
                  >
                    S&apos;inscrire
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
