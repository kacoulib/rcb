import { generateSeoMetadata } from "@lib/utils/seo";
import EnfantClient from "./EnfantClient";

export async function generateMetadata() {
  return generateSeoMetadata({
    title: "Boxe Éducative Assaut (BEA) - Enfants",
    description:
      "Boxe éducative assaut pour enfants au RCB95 - Rahilou Cergy Boxe. Pratique sécurisée et ludique pour développer la motricité, la confiance en soi et le respect. Cours adaptés par tranches d'âge de 6 à 15 ans.",
    keywords: [
      "boxe enfants",
      "boxe éducative",
      "BEA boxe",
      "boxe jeunes",
      "initiation boxe enfants",
      "cours boxe enfants Cergy",
      "boxe poussins",
      "boxe benjamins",
    ],
    path: "/enfant",
  });
}

export default function EnfantPage() {
  return <EnfantClient />;
}
