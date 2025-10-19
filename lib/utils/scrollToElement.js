/**
 * Fait défiler vers un élément en tenant compte de la hauteur du header fixe
 * @param {string} selector - Sélecteur CSS de l'élément cible
 */
export const scrollToElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    const header = document.querySelector(".header");
    let headerHeight = 90; // Hauteur par défaut

    if (header) {
      // Vérifier si le header est visible (pas masqué par l'animation)
      const headerStyle = window.getComputedStyle(header);
      const transform = headerStyle.transform;
      const isMobile = window.innerWidth <= 768;

      // Sur mobile, vérifier si le header est masqué
      if (
        isMobile &&
        transform &&
        transform.includes("translateY") &&
        transform.includes("-")
      ) {
        headerHeight = 0;
      } else {
        headerHeight = header.offsetHeight;
      }
    }

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    // Mettre à jour l'URL avec l'ancre
    const hash = selector.startsWith("#") ? selector : `#${selector}`;
    window.history.pushState(null, null, hash);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

/**
 * Gère le scroll automatique vers une ancre au chargement de la page
 */
export const handleInitialScroll = () => {
  // Attendre que le DOM soit chargé
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      handleScrollFromHash();
    });
  } else {
    handleScrollFromHash();
  }
};

/**
 * Fait défiler vers l'ancre présente dans l'URL
 */
const handleScrollFromHash = () => {
  const hash = window.location.hash;
  if (hash) {
    // Petit délai pour s'assurer que tous les composants sont montés
    setTimeout(() => {
      scrollToElement(hash);
    }, 100);
  }
};
