import { navItems } from '../../data/siteContent.js';

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand-mark" href="#accueil" aria-label="Africa Beauty accueil">
        <span>Africa Beauty</span>
        <small>Salon de Coiffure</small>
      </a>
      <nav className="main-nav" aria-label="Navigation principale">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
