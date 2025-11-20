import config from "@config/config.json";
import { generateSeoMetadata } from "@lib/utils/seo";
import HomeClient from "./HomeClient";

export async function generateMetadata() {
  return generateSeoMetadata({
    title: config.site.title,
    description:
      "RCB95 - Rahilou Cergy Boxe. Club de boxe anglaise à Cergy et Éragny. Boxe éducative, loisir et compétition pour tous niveaux. Rejoignez-nous pour découvrir la boxe dans un cadre bienveillant et professionnel.",
    keywords: [
      "boxe anglaise",
      "club de boxe Cergy",
      "boxe Éragny",
      "boxe éducative",
      "boxe loisir",
      "boxe compétition",
      "initiation boxe",
      "entraînement boxe",
    ],
    path: "/",
  });
}

export default function Home() {
  return <HomeClient />;
}
