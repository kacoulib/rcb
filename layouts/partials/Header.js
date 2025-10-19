"use client";

import Logo from "@components/Logo";
import menu from "@config/menu.json";
import Link from "next/link";
import React, { useState } from "react";
import config from "../../config/config.json";
import { scrollToElement } from "@lib/utils/scrollToElement";

const Header = () => {
  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [navOpen, setNavOpen] = useState(false);

  // logo source
  const { logo } = config.site;

  const handleScroll = (e, url) => {
    e.preventDefault();
    setNavOpen(false);

    if (url.startsWith("#")) {
      scrollToElement(url);
    }
  };

  return (
    <header className="header sticky top-0 z-50 bg-white shadow-md">
      <nav className="navbar container flex items-center justify-between py-4">
        {/* logo */}
        <div className="order-0">
          <Logo src={logo} />
        </div>

        {/* navbar toggler */}
        <button
          id="show-button"
          className="order-2 flex cursor-pointer items-center md:hidden"
          onClick={() => setNavOpen(!navOpen)}
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
          className={`order-3 md:order-1 absolute top-full left-0 right-0 bg-white shadow-lg md:relative md:shadow-none ${
            navOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          } transition-all duration-300 overflow-hidden z-40`}
        >
          <ul className="navbar-nav block w-full md:flex md:w-auto md:items-center lg:space-x-1">
            {main.map((menuItem, i) => (
              <li className="nav-item" key={`menu-${i}`}>
                <a
                  href={menuItem.url}
                  onClick={(e) => {
                    handleScroll(e, menuItem.url);
                    setNavOpen(false);
                  }}
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
