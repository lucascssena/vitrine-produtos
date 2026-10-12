import type { Product } from '../types';
import { formatPrice } from '../utils';

interface Props { product: Product; onSelect: (p: Product) => void }

export default function ProductCard({ product, onSelect }: Props) {
  return (
    <article className="card">
      <img className="card__img" src={product.photo} alt={product.name} loading="lazy" />
      <h3 className="card__title">{product.description}</h3>
      {product.oldPrice && <del className="card__old">{formatPrice(product.oldPrice)}</del>}
      <p className="card__price">{formatPrice(product.price)}</p>
      <p className="card__installments">ou 2x de {formatPrice(product.price / 2)} sem juros</p>
      <p className="card__shipping">Frete grátis</p>
      <button type="button" className="btn btn--primary" onClick={() => onSelect(product)}>Comprar</button>
    </article>
  );
}
