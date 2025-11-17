const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images/boxers');
const outputFileConfig = path.join(__dirname, '../config/images-metadata.json');
const outputFilePublic = path.join(__dirname, '../public/metadata.json');

// Lire tous les fichiers image-*.jpeg
const files = fs.readdirSync(imagesDir)
  .filter(file => file.startsWith('image-') && file.endsWith('.jpeg'))
  .sort((a, b) => {
    const numA = parseInt(a.match(/image-(\d+)/)[1]);
    const numB = parseInt(b.match(/image-(\d+)/)[1]);
    return numA - numB;
  });

// Générer les métadonnées pour chaque image
const images = files.map((filename, index) => {
  const imageNumber = filename.match(/image-(\d+)/)[1];
  const id = `img-${imageNumber.padStart(3, '0')}`;
  
  return {
    id: id,
    filename: filename,
    path: `/images/boxers/${filename}`,
    tags: ["club", "boxers"], // Tags par défaut - à personnaliser selon le contenu
    alt: `Photo du club RCB - Image ${imageNumber}`,
    description: `Photo de boxeurs du club Rahilou Cergy Boxe`
  };
});

// Créer l'objet final
const metadata = {
  images: images
};

// Écrire le fichier JSON dans les deux emplacements
fs.writeFileSync(outputFileConfig, JSON.stringify(metadata, null, 2), 'utf8');
fs.writeFileSync(outputFilePublic, JSON.stringify(metadata, null, 2), 'utf8');

console.log(`✅ Généré metadata.json avec ${images.length} images`);
console.log(`📁 Fichiers créés:`);
console.log(`   - ${outputFileConfig}`);
console.log(`   - ${outputFilePublic}`);

