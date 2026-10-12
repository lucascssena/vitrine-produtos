export default function Newsletter() {
  return (
    <section className="newsletter" aria-labelledby="news-title">
      <div className="container newsletter__inner">
        <div>
          <h2 id="news-title">Inscreva-se na nossa newsletter</h2>
          <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Digite seu nome" aria-label="Nome" />
          <input type="email" placeholder="Digite seu e-mail" aria-label="E-mail" />
          <button type="submit" className="btn btn--yellow">Inscrever</button>
          <label><input type="checkbox" /> Aceito os termos e condições</label>
        </form>
      </div>
    </section>
  );
}
