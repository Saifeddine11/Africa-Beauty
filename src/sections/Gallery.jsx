import { galleryItems } from '../data/siteContent.js';
import SectionTitle from '../components/common/SectionTitle.jsx';

export default function Gallery() {
  return (
    <section className="section">
      <SectionTitle eyebrow="Ambiance">Inspiration de marque</SectionTitle>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article className={`gallery-item ${item.type}`} key={item.title}>
            <span>{item.label}</span>
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
