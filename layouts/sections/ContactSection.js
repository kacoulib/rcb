"use client";

import social from "@config/social.json";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Créer le sujet et le corps de l'email
    const subject = `Message de ${name} via le site RCB95`;
    const body = `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    // Encoder les paramètres pour l'URL mailto
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Créer le lien mailto
    const mailtoLink = `mailto:${social.email}?subject=${encodedSubject}&body=${encodedBody}`;

    // Ouvrir le client de messagerie
    window.location.href = mailtoLink;

    // Optionnel : réinitialiser le formulaire après envoi
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="container mx-auto max-w-6xl px-4 space-y-12">
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold text-dark sm:text-4xl">
            Contactez-nous
          </h2>

          {/* Notice d'inscription */}
          <div className="mx-auto max-w-3xl rounded-xl bg-amber-50 border-2 border-amber-200 p-6">
            <h3 className="text-xl font-bold text-amber-900 mb-3">
              📝 Inscriptions
            </h3>
            <p className="text-lg font-semibold text-amber-800 mb-2">
              Les inscriptions se feront uniquement sur place.
            </p>
            <p className="text-sm text-amber-700 mb-4">
              Venez nous rencontrer au Gymnase des Chênes pour finaliser votre
              inscription. Séance d&apos;essai gratuite disponible.
            </p>

            {/* Bouton PDF optionnel */}
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
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
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Formulaire */}
          <div className="flex h-full flex-col space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900">
              Ou envoyez un message
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-1 flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="space-y-6">
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
                      value={formData.name}
                      onChange={handleInputChange}
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
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="votre@email.com"
                      className="w-full rounded-md border border-slate-300 px-4 py-3 text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <label
                    htmlFor="message"
                    className="mb-2 text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={8}
                    placeholder="Votre message"
                    className="w-full flex-1 rounded-md border border-slate-300 px-4 py-3 text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:bg-primary/90"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>

          {/* Infos gymnase */}
          <div className="flex h-full flex-col space-y-6">
            <h3 className="text-2xl font-semibold text-slate-900">
              Notre Gymnase
            </h3>

            <div className="flex h-full flex-1 flex-col justify-center rounded-lg border border-slate-200 bg-slate-50 p-8">
              <h4 className="text-xl font-semibold text-slate-900 mb-6">
                Gymnase des Chênes — Cergy
              </h4>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-dark mb-2">📍 Adresse</p>
                  <p className="text-slate-700 mb-3">
                    Rue des Chênes Pourpres, 95000 Cergy
                  </p>
                  <a
                    href="https://maps.google.com/?q=Rue+des+Chênes+Pourpres+95000+Cergy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Ouvrir dans Maps
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-dark mb-3">
                    🕒 Horaires d&apos;ouverture
                  </p>
                  <ul className="space-y-2 text-slate-700">
                    <li>Lundi - Vendredi : 10h - 22h</li>
                    <li>Samedi : 10h - 15h</li>
                    <li>Dimanche : 11h - 13h</li>
                  </ul>
                </div>

                {social.email && (
                  <div>
                    <p className="font-semibold text-dark mb-2">📧 Email</p>
                    <a
                      href={`mailto:${social.email}`}
                      className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
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
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {social.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Carte pleine largeur */}
        <div className="overflow-hidden rounded-lg border border-slate-200 shadow-lg">
          <iframe
            title="Plan du Gymnase des Chênes à Cergy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.123456789!2d2.0371!3d49.0411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f8c8c8c8c8c8%3A0x1234567890abcdef!2sRue%20des%20Ch%C3%AAnes%20Pourpres%2C%2095000%20Cergy!5e0!3m2!1sfr!2sfr!4v1640000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[500px] w-full border-0"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
