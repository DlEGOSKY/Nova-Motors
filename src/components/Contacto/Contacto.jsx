import { useState } from 'react';
import './Contacto.css';

const MODELS = ['Nova GT-R', 'Nova Phantom S', 'Nova Apex X', 'Nova Titan', 'Nova Spectre', 'Nova Electron'];

export default function Contacto() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    model: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const validateForm = () => {
    if (!form.name.trim()) return 'Por favor ingresa tu nombre';
    if (!form.email.trim()) return 'Por favor ingresa tu correo';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Correo inválido';
    if (!form.model) return 'Por favor selecciona un modelo';
    if (!form.message.trim()) return 'Por favor ingresa un mensaje';
    return '';
  };

  const handleSend = async () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/xyzpqwer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          model: form.model,
          message: form.message
        })
      });

      if (response.ok) {
        setSent(true);
        setForm({ name: '', email: '', model: '', message: '' });
        setTimeout(() => setSent(false), 4000);
      } else {
        setError('Error al enviar. Intenta de nuevo.');
      }
    } catch (err) {
      setError('Error de conexión. Intenta de nuevo.');
    } finally {
      setLoading(false);
    }
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
            <input 
              className="cf-in" 
              placeholder="Tu nombre..." 
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="cf-group">
            <label className="cf-lbl">Correo electrónico</label>
            <input 
              className="cf-in" 
              type="email" 
              placeholder="tu@correo.com" 
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="cf-group">
            <label className="cf-lbl">Modelo de interés</label>
            <select 
              className="cf-in" 
              style={{ cursor: 'pointer' }}
              name="model"
              value={form.model}
              onChange={handleChange}
            >
              <option value="">Seleccionar...</option>
              {MODELS.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
          <div className="cf-group">
            <label className="cf-lbl">Mensaje</label>
            <textarea 
              className="cf-in" 
              placeholder="¿En qué podemos ayudarte?" 
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button 
            className="btn-submit" 
            onClick={handleSend}
            disabled={loading}
          >
            <i className="ti ti-send" style={{ marginRight: 6 }} aria-hidden="true" />
            {loading ? 'Enviando...' : 'Enviar mensaje'}
          </button>
          {error && <div style={{ color: '#FF6B6B', marginTop: 12, fontSize: 14 }}>{error}</div>}
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
