import { useRef, type ReactNode } from 'react';

export default function Carousel({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLUListElement>(null);
  const scroll = (dir: number) =>
    ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: 'smooth' });

  return (
    <div className="carousel" role="region" aria-label={label}>
      <button type="button" className="carousel__arrow" aria-label="Anterior" onClick={() => scroll(-1)}>‹</button>
      <ul className="carousel__track" ref={ref}>{children}</ul>
      <button type="button" className="carousel__arrow" aria-label="Próximo" onClick={() => scroll(1)}>›</button>
    </div>
  );
}
