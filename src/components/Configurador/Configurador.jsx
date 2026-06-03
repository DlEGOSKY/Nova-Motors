import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { cSVG } from '../../utils/carSvg';
import './Configurador.css';

const COLORS = [
  { c: '#101020', n: 'Negro Abismo' },
  { c: '#E0E0E0', n: 'Blanco Óptico' },
  { c: '#BB1133', n: 'Rojo Pasión' },
  { c: '#334455', n: 'Gris Antracita' },
  { c: '#1166AA', n: 'Azul Glaciar' },
  { c: '#115522', n: 'Verde Bosque' },
  { c: '#C8A870', n: 'Champán' },
  { c: '#6B1F88', n: 'Morado' },
];
const SEATS  = ['Cuero Liso', 'Cuero Sport', 'Alcantara', 'Tejido'];
const WHEELS = ['18" Radial', '20" Turbina', '22" Multirayon', '21" Forjada'];
const INTERIOR = ['Nogal', 'Carbono', 'Aluminio', 'Piano Black'];
const EXTRAS = [
  { key: 'roof',  label: 'Techo panorámico' },
  { key: 'sport', label: 'Modo sport' },
  { key: 'wing',  label: 'Alerón trasero' },
  { key: 'led',   label: 'Matrix LED' },
];

export default function Configurador() {
  const { cfg, updateCfg, sw, toggleSw, computedPrice } = useApp();
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <section id="configurador" className="sec-alt cfg-section">
      <div className="sec-hdr reveal up">
        <div className="sec-bar" />
        <div className="sec-title">CONFIGURADOR 3D</div>
        <div className="sec-tag">A-FRAME.JS READY</div>
      </div>

      <div className="cfg-layout">
        {/* LEFT PANEL */}
        <div className="cfg-pnl reveal left">
          <div className="cpnl-t">Personalización</div>

          <div className="cgrp">
            <div className="clbl">Carrocería</div>
            <div className="ccolors">
              {COLORS.map((col) => (
                <div
                  key={col.c}
                  className={`ccol${cfg.color === col.c ? ' on' : ''}`}
                  style={{ background: col.c }}
                  title={col.n}
                  onClick={() => updateCfg({ color: col.c, colorName: col.n })}
                />
              ))}
            </div>
          </div>

          <div className="cgrp">
            <div className="clbl">Asientos</div>
            <div className="copts">
              {SEATS.map((s) => (
                <div key={s} className={`copt${cfg.s === s ? ' on' : ''}`} onClick={() => updateCfg({ s })}>
                  {s}
                </div>
              ))}
            </div>
          </div>

          <div className="cgrp">
            <div className="clbl">Llantas</div>
            <div className="copts">
              {WHEELS.map((w) => (
                <div key={w} className={`copt${cfg.w === w ? ' on' : ''}`} onClick={() => updateCfg({ w })}>
                  {w}
                </div>
              ))}
            </div>
          </div>

          <div className="cgrp">
            <div className="clbl">Interior</div>
            <div className="copts">
              {INTERIOR.map((i) => (
                <div key={i} className={`copt${cfg.i === i ? ' on' : ''}`} onClick={() => updateCfg({ i })}>
                  {i}
                </div>
              ))}
            </div>
          </div>

          <div className="cgrp">
            <div className="clbl">Extras</div>
            {EXTRAS.map((ex) => (
              <div key={ex.key} className="csw-row">
                <span className="csw-lbl">{ex.label}</span>
                <div className={`csw${sw[ex.key] ? ' on' : ''}`} onClick={() => toggleSw(ex.key)} />
              </div>
            ))}
          </div>
        </div>

        {/* VIEWER */}
        <div className="cfg-viewer reveal scale">
          <div className="vgrid" />
          <div className="vamb" style={{ background: `radial-gradient(ellipse 80% 60% at 50% 50%,${cfg.color}22,transparent)` }} />
          <div className="vlight" style={{ width: 240, height: 240, top: -60, left: '20%', background: '#00C8FF' }} />
          <div className="vlight" style={{ width: 180, height: 180, bottom: -40, right: '15%', background: '#9B30FF' }} />
          <div className="vscan" />
          <div className="vbadge">WebXR · A-Frame.js Ready</div>
          <div
            className="vcar"
            dangerouslySetInnerHTML={{ __html: cSVG(cfg.color === '#101020' ? '#00C8FF' : cfg.color, cfg.color, 300, 150) }}
          />
          <div className="vped" />
        </div>

        {/* RIGHT PANEL */}
        <div className="cfg-pnl right-pnl reveal right">
          <div className="cpnl-t">Resumen</div>
          <div className="price-b">
            <div className="price-lbl">Precio configurado</div>
            <div className="price-v">${Math.round(computedPrice).toLocaleString()}</div>
          </div>
          <div className="spec-g">
            <div className="sbox"><div className="sv" style={{ color: 'var(--b)' }}>630</div><div className="sk">HP</div></div>
            <div className="sbox"><div className="sv" style={{ color: 'var(--b)' }}>3.2s</div><div className="sk">0-100</div></div>
            <div className="sbox"><div className="sv" style={{ color: 'var(--b)' }}>310</div><div className="sk">km/h</div></div>
            <div className="sbox"><div className="sv" style={{ color: 'var(--b)' }}>520</div><div className="sk">km</div></div>
          </div>
          <div className="sum">
            <div className="sum-row"><span>Carrocería</span><span style={{ color: 'var(--b)' }}>{cfg.colorName}</span></div>
            <div className="sum-row"><span>Asientos</span><span style={{ color: 'var(--b)' }}>{cfg.s}</span></div>
            <div className="sum-row"><span>Llantas</span><span style={{ color: 'var(--b)' }}>{cfg.w}</span></div>
            <div className="sum-row"><span>Interior</span><span style={{ color: 'var(--b)' }}>{cfg.i}</span></div>
          </div>
          <div className="cactions">
            <button className="cact cact-fill" onClick={handleSave}>
              <i className="ti ti-download" style={{ marginRight: 5 }} aria-hidden="true" />Guardar
            </button>
            <button className="cact cact-out">
              <i className="ti ti-heart" style={{ marginRight: 5 }} aria-hidden="true" />Favorito
            </button>
            <button className="cact cact-out">
              <i className="ti ti-share" style={{ marginRight: 5 }} aria-hidden="true" />Compartir
            </button>
          </div>
          {saved && <div className="csaved">Configuración guardada</div>}
        </div>
      </div>
    </section>
  );
}
