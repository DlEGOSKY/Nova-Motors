import { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';
import './Navbar.css';

const LINKS = [
  { id: 'inicio',    label: 'INICIO' },
  { id: 'catalogo',  label: 'CATÁLOGO' },
  { id: 'nosotros',  label: 'NOSOTROS' },
  { id: 'contacto',  label: 'CONTACTO' },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const { favs, toggleFavPanel } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['inicio', 'catalogo', 'configurador', 'nosotros', 'contacto'];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id;
            setActiveSection(id === 'configurador' ? 'catalogo' : id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : 'top'}`}>
      <div className="logo" onClick={() => scrollTo('inicio')}>NOVA MOTORS</div>
      <div className="nav-links">
        {LINKS.map((l) => (
          <button
            key={l.id}
            className={`nb${activeSection === l.id ? ' on' : ''}`}
            onClick={() => scrollTo(l.id)}
          >
            {l.label}
          </button>
        ))}
        <button className="nb fav-nb" onClick={toggleFavPanel} aria-label="Favoritos">
          <i className="ti ti-heart" aria-hidden="true" />
          <span className="fav-dot">{favs.size}</span>
        </button>
      </div>
    </nav>
  );
}
