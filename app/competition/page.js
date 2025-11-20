import { generateSeoMetadata } from "@lib/utils/seo";
import CompetitionClient from "./CompetitionClient";

export async function generateMetadata() {
  return generateSeoMetadata({
    title: "Boxe Amateur & Compétition",
    description:
      "Section compétition du RCB95 - Rahilou Cergy Boxe. Boxe amateur pour accéder au haut niveau. Entraînement rigoureux, préparation physique et mentale avec nos entraîneurs diplômés.",
    keywords: [
      "boxe compétition",
      "boxe amateur",
      "haut niveau boxe",
      "compétition boxe Cergy",
      "entraînement compétition",
      "résultats boxe",
      "combats boxe",
    ],
    path: "/competition",
  });
}

export default function CompetitionPage() {
  return <CompetitionClient />;
}
