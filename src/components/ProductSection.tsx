import { useState } from 'react';
import type { Product } from '../types';
import { TABS } from '../data';
import Carousel from './Carousel';
import ProductCard from './ProductCard';

interface Props { id?: string; products: Product[]; onSelect: (p: Product) => void; withTabs?: boolean }

export default function ProductSection({ id, products, onSelect, withTabs }: Props) {
  const [tab, setTab] = useState(0);
  const titleId = `${id ?? 'sec'}-title`;
  return (
    <section id={id} className="container products" aria-labelledby={titleId}>
      <h2 id={titleId} className="section-title">Produtos relacionados</h2>
      {withTabs ? (
        <div role="tablist" className="tabs">
          {TABS.map((t, i) => (
            <button key={t} role="tab" type="button" aria-selected={i === tab}
              className={`tabs__tab${i === tab ? ' is-active' : ''}`} onClick={() => setTab(i)}>
              {t}
            </button>
          ))}
        </div>
      ) : (
        <a href="#" className="products__all">Ver todos</a>
      )}
      <Carousel label="Produtos">
        {products.map((p) => (
          <li key={p.id}><ProductCard product={p} onSelect={onSelect} /></li>
        ))}
      </Carousel>
    </section>
  );
}
