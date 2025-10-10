import Link from "next/link";

import SeoMeta from "@layouts/SeoMeta";

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

const posts = [
  {
    title: "Rentrée sportive : séances d’essai gratuites cette semaine",
    date: "12 septembre 2024",
    href: "/actu/rentree-sportive-seances-dessai",
  },
  {
    title: "Gala RCB – merci aux bénévoles et aux partenaires !",
    date: "2 juillet 2024",
    href: "/actu/gala-rcb-merci",
  },
  {
    title: "Nouveaux créneaux handi-boxe : infos et inscriptions",
    date: "18 juin 2024",
    href: "/actu/handi-boxe-nouveaux-creneaux",
  },
];

const Home = () => {
  const pageTitle = "Rahilou Cergy Boxe";

  return (
    <>
      <SeoMeta title={pageTitle} />

      <main>
        <section className="bg-body py-16 sm:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-primary text-4xl font-bold text-dark sm:text-5xl">
                Rahilou Cergy Boxe
              </h1>
              <p className="mt-6 text-lg text-text sm:text-xl">
                Boxe pour tous à Cergy et Éragny : initiation, loisir, compétition.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                >
                  S’inscrire
                </Link>
                <Link
                  href="/club"
                  className="inline-flex items-center justify-center rounded-full border border-primary px-8 py-3 text-base font-semibold text-primary transition hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                >
                  Découvrir le club
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-dark sm:text-4xl">
                Pratiquer la boxe à RCB
              </h2>
              <p className="mt-4 text-lg text-text">
                Quel que soit votre objectif, notre club vous accompagne sur le ring et en dehors, avec une ambiance chaleureuse et motivante.
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

        <section className="bg-theme-light py-16 sm:py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-dark sm:text-4xl">Nos lieux</h2>
              <p className="mt-4 text-lg text-text">
                Deux implantations pour accueillir tous les publics du Rahilou Cergy Boxe : choisissez le lieu qui vous convient le mieux.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[{
                name: "Cergy",
                description:
                  "Gymnase des Chênes : salle de boxe équipée pour l’initiation comme pour la préparation des compétiteurs.",
              },
              {
                name: "Éragny",
                description:
                  "Gymnase de la Butte : un espace chaleureux et accessible pour des entraînements adaptés à chacun.",
              }].map((location) => (
                <div
                  key={location.name}
                  className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 text-primary">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21s-6-4.35-6-9a6 6 0 1 1 12 0c0 4.65-6 9-6 9z" />
                        <circle cx="12" cy="12" r="2" />
                      </svg>
                    </span>
                    <h3 className="text-xl font-semibold text-dark">{location.name}</h3>
                  </div>
                  <p className="text-base text-text">{location.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-dark sm:text-4xl">Dernières actualités</h2>
              <p className="mt-4 text-lg text-text">
                Restez informés de la vie du club, des événements majeurs et des nouveaux créneaux proposés aux adhérents.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.title}
                  className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                    {post.date}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-dark">{post.title}</h3>
                  <div className="mt-6">
                    <Link
                      href={post.href}
                      className="inline-flex items-center gap-2 text-base font-semibold text-primary transition hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
                    >
                      En savoir plus
                      <span aria-hidden="true" className="text-lg">
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
