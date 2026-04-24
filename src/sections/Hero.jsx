export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-content">
        <p className="eyebrow">Marrakech · Maroc</p>
        <h1>Africa Beauty</h1>
        <p className="hero-subtitle">Salon de Coiffure</p>
        <p className="hero-text">
          L'art de la beauté africaine, entre soin expert, tresse, couleur et
          coupe sur mesure.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#contact">
            Réserver
          </a>
          <a className="btn btn-secondary" href="#prestations">
            Voir les prestations
          </a>
        </div>
      </div>
      <div className="hero-visual" aria-hidden="true">
        <div className="portrait-card">
          <span className="portrait-symbol">✦</span>
          <span className="portrait-line">Soin · Tresse · Couleur · Coupe</span>
        </div>
      </div>
    </section>
  );
}
