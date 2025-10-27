"use client";

import social from "@config/social.json";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-4 space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark sm:text-4xl">
            Contactez-nous
          </h2>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {/* Notice d'inscription */}
          <div
            id="inscription-info"
            className="rounded-xl bg-primary/5 border-2 border-primary/20 p-8 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg
                className="h-8 w-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="text-2xl font-bold text-dark">
                Informations d&apos;inscription
              </h3>
            </div>
            <p className="text-lg font-semibold text-slate-800 mb-4">
              Les inscriptions se feront uniquement sur place.
            </p>
            <p className="text-sm text-slate-700 mb-6">
              Venez nous rencontrer au Gymnase des Chênes pour finaliser votre
              inscription. Séance d&apos;essai gratuite disponible.
            </p>

            {/* Bouton PDF optionnel */}
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-white transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              onClick={(e) => {
                e.preventDefault();
                // TODO: Remplacer par le vrai lien PDF quand disponible
                alert(
                  "Le dossier d'inscription sera bientôt disponible. Contactez-nous directement pour plus d'informations.",
                );
              }}
            >
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
                  d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              Télécharger le dossier d&apos;inscription (PDF)
            </a>
          </div>

          {/* Infos gymnase */}
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-8">
              <h4 className="text-2xl font-bold text-slate-900 mb-6">
                Gymnase des Chênes — Cergy
              </h4>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-dark mb-2 flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Adresse
                  </p>
                  <p className="text-slate-700 mb-3">
                    Rue des Chênes Pourpres, 95000 Cergy
                  </p>
                  <a
                    href="https://maps.google.com/?q=Rue+des+Chênes+Pourpres+95000+Cergy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    Ouvrir dans Maps →
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-dark mb-3 flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-slate-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Horaires d&apos;ouverture
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li>Lundi - Vendredi : 10h - 22h</li>
                    <li>Samedi : 10h - 15h</li>
                    <li>Dimanche : 11h - 13h</li>
                  </ul>
                </div>

                {social.email && (
                  <div>
                    <p className="font-semibold text-dark mb-2 flex items-center gap-2">
                      <svg
                        className="h-5 w-5 text-slate-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Email
                    </p>
                    <a
                      href={`mailto:${social.email}`}
                      className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                    >
                      {social.email}
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg border border-slate-200 bg-white overflow-hidden">
              <iframe
                title="Plan du Gymnase des Chênes à Cergy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.123456789!2d2.0371!3d49.0411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f8c8c8c8c8c8%3A0x1234567890abcdef!2sRue%20des%20Ch%C3%AAnes%20Pourpres%2C%2095000%20Cergy!5e0!3m2!1sfr!2sfr!4v1640000000000"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full min-h-[400px] border-0"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
