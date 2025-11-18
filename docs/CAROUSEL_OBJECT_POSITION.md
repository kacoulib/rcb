# Guide : Positionnement des images dans le carousel

## Comment utiliser `objectPosition` dans le metadata

Vous pouvez spécifier le positionnement de chaque image individuellement dans le fichier `config/images-metadata.json` en ajoutant le champ `objectPosition`.

### Valeurs possibles

- `"center top"` - Centre horizontalement, aligne en haut (idéal pour les images avec sujet en haut)
- `"center center"` - Centre horizontalement et verticalement (par défaut)
- `"center bottom"` - Centre horizontalement, aligne en bas (idéal pour les images avec sujet en bas)
- `"left top"`, `"right top"`, `"left center"`, `"right center"`, `"left bottom"`, `"right bottom"` - Autres positions

### Exemple dans metadata.json

```json
{
  "id": "img-001",
  "filename": "image-1.jpeg",
  "path": "/images/boxers/image-1.jpeg",
  "tags": ["hero", "carousel"],
  "alt": "Photo du club RCB - Image 1",
  "description": "Photo de boxeurs du club Rahilou Cergy Boxe",
  "objectPosition": "center top"
}
```

### Comportement

- Si `objectPosition` est spécifié dans le metadata, cette valeur sera utilisée pour cette image
- Si `objectPosition` n'est pas spécifié, la valeur par défaut du composant Carousel sera utilisée (`"center center"` par défaut, ou celle passée en prop)

### Recommandations

- **Images avec sujet en haut** (portraits, visages) : `"center top"`
- **Images avec sujet centré** (groupes, scènes) : `"center center"`
- **Images avec sujet en bas** (trophées, podiums) : `"center bottom"`

