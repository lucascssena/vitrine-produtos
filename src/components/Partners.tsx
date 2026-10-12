export default function Partners() {
  return (
    <section className="container partners" aria-label="Parceiros">
      {[1, 2].map((n) => (
        <article key={n} className="partners__item">
          <h2>Parceiros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <a href="#" className="btn btn--yellow">Confira</a>
        </article>
      ))}
    </section>
  );
}
