import SectionTitle from '../components/common/SectionTitle.jsx';

export default function About() {
  return (
    <section className="section about-section" id="univers">
      <div className="about-copy">
        <SectionTitle eyebrow="Univers">Élégance naturelle et savoir-faire</SectionTitle>
        <p>
          Africa Beauty accueille chaque cliente dans une atmosphère chaleureuse,
          sophistiquée et profondément attentive à la texture du cheveu.
        </p>
        <p>
          Chaque prestation est pensée comme un rituel : diagnostic, conseil,
          soin, geste précis et finition lumineuse.
        </p>
      </div>
      <div className="signature-panel">
        <span>Notre promesse</span>
        <strong>La beauté sublimée</strong>
        <small>Soin · Beauté · Authenticité</small>
      </div>
    </section>
  );
}
