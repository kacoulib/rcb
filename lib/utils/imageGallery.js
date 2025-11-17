import imageMetadata from "@config/images-metadata.json";

/**
 * Récupère les images filtrées par tags
 * @param {string[]} tags - Tags à rechercher (ex: ['girls', 'competition'])
 * @param {number} limit - Nombre maximum d'images à retourner
 * @returns {Array} Images correspondantes
 */
export function getImagesByTags(tags = [], limit = null) {
  // Vérifier que imageMetadata est bien chargé
  if (!imageMetadata || !imageMetadata.images) {
    console.warn("imageMetadata n'est pas chargé correctement");
    return [];
  }

  let filtered = imageMetadata.images;

  if (tags.length > 0) {
    filtered = filtered.filter((img) =>
      tags.some((tag) => img.tags && img.tags.includes(tag)),
    );
  }

  if (limit) {
    filtered = filtered.slice(0, limit);
  }

  return filtered;
}

/**
 * Récupère les images pour un contexte spécifique
 * @param {string} context - Contexte (ex: 'competition', 'gala', 'enfant', 'hero')
 * @param {number} limit - Nombre maximum d'images
 * @returns {Array} Images correspondantes
 */
export function getImagesByContext(context, limit = null) {
  const contextTags = {
    hero: ["hero", "carousel", "featured"],
    competition: ["competition", "cup", "trophy", "combat"],
    gala: ["gala", "event", "celebration"],
    enfant: ["young", "kids", "children", "enfants"],
    girls: ["girls", "women", "femmes"],
    club: ["club", "training", "entrainement"],
    competitors: ["competitors", "competition", "combat"],
  };

  const tags = contextTags[context] || [context];
  return getImagesByTags(tags, limit);
}

/**
 * Récupère toutes les images
 * @param {number} limit - Nombre maximum d'images
 * @returns {Array} Toutes les images
 */
export function getAllImages(limit = null) {
  if (limit) {
    return imageMetadata.images.slice(0, limit);
  }
  return imageMetadata.images;
}

/**
 * Récupère une image par son ID
 * @param {string} id - ID de l'image (ex: 'img-001')
 * @returns {Object|null} Image correspondante ou null
 */
export function getImageById(id) {
  return imageMetadata.images.find((img) => img.id === id) || null;
}
