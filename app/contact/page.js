export const metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return (
    <section className="section">
      <div className="container mx-auto max-w-5xl px-4 space-y-12">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="text-lg text-slate-600">
            Besoin d’informations ? Laissez-nous un message ou retrouvez nos
            coordonnées ci-dessous.
          </p>
        </div>

        <div className="space-y-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-slate-900">Nous contacter</h2>
            <form
              method="post"
              action="#"
              className="space-y-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              {/* TODO: brancher le handler plus tard. */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col">
                  <label htmlFor="name" className="mb-2 text-sm font-medium text-slate-700">
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
                  <label htmlFor="email" className="mb-2 text-sm font-medium text-slate-700">
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
                <label htmlFor="message" className="mb-2 text-sm font-medium text-slate-700">
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
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-slate-900">Coordonnées</h2>
              <div className="space-y-4 text-slate-700">
                <p className="font-medium">Gymnase des Chênes — Cergy</p>
                <p className="font-medium">Gymnase de la Butte — Éragny</p>
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
              <h2 className="text-2xl font-semibold text-slate-900">Nous trouver</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg border border-slate-200">
                  {/* TODO: remplacer les src des iframes par les URLs cartographiques réelles. */}
                  <iframe
                    title="Plan du Gymnase des Chênes à Cergy"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMA!5e0!3m2!1sfr!2sfr!4v0000000000000"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-64 w-full border-0"
                    allowFullScreen
                  />
                </div>
                <div className="overflow-hidden rounded-lg border border-slate-200">
                  <iframe
                    title="Plan du Gymnase de la Butte à Éragny"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMA!5e0!3m2!1sfr!2sfr!4v0000000000000"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-64 w-full border-0"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
