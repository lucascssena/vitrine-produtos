import { useEffect, useRef, useState } from 'react';
import type { Product } from '../types';
import { formatPrice } from '../utils';

interface Props { product: Product; onClose: () => void }

export default function ProductModal({ product, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [qty, setQty] = useState(0);

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} type="button" className="modal__close" aria-label="Fechar" onClick={onClose}>×</button>
        <img className="modal__img" src={product.photo} alt={product.name} />
        <div className="modal__body">
          <h2 id="modal-title">{product.name}</h2>
          <p className="modal__price">{formatPrice(product.price)}</p>
          <p className="modal__desc">{product.description}</p>
          <a href="#" className="modal__link">Veja mais detalhes do produto &gt;</a>
          <div className="modal__actions">
            <div className="qty" role="group" aria-label="Quantidade">
              <button type="button" aria-label="Diminuir" onClick={() => setQty((q) => Math.max(0, q - 1))}>−</button>
              <output>{qty}</output>
              <button type="button" aria-label="Aumentar" onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
            <button type="button" className="btn btn--yellow">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
