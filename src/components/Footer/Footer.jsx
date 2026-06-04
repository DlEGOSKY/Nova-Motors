import './Footer.css';

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="flogo">NOVA MOTORS</div>
          <div className="ftag">El futuro del automovilismo de lujo.<br />Visualiza, configura y experimenta.</div>
        </div>
        <div>
          <div className="fcol-t">Modelos</div>
          <a className="flink" onClick={() => scrollTo('catalogo')}>Nova GT-R</a>
          <a className="flink" onClick={() => scrollTo('catalogo')}>Nova Phantom S</a>
          <a className="flink" onClick={() => scrollTo('catalogo')}>Nova Apex X</a>
          <a className="flink" onClick={() => scrollTo('catalogo')}>Nova Titan</a>
        </div>
        <div>
          <div className="fcol-t">Plataforma</div>
          <a className="flink" onClick={() => scrollTo('configurador')}>Configurador 3D</a>
          <a className="flink" onClick={() => scrollTo('catalogo')}>Catálogo</a>
          <a className="flink" onClick={() => scrollTo('nosotros')}>Sobre nosotros</a>
          <a className="flink" onClick={() => scrollTo('contacto')}>Contacto</a>
        </div>
        <div>
          <div className="fcol-t">Tecnología</div>
          <a className="flink">React 18</a>
          <a className="flink">A-Frame.js 1.5</a>
          <a className="flink">WebXR W3C</a>
          <a className="flink">Vite 5</a>
        </div>
      </div>
      <div className="fbottom">
        <span>© 2026 Nova Motors — Ingeniería en Desarrollo de Software</span>
        <div className="fsoc">
          <div className="sbtn" style={{ width: 28, height: 28, fontSize: 12 }}><i className="ti ti-brand-instagram" aria-hidden="true" /></div>
          <div className="sbtn" style={{ width: 28, height: 28, fontSize: 12 }}><i className="ti ti-brand-x" aria-hidden="true" /></div>
          <div className="sbtn" style={{ width: 28, height: 28, fontSize: 12 }}><i className="ti ti-brand-linkedin" aria-hidden="true" /></div>
        </div>
      </div>
    </footer>
  );
}
