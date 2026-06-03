import { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES } from '../../data/cars';
import { cSVG } from '../../utils/carSvg';
import './Hero.css';

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Hero() {
  const [slideIdx, setSlideIdx] = useState(0);
  const timerRef = useRef(null);

  const goSlide = (i) => {
    setSlideIdx(i);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setSlideIdx((p) => (p + 1) % HERO_SLIDES.length), 5500);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => setSlideIdx((p) => (p + 1) % HERO_SLIDES.length), 5500);
    return () => clearInterval(timerRef.current);
  }, []);

  const slide = HERO_SLIDES[slideIdx];

  return (
    <section id="inicio">
      <div className="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-scan" />
          <div className="hero-orb" style={{ width: 360, height: 360, top: -80, right: '8%', background: slide.color }} />
          <div className="hero-orb" style={{ width: 200, height: 200, bottom: -40, right: '32%', background: 'rgba(155,48,255,1)', animation: 'cf 9s ease-in-out infinite reverse' }} />
        </div>

        {HERO_SLIDES.map((s, i) => (
          <div key={i} className={`slide${slideIdx === i ? ' on' : ''}`}>
            <div className="slide-content">
              <div className="slide-tag" style={{ color: s.tagColor }}>{s.tag}</div>
              <div className="slide-title" style={{ color: '#F0F0FF' }}>
                {s.title}<br /><span style={{ color: s.subtitleColor }}>{s.subtitle}</span>
              </div>
              <div className="slide-sub">{s.desc}</div>
              <div className="hero-btns">
                <button
                  className="btn-fill"
                  style={{ background: s.btnGrad, color: '#fff', boxShadow: s.btnShadow }}
                  onClick={() => scrollTo('configurador')}
                >
                  ⚙ Configurar ahora
                </button>
                <button
                  className="btn-line"
                  style={{ border: `1px solid ${s.btnOutBorder}`, color: s.btnOutColor }}
                  onClick={() => scrollTo('catalogo')}
                >
                  Ver catálogo
                </button>
              </div>
              <div className="hero-specs">
                {s.specs.map((sp, j) => (
                  <div key={j} className="hsp">
                    <div className="hsp-v" style={{ color: s.subtitleColor }}>{sp.v}</div>
                    <div className="hsp-l">{sp.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="slide-car">
              <div
                className="car-float"
                dangerouslySetInnerHTML={{ __html: cSVG(s.color, s.bc, 340, 170) }}
              />
            </div>
          </div>
        ))}

        <div className="hdots">
          {HERO_SLIDES.map((_, i) => (
            <div key={i} className={`hdot${slideIdx === i ? ' on' : ''}`} onClick={() => goSlide(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
