"use client";

import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { scrollToElement } from "@lib/utils/scrollToElement";
import Image from "next/image";

const Footer = () => {
  const { footer } = menu;
  const footerColumns = footer.map((column) => ({
    ...column,
    menu: column.menu ?? [],
  }));

  // Générer le copyright avec l'année actuelle
  const currentYear = new Date().getFullYear();
  const copyright = `© ${currentYear} RCB95 - Rahilou Cergy Boxe. Tous droits réservés.`;

  const handleScroll = (e, url) => {
    e.preventDefault();
    if (url.startsWith("#")) {
      scrollToElement(url);
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Contenu principal */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src={config.site.logo}
                width={200}
                height={60}
                alt="RCB95 - Rahilou Cergy Boxe"
                className="h-16 w-auto"
              />
            </div>
            <p className="mb-6 text-sm text-slate-300 leading-relaxed">
              Boxe pour tous à Cergy :<br />
              initiation, loisir, compétition.
            </p>

            {/* Icônes sociales */}
            <div className="flex space-x-4">
              {social.facebook && (
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-primary hover:text-white"
                  aria-label="Facebook"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-primary hover:text-white"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.98-.49-.98-.98s.49-.98.98-.98.98.49.98.98-.49.98-.98.98z" />
                  </svg>
                </a>
              )}
              {social.email && (
                <a
                  href={`mailto:${social.email}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition hover:bg-primary hover:text-white"
                  aria-label="Email"
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
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Navigation</h3>
            <ul className="space-y-3">
              {footerColumns[0]?.menu.map((item) => (
                <li key={item.text}>
                  <a
                    href={item.url}
                    onClick={(e) => handleScroll(e, item.url)}
                    className="text-slate-300 transition hover:text-white hover:underline"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact rapide */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-slate-300">
              <div>
                <p className="font-medium text-white">Gymnase des Chênes</p>
                <p>Rue des Chênes Pourpres</p>
                <p>95000 Cergy</p>
              </div>
              <div>
                <p className="font-medium text-white">Horaires</p>
                <p>Lun-Ven: 10h-22h</p>
                <p>Sam: 10h-15h</p>
                <p>Dim: 11h-13h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-800 pt-8">
          <p className="text-center text-sm text-slate-400">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
