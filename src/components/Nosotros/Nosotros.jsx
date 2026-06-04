import { useEffect, useRef, useState } from 'react';
import './Nosotros.css';

const STATS = [
  { id: 'cnt1', from: 0, to: 48,  dur: 1200, suffix: '',  label: 'Modelos' },
  { id: 'cnt2', from: 0, to: 200, dur: 1400, suffix: '+', label: 'Configuraciones' },
  { value: 'Luxury', label: 'Premium' },
  { value: 'EV',     label: 'Tecnología' },
];

const TIMELINE = [
  { year: '2024',   color: 'var(--b)', lineColor: 'rgba(0,200,255,.18)',   title: 'Concepto Visionario',    desc: 'Nace Nova Motors con la visión de transformar la experiencia automotriz de lujo.' },
  { year: '2025',   color: 'var(--p)', lineColor: 'rgba(155,48,255,.18)',  title: 'Primeros Prototipos',     desc: 'Desarrollo de vehículos conceptuales de alto rendimiento y estética futurista.' },
  { year: '2025 Q3',color: 'var(--g)', lineColor: 'rgba(0,255,178,.18)',   title: 'Experiencia Inmersiva',   desc: 'Integración de experiencias digitales avanzadas y configuradores interactivos premium.' },
  { year: '2026',   color: 'var(--a)', lineColor: null,                    title: 'Expansión Global',        desc: 'Nova Motors inicia su visión internacional como marca automotriz futurista de lujo.' },
];

const PILLS = ['Innovación', 'Lujo', 'Rendimiento', 'Tecnología', 'Experiencia Premium', 'Movilidad del Futuro'];

function animCount(el, from, to, dur, suffix = '') {
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(from + (to - from) * p) + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function Nosotros() {
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started) {
            setStarted(true);
            STATS.forEach((s) => {
              if (s.id) {
                const el = document.getElementById(s.id);
                if (el) animCount(el, s.from, s.to, s.dur, s.suffix);
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [started]);

  return (
    <section id="nosotros" className="sec" ref={sectionRef}>
      <div className="sec-hdr reveal up">
        <div className="sec-bar" />
        <div className="sec-title">SOBRE NOVA MOTORS</div>
      </div>

      <div className="about-layout">
        <div>
          <div className="about-copy reveal up">
            Nova Motors representa una nueva generación de innovación automotriz enfocada en el lujo,
            el rendimiento y la experiencia premium. Nuestra visión combina diseño futurista, ingeniería
            avanzada y tecnología de última generación para crear vehículos que redefinen el futuro de la movilidad.
            <br /><br />
            Cada modelo de Nova Motors está diseñado para transmitir velocidad, elegancia y exclusividad,
            ofreciendo una experiencia inmersiva inspirada en las marcas automotrices más avanzadas del mundo.
          </div>

          <div className="about-stats stagger" style={{ marginTop: 20 }}>
            {STATS.map((s, i) => (
              <div key={i} className="astat reveal scale">
                <div className="astat-v" id={s.id || undefined}>{s.value || s.to + s.suffix}</div>
                <div className="astat-l">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="tech-pills reveal up" style={{ marginTop: 20 }}>
            {PILLS.map((p) => (
              <div key={p} className="tpill">{p}</div>
            ))}
          </div>
        </div>

        <div className="tl reveal right">
          {TIMELINE.map((t, i) => (
            <div key={i} className="tl-row">
              <div className="tl-dots">
                <div className="tl-dot" style={{ background: t.color }} />
                {t.lineColor && <div className="tl-line" style={{ background: t.lineColor }} />}
              </div>
              <div>
                <div className="tl-yr" style={{ color: t.color }}>{t.year}</div>
                <div className="tl-ttl">{t.title}</div>
                <div className="tl-desc">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
