import Logo from './Logo';
import Icon from './Icon';
import { NAV } from '../data';

export default function Header() {
  return (
    <header className="header">
      <ul className="topbar">
        <li><Icon name="shield" size={16} /> Compra <strong>100% segura</strong></li>
        <li><Icon name="truck" size={16} /> <strong>Frete grátis</strong> acima de R$ 200</li>
        <li><Icon name="card" size={16} /> <strong>Parcele</strong> suas compras</li>
      </ul>
      <div className="container header__main">
        <a href="/" aria-label="Página inicial"><Logo /></a>
        <form role="search" className="search" onSubmit={(e) => e.preventDefault()}>
          <input type="search" placeholder="O que você está buscando?" aria-label="Buscar produtos" />
          <button type="submit" aria-label="Buscar"><Icon name="search" /></button>
        </form>
        <div className="header__icons">
          <button type="button" aria-label="Pedidos"><Icon name="box" /></button>
          <button type="button" aria-label="Favoritos"><Icon name="heart" /></button>
          <button type="button" aria-label="Minha conta"><Icon name="user" /></button>
          <button type="button" aria-label="Carrinho"><Icon name="cart" /></button>
        </div>
      </div>
      <nav aria-label="Categorias" className="container nav">
        <ul>
          {NAV.map((n) => (
            <li key={n} className={n === 'Ofertas do dia' ? 'is-highlight' : undefined}>
              <a href="#">{n === 'Assinatura' && <Icon name="crown" size={16} />} {n}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
