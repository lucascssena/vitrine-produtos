import Logo from './Logo';

export default function Brands() {
  return (
    <section className="container" aria-labelledby="brands-title">
      <h2 id="brands-title" className="section-title">Navegue por marcas</h2>
      <ul className="brands">
        {[1, 2, 3, 4, 5].map((n) => <li key={n} className="brands__item"><Logo /></li>)}
      </ul>
    </section>
  );
}
