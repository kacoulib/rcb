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
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold text-dark sm:text-4xl">
            Contactez-nous
          </h2>
          <p className="text-lg text-slate-600">
            2 options : message ou contact direct
          </p>
        </div>

        {/* Contact rapide */}
        <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto">
          <a
            href="https://wa.me/33612345678"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl bg-green-50 border-2 border-green-500 p-6 transition hover:bg-green-100 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-dark">WhatsApp</p>
              <p className="text-sm text-slate-600">Réponse rapide</p>
            </div>
          </a>
          <a
            href="tel:+33612345678"
            className="flex items-center gap-4 rounded-xl bg-primary/5 border-2 border-primary p-6 transition hover:bg-primary/10 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-dark">Téléphone</p>
              <p className="text-sm text-slate-600">06 12 34 56 78</p>
            </div>
          </a>
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
