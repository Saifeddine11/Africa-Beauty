import { services } from '../data/siteContent.js';
import SectionTitle from '../components/common/SectionTitle.jsx';

export default function Services() {
  return (
    <section className="section" id="prestations">
      <SectionTitle eyebrow="Prestations">Une expertise complète du cheveu</SectionTitle>
      <div className="services-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
