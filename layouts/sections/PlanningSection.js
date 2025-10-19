"use client";

import { useState } from "react";

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

const PlanningSection = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredActivity, setHoveredActivity] = useState(null);

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

  const handleLegendClick = (activityName) => {
    openModal(activityName);
  };

  const handleLegendHover = (activityName) => {
    setHoveredActivity(activityName);
  };

  const handleLegendLeave = () => {
    setHoveredActivity(null);
  };

  return (
    <>
      <section
        id="planning"
        className="bg-gradient-to-br from-primary/5 to-primary/10 py-12 sm:py-16"
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
                <div className="border-r border-white p-4 font-bold">CERGY</div>
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
                  {timeSlot.slots.map((slot, slotIdx) => {
                    const isHighlighted = hoveredActivity === slot.activity;
                    const isDimmed =
                      hoveredActivity &&
                      hoveredActivity !== slot.activity &&
                      slot.activity;

                    return (
                      <div
                        key={slotIdx}
                        onClick={() => openModal(slot.activity)}
                        className={`border-r border-gray-200 p-4 text-center font-semibold transition-all duration-300 ${slot.color} ${
                          slot.color === "bg-pink-500" ||
                          slot.color === "bg-blue-600" ||
                          slot.color === "bg-purple-700"
                            ? "text-white"
                            : "text-dark"
                        } ${
                          slot.activity
                            ? "cursor-pointer hover:opacity-80 hover:scale-105 hover:shadow-lg"
                            : ""
                        } ${isHighlighted ? "ring-4 ring-primary scale-110 z-10 shadow-xl" : ""} ${
                          isDimmed ? "opacity-30" : ""
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
                    );
                  })}
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
              <button
                onClick={() => handleLegendClick("ONLY GIRLS")}
                onMouseEnter={() => handleLegendHover("ONLY GIRLS")}
                onMouseLeave={handleLegendLeave}
                className="flex items-center gap-2 rounded-lg border-2 border-transparent px-3 py-2 transition-all hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              >
                <span className="h-4 w-4 rounded bg-pink-500"></span>
                <span className="text-sm font-medium">Only Girls</span>
              </button>
              <button
                onClick={() => handleLegendClick("BEA 9-13 ANS")}
                onMouseEnter={() => handleLegendHover("BEA 9-13 ANS")}
                onMouseLeave={handleLegendLeave}
                className="flex items-center gap-2 rounded-lg border-2 border-transparent px-3 py-2 transition-all hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              >
                <span className="h-4 w-4 rounded bg-lime-400"></span>
                <span className="text-sm font-medium">BEA 9-13 ans</span>
              </button>
              <button
                onClick={() => handleLegendClick("BEA 14-17 ANS")}
                onMouseEnter={() => handleLegendHover("BEA 14-17 ANS")}
                onMouseLeave={handleLegendLeave}
                className="flex items-center gap-2 rounded-lg border-2 border-transparent px-3 py-2 transition-all hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              >
                <span className="h-4 w-4 rounded bg-cyan-400"></span>
                <span className="text-sm font-medium">BEA 14-17 ans</span>
              </button>
              <button
                onClick={() => handleLegendClick("BOXE LOISIR")}
                onMouseEnter={() => handleLegendHover("BOXE LOISIR")}
                onMouseLeave={handleLegendLeave}
                className="flex items-center gap-2 rounded-lg border-2 border-transparent px-3 py-2 transition-all hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              >
                <span className="h-4 w-4 rounded bg-red-300"></span>
                <span className="text-sm font-medium">Boxe Loisir</span>
              </button>
              <button
                onClick={() => handleLegendClick("MUAY THAI")}
                onMouseEnter={() => handleLegendHover("MUAY THAI")}
                onMouseLeave={handleLegendLeave}
                className="flex items-center gap-2 rounded-lg border-2 border-transparent px-3 py-2 transition-all hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              >
                <span className="h-4 w-4 rounded bg-blue-600"></span>
                <span className="text-sm font-medium">Muay Thai</span>
              </button>
              <button
                onClick={() => handleLegendClick("MMA")}
                onMouseEnter={() => handleLegendHover("MMA")}
                onMouseLeave={handleLegendLeave}
                className="flex items-center gap-2 rounded-lg border-2 border-transparent px-3 py-2 transition-all hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              >
                <span className="h-4 w-4 rounded bg-purple-700"></span>
                <span className="text-sm font-medium">MMA</span>
              </button>
              <button
                onClick={() => handleLegendClick("Haut Niveau")}
                onMouseEnter={() => handleLegendHover("Haut Niveau")}
                onMouseLeave={handleLegendLeave}
                className="flex items-center gap-2 rounded-lg border-2 border-transparent px-3 py-2 transition-all hover:border-primary hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
              >
                <span className="h-4 w-4 rounded bg-slate-200"></span>
                <span className="text-sm font-medium">Haut niveau</span>
              </button>
            </div>
            <p className="mt-4 text-center text-sm text-slate-600">
              💡 Cliquez sur une légende pour voir les détails • Survolez pour
              mettre en avant dans le planning
            </p>
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
    </>
  );
};

export default PlanningSection;
