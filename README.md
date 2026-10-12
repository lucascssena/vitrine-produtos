# Vitrine de Produtos

Teste técnico Front-End — React + TypeScript + Sass (sem bibliotecas de UI).

## Pré-requisitos
- Node.js 18+ e npm

## Clonar e instalar
```bash
git clone <URL_DO_SEU_FORK>
cd vitrine-produtos
npm install
cp .env.example .env   # opcional: defina VITE_PRODUCTS_URL; sem isso, usa public/products.json
```

## Ambiente de desenvolvimento
```bash
npm run dev
```
Acesse http://localhost:5173.

## Build de produção
```bash
npm run build
npm run preview
```

## Testes
```bash
npm test
```

## Estrutura
```
src/
  components/  ProductCard, ProductModal
  hooks/       useProducts (estado de carregamento/erro)
  services/    acesso e mapeamento do JSON
  styles/      Sass (tokens, mixins, blocos BEM)
  test/        testes (Vitest + Testing Library)
```

## Decisões
- HTML5 semântico (`header`, `main`, `section`, `article`, `footer`), `lang="pt-BR"`, meta description e Open Graph.
- Modal acessível: `role="dialog"`, `aria-modal`, foco inicial, fechamento por Esc/overlay.
- Mapeamento do JSON isolado em `services/products.ts`.
