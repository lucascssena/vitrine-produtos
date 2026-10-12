import type { Product } from '../types';

const API_URL =
  (import.meta.env.VITE_PRODUCTS_URL as string | undefined) ||
  'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';
const LOCAL_FALLBACK = '/products.json'; // cópia local, usada se a API estiver indisponível

interface RawProduct {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
  oldPrice?: number;
}

/** Ajuste apenas este mapper caso o JSON tenha outro formato. */
export function mapProducts(raw: { products?: RawProduct[] }): Product[] {
  return (raw.products ?? []).map((p, i) => ({
    id: String(i),
    name: p.productName,
    description: p.descriptionShort,
    photo: p.photo,
    price: p.price / 100, // a API devolve o valor em centavos
    oldPrice: p.oldPrice,
  }));
}

async function request(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Falha ao carregar produtos (${res.status})`);
  return mapProducts(await res.json());
}

export async function fetchProducts(): Promise<Product[]> {
  try {
    return await request(API_URL);
  } catch {
    return request(LOCAL_FALLBACK);
  }
}
