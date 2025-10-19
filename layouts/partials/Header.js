"use client";

import Logo from "@components/Logo";
import menu from "@config/menu.json";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import config from "../../config/config.json";
import { scrollToElement } from "@lib/utils/scrollToElement";

const Header = () => {
  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // logo source
  const { logo } = config.site;

  // Effect pour gérer le scroll du header
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Détecter si on a scrollé
          if (currentScrollY > 100) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }

          // Gérer la visibilité du header sur mobile uniquement
          if (window.innerWidth <= 768) {
            const scrollDifference = Math.abs(currentScrollY - lastScrollY);

            // Seuil minimum de scroll pour déclencher l'animation
            if (scrollDifference > 5) {
              if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scroll vers le bas - cacher le header
                setIsHeaderVisible(false);
              } else if (currentScrollY < lastScrollY) {
                // Scroll vers le haut - montrer le header
                setIsHeaderVisible(true);
              }
            }
          } else {
            // Sur desktop, toujours visible
            setIsHeaderVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleMenuClick = (e, url) => {
    e.preventDefault();
    setNavOpen(false);

    if (url.startsWith("#")) {
      // S'assurer que le header est visible avant de scroller
      setIsHeaderVisible(true);

      // Petit délai pour laisser le temps à l'animation de se terminer
      setTimeout(() => {
        scrollToElement(url);
      }, 350); // Légèrement plus long que la durée de l'animation (300ms)
    }
  };

  return (
    <header
      className={`header sticky top-0 z-50 bg-white shadow-md transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "shadow-lg" : "shadow-md"}`}
    >
      <nav className="navbar container flex items-center justify-between py-2 md:py-4">
        {/* logo */}
        <div className="order-0">
          <Logo src={logo} />
        </div>

        {/* navbar toggler */}
        <button
          id="show-button"
          className="order-2 flex cursor-pointer items-center md:hidden"
          onClick={() => {
            setNavOpen(!navOpen);
            // S'assurer que le header est visible quand on ouvre le menu
            if (!navOpen) {
              setIsHeaderVisible(true);
            }
          }}
        >
          {navOpen ? (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          )}
        </button>

        {/* Menu */}
        <div
          id="nav-menu"
          className={`order-3 md:order-1
    absolute top-full left-0 right-0 bg-white shadow-lg
    md:static md:bg-transparent md:shadow-none
    ${navOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"}
    md:max-h-none md:opacity-100 md:h-auto md:overflow-visible md:flex
    transition-[max-height,opacity] duration-300 overflow-hidden z-40`}
        >
          <ul className="navbar-nav block w-full md:flex md:w-auto md:items-center lg:space-x-1">
            {main.map((menuItem, i) => (
              <li className="nav-item" key={`menu-${i}`}>
                <a
                  href={menuItem.url}
                  onClick={(e) => handleMenuClick(e, menuItem.url)}
                  className="nav-link block px-4 py-3 transition hover:text-primary hover:bg-gray-50 md:hover:bg-transparent"
                >
                  {menuItem.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
