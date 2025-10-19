const testimonials = [
  {
    name: "Sophie M.",
    type: "Boxe Loisir",
    text: "Ambiance top, coachs super motivants ! En 3 mois j'ai retrouvé confiance en moi.",
  },
  {
    name: "Karim D.",
    type: "MMA",
    text: "Club sérieux avec du bon matos. Parfait pour progresser techniquement.",
  },
  {
    name: "Sarah & Luna",
    type: "Only Girls",
    text: "Ma fille adore les séances du samedi. Enfin un cours 100% filles !",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold text-dark sm:text-4xl">
            Ils en parlent mieux que nous
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white p-6 shadow-md border-l-4 border-primary"
            >
              <div className="mb-3 flex items-center gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-700 italic mb-4">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="border-t border-slate-200 pt-3">
                <p className="font-semibold text-dark">{testimonial.name}</p>
                <p className="text-sm text-slate-600">{testimonial.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
