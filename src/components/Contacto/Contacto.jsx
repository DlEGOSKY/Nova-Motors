import { useState } from 'react';
import './Contacto.css';

const MODELS = ['Nova GT-R', 'Nova Phantom S', 'Nova Apex X', 'Nova Titan', 'Nova Spectre', 'Nova Electron'];

export default function Contacto() {
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contacto" className="sec sec-alt">
      <div className="sec-hdr reveal up">
        <div className="sec-bar" />
        <div className="sec-title">CONTACTO</div>
      </div>

      <div className="contact-layout">
        <div className="reveal left">
          <div className="cf-group">
            <label className="cf-lbl">Nombre completo</label>
            <input className="cf-in" placeholder="Tu nombre..." />
          </div>
          <div className="cf-group">
            <label className="cf-lbl">Correo electrónico</label>
            <input className="cf-in" type="email" placeholder="tu@correo.com" />
          </div>
          <div className="cf-group">
            <label className="cf-lbl">Modelo de interés</label>
            <select className="cf-in" style={{ cursor: 'pointer' }}>
              <option value="">Seleccionar...</option>
              {MODELS.map((m) => <option key={m}>{m}</option>)}
            </select>
          </div>
          <div className="cf-group">
            <label className="cf-lbl">Mensaje</label>
            <textarea className="cf-in" placeholder="¿En qué podemos ayudarte?" />
          </div>
          <button className="btn-submit" onClick={handleSend}>
            <i className="ti ti-send" style={{ marginRight: 6 }} aria-hidden="true" />
            Enviar mensaje
          </button>
          {sent && <div className="ok-msg">Mensaje enviado. Te contactaremos pronto.</div>}
        </div>

        <div className="ci-cards reveal right">
          <div className="ci-card">
            <div className="ci-icon"><i className="ti ti-map-pin" aria-hidden="true" /></div>
            <div>
              <div className="ci-title">Ubicación</div>
              <div className="ci-v">San Salvador, El Salvador</div>
            </div>
          </div>
          <div className="ci-card">
            <div className="ci-icon"><i className="ti ti-mail" aria-hidden="true" /></div>
            <div>
              <div className="ci-title">Correo</div>
              <div className="ci-v">contacto@novamotors.sv</div>
            </div>
          </div>
          <div className="ci-card">
            <div className="ci-icon"><i className="ti ti-phone" aria-hidden="true" /></div>
            <div>
              <div className="ci-title">Teléfono</div>
              <div className="ci-v">+503 2200-0000</div>
            </div>
          </div>
          <div className="ci-card">
            <div className="ci-icon"><i className="ti ti-brand-instagram" aria-hidden="true" /></div>
            <div>
              <div className="ci-title" style={{ marginBottom: 8 }}>Redes sociales</div>
              <div className="socials">
                <div className="sbtn" title="Instagram"><i className="ti ti-brand-instagram" aria-hidden="true" /></div>
                <div className="sbtn" title="X"><i className="ti ti-brand-x" aria-hidden="true" /></div>
                <div className="sbtn" title="LinkedIn"><i className="ti ti-brand-linkedin" aria-hidden="true" /></div>
                <div className="sbtn" title="YouTube"><i className="ti ti-brand-youtube" aria-hidden="true" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
