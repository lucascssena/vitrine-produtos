import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { mapProducts } from '../services/products';

const product = { id: '0', name: 'Produto X', description: 'Descrição X', photo: 'x.png', price: 10 };

test('card dispara onSelect ao clicar em "Comprar"', async () => {
  const onSelect = vi.fn();
  render(<ProductCard product={product} onSelect={onSelect} />);
  await userEvent.click(screen.getByRole('button', { name: /comprar/i }));
  expect(onSelect).toHaveBeenCalledWith(product);
});

test('modal exibe dados do produto e fecha com Esc', async () => {
  const onClose = vi.fn();
  render(<ProductModal product={product} onClose={onClose} />);
  expect(screen.getByRole('dialog', { name: 'Produto X' })).toBeInTheDocument();
  await userEvent.keyboard('{Escape}');
  expect(onClose).toHaveBeenCalled();
});

test('mapProducts converte o JSON bruto', () => {
  const [p] = mapProducts({ products: [{ productName: 'A', descriptionShort: 'B', photo: 'c', price: 1 }] });
  expect(p.name).toBe('A');
  expect(p.price).toBe(0.01);
});
