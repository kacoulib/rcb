const faqs = [
  {
    question: "À partir de quel âge peut-on s'inscrire ?",
    answer:
      "Dès 9 ans pour la Boxe Éducative Assaut (BEA). Adultes dès 16 ans.",
  },
  {
    question: "L'assurance est-elle incluse ?",
    answer:
      "Oui, la licence FFBoxe inclut l'assurance obligatoire pour toutes les activités.",
  },
  {
    question: "Peut-on faire un essai gratuit ?",
    answer:
      "Absolument ! Séance d'essai gratuite sans engagement. Venez avec une tenue de sport.",
  },
];

const FaqSection = () => {
  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold text-dark sm:text-4xl">
            Questions fréquentes
          </h2>
        </div>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white p-6 shadow-sm border-l-4 border-primary"
            >
              <h3 className="text-lg font-semibold text-dark mb-2">
                {faq.question}
              </h3>
              <p className="text-slate-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
