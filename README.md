# README — Rahilou Cergy Boxe (RCB)

Site informatif Next.js (préproduction Vercel)

---

## 📌 Présentation

**RCB** est un site vitrine informatif pour l’association **Rahilou Cergy Boxe**. Il s’appuie sur un template **Next.js + Tailwind CSS** (fork de Bigspring) pour permettre un **déploiement rapide** et des **modifications simples**.

* **Objectif** : présenter le club, ses valeurs, publier des actualités, afficher **planning & tarifs**, et faciliter le **contact**.
* **Hébergement** : **Vercel** (environnement de préproduction).
* **Langue** : Français (le template d’origine peut être en anglais).
* **Licence** : MIT (du template d’origine + contenu RCB).

---

## 🧱 Stack & Prérequis

* **Next.js** (App Router recommandé)
* **React 18+**
* **Tailwind CSS**
* **Node.js 18+** (ou 20+)
* Gestionnaire de packages au choix : **npm**, **pnpm** ou **yarn**

---

## 🗺️ Plan du site (≤ 5 pages)

* `/` **Accueil** — Hero, 3 cartes (Découverte/Entraînement/Compétition), bandeau **Nos lieux** (Cergy/Éragny), **Dernières actualités**
* `/club` **Le club** — Présentation, valeurs, encadrement (entraîneurs), mini‑galerie
* `/infos` **Planning & Tarifs** — 2 tableaux clairs et responsives
* `/actu` **Actualités** — Liste d’articles + pages détail
* `/contact` **Contact** — Formulaire (placeholder), adresses, réseaux, Google Maps

> ℹ️ Les pages supplémentaires (FAQ, Légales, Tarifs détaillés, etc.) peuvent exister dans le template mais **ne sont pas exposées** dans la navigation pour rester sous 5 pages.

---

## 🚀 Démarrage rapide

```bash
# 1) Cloner votre fork
git clone <url-de-votre-fork-rcb>
cd <repo>

# 2) Créer une branche de travail
git checkout -b feat/rcb-setup

# 3) Installer les dépendances
# (choisir l’un des gestionnaires)
npm i
# pnpm i
# yarn

# 4) Lancer en dev
npm run dev
# http://localhost:3000
```

---

## 🎨 Personnalisation (branding & thème)

### Couleurs RCB

Palette recommandée :

* **primary** : `#D90429` (rouge RCB)
* **dark** : `#111111` (noir profond)
* **white** : `#FFFFFF`

👉 Déclarer ces couleurs dans `tailwind.config.{js,ts}` (`theme.extend.colors`). Appliquer **`primary`** aux CTA, liens principaux et accents.

### Logo & favicon

* Placer les assets dans `public/` (ex. `public/rcb-logo.png`, `public/favicon.ico`).
* Mettre à jour l’import du logo dans le header/footer et les meta Open Graph.

### Typo & espacements

* Conserver les classes Tailwind existantes ; ajuster au besoin (`font-semibold`, `tracking-wide`, `leading-relaxed`, etc.).

---

## 🧭 Navigation & routes

Menu cible (ordre exact) :

1. **Accueil** → `/`
2. **Le club** → `/club`
3. **Infos** → `/infos`
4. **Actualités** → `/actu`
5. **Contact** → `/contact`

Le footer reprend les mêmes liens + mentions nécessaires.

---

## 🧩 Contenus à éditer

> Selon le template, le contenu peut se trouver dans des fichiers **MD/MDX**, **JSON/TS** ou directement dans des **composants**. Reportez‑vous aux chemins indiqués par l’audit de repo.

### Accueil (`/`)

* **Hero** : titre, sous‑titre, boutons → FR.
* **3 cartes** : Découverte / Entraînement / Compétition → 2‑3 phrases chacune.
* **Nos lieux** : Cergy, Éragny → adresses courtes / pictos localisation.
* **Dernières actualités** : afficher les 3 posts récents.

### Le club (`/club`)

* Paragraphe de présentation (≈150–200 mots).
* Encadrement (coach principal / assistants) avec photos placeholders.
* Galerie (3–6 images) avec `alt` FR.

### Infos (`/infos`)

* **Planning** (tableau) colonnes : Jour | Heure | Public | Lieu.
* **Tarifs** (tableau) colonnes : Licence | Catégorie | Prix.

### Actualités (`/actu`)

* Renommer **Blog** → **Actualités**.
* Créer 2–3 posts exemple (FR) :

  1. Rentrée sportive : séances d’essai gratuites cette semaine
  2. Gala RCB – merci aux bénévoles et aux partenaires !
  3. Nouveaux créneaux handi‑boxe : infos et inscriptions

### Contact (`/contact`)

* Formulaire placeholder (Nom, Email, Message) → action à brancher plus tard.
* Adresses : **Gymnase des Chênes (Cergy)**, **Gymnase de la Butte (Éragny)**.
* Réseaux : Instagram, Facebook → liens à insérer.
* Google Maps : 2 iframes (remplacer `src`).

---

## 🔎 SEO de base

* **Title par défaut** : `Rahilou Cergy Boxe – RCB`
* **Meta description** (FR, ~150–160 car.)
* **Open Graph / Twitter Cards** : titre, description, image OG (`/public/og.jpg`)
* **Sitemap** (`/sitemap.xml`) et **robots.txt**

> Vérifier que chaque page a un **H1 unique**, et que les images ont des **attributs alt** descriptifs.

---

## 🧪 Qualité & accessibilité

* **Contrastes** suffisants (CTA sur fond sombre, texte lisible en mode sombre).
* **Navigation clavier** OK, focus visible.
* **ARIA** sur icônes / boutons sans texte.
* **Lighthouse** : viser de bons scores Perf/SEO/A11y/Best‑Practices.

---

## 📦 Scripts utiles

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## ☁️ Déploiement Vercel (préprod)

1. Pousser le repo sur GitHub/GitLab/Bitbucket.
2. **Vercel → New Project → Import** le repo.
3. Framework auto‑détecté (Next.js) → **Build & Output** par défaut.
4. Variables d’env : **aucune requise pour l’instant** (formulaire = placeholder).
5. Choisir un nom de projet (ex. `rcb-preprod`).
6. (Optionnel) Ajouter un domaine : `preprod.rcb95000.com`.

> Chaque PR déclenche un **Preview Deployment** pour valider les changements avant merge.

---

## 🤝 Contribution & conventions

* **Commits** : Conventional Commits recommandé (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`).
* **Branches** : `feat/…`, `fix/…`, `docs/…`, etc.
* **PRs** : petites et ciblées (une feature par PR).

---

## 👥 Auteurs / Contact

* Équipe RCB — Communication / Web
* Email générique : `contact@rcb95000.com` (placeholder)

---

## 📄 Licence

Ce projet reprend un template open‑source sous **MIT**. Le contenu spécifique RCB est également sous **MIT**, sauf mention contraire.

---

# AGENT.md — Guide pour l’IA (Codex/Cursor/Copilot)

> **But** : automatiser l’adaptation du template au contexte RCB avec des modifications sûres, traçables et faciles à relire.

## 🎯 Objectifs

* Site informatif **≤ 5 pages** (Accueil, Le club, Infos, Actualités, Contact).
* **FR intégral** (UI + contenus), **thème RCB** (rouge/noir/blanc), **Vercel‑ready**.
* Code propre, a11y/SEO soignés, commits atomiques et lisibles.

## 🧭 Règles d’or (IMPORTANT)

1. **Ne pas inventer** de fichiers/chemins. **Scanner d’abord** l’arborescence et **citer les chemins exacts**.
2. Toujours fournir soit un **diff** précis, soit le **fichier complet** (si plus simple/plus court).
3. **Un prompt = un commit** (proposer le message de commit → Conventional Commits).
4. Réutiliser **Tailwind** et composants existants ; éviter de multiplier les dépendances.
5. Respecter **l’accessibilité** (alts, labels, focus, contrastes) et **le SEO** (H1 unique, metas).

## 📋 Backlog des tâches (ordre recommandé)

1. **Audit du repo** → lister fichiers clés (layout, nav, footer, pages, config, contenu) + App vs Pages Router.
2. **Navigation FR** → Accueil `/`, Le club `/club`, Infos `/infos`, Actualités `/actu`, Contact `/contact`; MAJ footer; créer pages si manquantes.
3. **Thème RCB** → `tailwind.config` (colors.primary `#D90429`, dark `#111111`), appliquer aux CTA/accents; vérifier mode sombre.
4. **Accueil** → Hero + 3 cartes + “Nos lieux” (Cergy/Éragny) + 3 actualités récentes (mock).
5. **Le club** → présentation (150–200 mots), encadrement (coach/assistants), mini‑galerie.
6. **Infos** → tableaux **Planning** (Jour/Heure/Public/Lieu) et **Tarifs** (Licence/Catégorie/Prix).
7. **Actualités** → renommer blog en “Actualités”, conserver liste + détail; créer 3 posts FR exemples.
8. **Contact** → formulaire placeholder (Nom/Email/Message), adresses (Chênes/Butte), réseaux (Instagram/Facebook), 2 iframes Google Maps placeholders.
9. **SEO & assets** → title par défaut, meta description, OG, favicon/logo, sitemap & robots.
10. **Nettoyage & a11y** → retirer liens de pages non utilisées du menu; vérifier alts/labels/contrastes.
11. **README** → compléter sections (déploiement Vercel, où éditer contenus); scripts OK; `build` passe.
12. **Checklist finale** → tout en FR, nav OK, routes OK, thème appliqué, /actu opérationnel, tableaux responsives.

## 🧾 Spécifications de sortie attendue

* **Chemins exacts** pour chaque fichier modifié/ajouté.
* **Diffs** formatés (ou fichiers complets si plus lisibles).
* **Messages de commit** (Conventional Commits) proposés à chaque étape, par ex. :

  * `feat(nav): navigation FR + pages de base`
  * `style(theme): palette RCB + CTA`
  * `feat(home): hero + sections + dernières actu`
  * `feat(infos): tableaux planning & tarifs`
  * `feat(actu): blog → actualités + 3 posts FR`
  * `feat(contact): formulaire + adresses + maps`
  * `docs(readme): instructions Vercel + guide contenu`
  * `refactor: cleanup nav + a11y fixes`

## 🧑‍💻 Lignes directrices de code

* **Tailwind** : privilégier classes utilitaires, éviter CSS custom si possible.
* **Accessibilité** : `alt` descriptifs, `aria-label` pour icônes, rôle explicite si besoin, focus visible.
* **SEO** : un **H1** par page, titres hiérarchisés, metas complètes, liens descriptifs.
* **Performances** : `next/image` pour les images, éviter images lourdes, charger paresseux si nécessaire.
* **i18n minimal** : contenu FR en dur pour l’instant; pas d’infrastructure i18n requise.

## 🧩 Spécifs de pages (rappel)

* **Accueil** : Hero (titre/sous‑titre/2 CTA), 3 cartes, “Nos lieux” (Cergy/Éragny), bloc “Dernières actualités (3)”.
* **Le club** : texte 150–200 mots, encadrement (cartes membres), 3–6 images.
* **Infos** : 2 tableaux responsives.
* **Actualités** : liste + détail; slugs FR OK.
* **Contact** : form placeholder, adresses, réseaux, 2 maps (iframes).

## ✅ Critères d’acceptation (checklist finale)

* [ ] Nav FR (ordre exact) + footer OK
* [ ] Thème **primary=#D90429**, sombre lisible
* [ ] Accueil complet avec 3 posts d’actu visibles
* [ ] Le club : texte FR, encadrement, galerie
* [ ] Infos : tableaux lisibles, responsive
* [ ] Actualités : index + détails, 3 posts exemples
* [ ] Contact : formulaire, adresses, réseaux, 2 iframes
* [ ] SEO : title, description, OG, favicon/logo
* [ ] A11y : alt/labels/contrastes/focus
* [ ] Build Next.js passe, déploiement Vercel prêt

---

**Utilisation** : Ouvrir ce fichier (`AGENT.md`) dans l’IDE et piloter l’IA **étape par étape**. Toujours exiger **chemins réels** + **diffs/fichiers complets** + **commit message** à chaque réponse.
