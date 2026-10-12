import { useState } from 'react';
import type { Product } from './types';
import { useProducts } from './hooks/useProducts';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductSection from './components/ProductSection';
import Partners from './components/Partners';
import Brands from './components/Brands';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';

export default function App() {
  const { products, loading, error } = useProducts();
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        {loading && <p role="status" className="container">Carregando produtos…</p>}
        {error && <p role="alert" className="container">{error}</p>}
        <ProductSection id="produtos" products={products} onSelect={setSelected} withTabs />
        <Partners />
        <ProductSection id="relacionados" products={products} onSelect={setSelected} />
        <Partners />
        <Brands />
        <ProductSection id="mais" products={products} onSelect={setSelected} />
      </main>
      <Newsletter />
      <Footer />
      {selected && <ProductModal product={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
