import { generateSeoMetadata } from "@lib/utils/seo";

export async function generateMetadata() {
  return generateSeoMetadata({
    title: "Planning & Tarifs",
    description:
      "Consultez le planning des cours et les tarifs du RCB95 - Rahilou Cergy Boxe. Horaires des séances pour tous les niveaux : enfants, adultes, loisir et compétition.",
    keywords: [
      "planning boxe",
      "tarifs boxe",
      "horaires cours boxe",
      "prix inscription boxe",
      "cours boxe Cergy",
      "tarifs club boxe",
    ],
    path: "/infos",
  });
}

const InfosPage = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="mb-6 text-4xl font-bold">Planning & Tarifs</h1>
        <p className="text-lg text-slate-600">
          Créneaux et tarifs à venir. Contenu à compléter.
        </p>
      </div>
    </section>
  );
};

export default InfosPage;
