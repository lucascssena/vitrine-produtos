import Logo from './Logo';

const COLS = [
  { title: 'Institucional', links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'] },
  { title: 'Ajuda', links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'] },
  { title: 'Termos', links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'] },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <Logo />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        {COLS.map((c) => (
          <nav key={c.title} aria-label={c.title}>
            <h3>{c.title}</h3>
            <ul>{c.links.map((l) => <li key={l}><a href="#">{l}</a></li>)}</ul>
          </nav>
        ))}
      </div>
      <p className="footer__copy"><small>Lorem ipsum dolor sit amet, consectetur.</small></p>
    </footer>
  );
}
