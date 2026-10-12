# Vitrine de Produtos

Teste técnico Front-End (Econverse) feito com React, TypeScript e Sass, sem bibliotecas de UI.

## Funcionalidades
- Página inicial com header, banner, categorias, vitrines de produtos em carrossel, parceiros, marcas, newsletter e rodapé.
- Vitrine de produtos consumindo a API de produtos (JSON).
- Modal com as informações do produto clicado, com seletor de quantidade.
- HTML semântico, boas práticas de SEO e acessibilidade (modal com foco inicial e fechamento por Esc).

## Tecnologias
- React 18 + TypeScript
- Vite
- Sass (SCSS)
- Vitest + Testing Library

## Pré-requisitos
- Node.js 18 ou superior
- npm

## Como clonar e instalar
```bash
git clone https://github.com/lucascssena/vitrine-produtos.git
cd vitrine-produtos
npm install
```

## Como rodar em desenvolvimento
```bash
npm run dev
```
Acesse http://localhost:5173.

## Como compilar para produção
```bash
npm run build
npm run preview
```

## Como executar os testes
```bash
npm test
```

## Dados
Os produtos vêm de:
`https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`

- Os preços chegam em centavos e são convertidos em `src/services/products.ts`.
- Se a API estiver fora do ar, o app usa a cópia local em `public/products.json`.
- Para trocar a URL, copie `.env.example` para `.env` e preencha `VITE_PRODUCTS_URL`.

## Estrutura do projeto
```
src/
  components/   Header, Hero, Categories, ProductSection, ProductCard,
                ProductModal, Carousel, Partners, Brands, Newsletter, Footer, Icon
  hooks/        useProducts (carregamento, erro e dados)
  services/     acesso à API e mapeamento do JSON
  styles/       Sass (variáveis, mixins e blocos no padrão BEM)
  test/         testes automatizados
public/         imagens (banner, parceiros) e cópia local do JSON
```

## Decisões técnicas
- **Componentização:** cada seção da página é um componente, e a lógica de dados fica separada da interface (hook + serviço).
- **Semântica e SEO:** `header`, `nav`, `main`, `section`, `article`, `footer`, `lang="pt-BR"`, título, meta description e Open Graph.
- **Acessibilidade:** `role="dialog"` com `aria-modal`, botões com `aria-label` e foco visível.
- **Estilos:** Sass escrito do zero, com variáveis de cor e breakpoints, responsivo.

## Observações
Banner, imagens de parceiros e ícones foram extraídos de capturas do layout do Figma.