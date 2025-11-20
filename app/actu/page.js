import { generateSeoMetadata } from "@lib/utils/seo";

export async function generateMetadata() {
  return generateSeoMetadata({
    title: "Actualités",
    description:
      "Retrouvez les dernières actualités du RCB95 - Rahilou Cergy Boxe. Nouvelles du club, événements, résultats de compétitions et informations importantes pour tous les membres.",
    keywords: [
      "actualités boxe",
      "nouvelles RCB95",
      "événements club boxe",
      "résultats compétition",
      "news boxe Cergy",
    ],
    path: "/actu",
  });
}

const ActuPage = () => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="mb-6 text-4xl font-bold">Actualités</h1>
        <p className="text-lg text-slate-600">
          Retrouvez les dernières nouvelles du club. Contenu à compléter.
        </p>
      </div>
    </section>
  );
};

export default ActuPage;
