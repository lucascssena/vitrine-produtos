import { useState } from 'react';
import { CATEGORIES } from '../data';
import Icon from './Icon';

export default function Categories() {
  const [active, setActive] = useState(0);
  return (
    <section aria-label="Categorias em destaque" className="container">
      <ul className="categories">
        {CATEGORIES.map((c, i) => (
          <li key={c.name}>
            <button type="button" className={`categories__btn${i === active ? ' is-active' : ''}`}
              aria-pressed={i === active} onClick={() => setActive(i)}>
              <span className="categories__icon"><Icon name={c.icon} size={56} /></span>
              <span className="categories__name">{c.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
