import { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import './Configurador.css';
import 'aframe';
import 'aframe-orbit-controls';

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
const SEAT_COLORS = [
  { c: '#8B4513', n: 'Marrón Natural' },
  { c: '#1A1A1A', n: 'Negro Carbón' },
  { c: '#2C2C2C', n: 'Gris Oscuro' },
  { c: '#8B0000', n: 'Rojo Vino' },
  { c: '#1C1C3C', n: 'Azul Noche' },
  { c: '#3C2415', n: 'Marrón Oscuro' },
  { c: '#4A4A4A', n: 'Gris Acero' },
  { c: '#5C3D2E', n: 'Caramelo' },
];

const WHEEL_COLORS = [
  { c: '#111111', n: 'Negro' },
  { c: '#C0C0C0', n: 'Plata' },
  { c: '#FFD700', n: 'Dorado' },
  { c: '#0066FF', n: 'Azul' },
  { c: '#CC0000', n: 'Rojo' },
  { c: '#0A7D32', n: 'Verde' },
  { c: '#FFFFFF', n: 'Blanco' },
  { c: '#555555', n: 'Grafito' }
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
    const configData = {
      ...cfg,
      extras: sw,
      timestamp: new Date().toISOString(),
      totalPrice: computedPrice
    };
    const json = JSON.stringify(configData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nova-config-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

useEffect(() => {

  const model = document.querySelector("#carModel");

  if (!model) return;

  const applyColor = () => {

    if (!model.object3D) return;

  model.object3D.traverse((node) => {
  if (node.isMesh && node.material) {

    console.log("PIEZA:", node.name);

    const nodeName = node.name.toLowerCase();

  if (
  nodeName.includes('seat') ||
  nodeName.includes('interior') ||
  nodeName.includes('asiento')
) {

  node.material.color.set(cfg.seatColor);

}else if (
  nodeName.includes('paint') ||
  nodeName.includes('coloured')
) {
  console.log('CARROCERIA REAL:', node.name);
  node.material.color.set(cfg.color);

} else if (
  nodeName.includes('wheel') ||
  nodeName.includes('wheel1a') ||
  nodeName.includes('hubcap')||
  nodeName.includes('rim')
) {

  node.material.color.set(cfg.wheelColor);

} else if (
  nodeName.includes('tire')
) {

  node.material.color.set('#111111');

} else if (
  nodeName.includes('glass') ||
  nodeName.includes('window') ||
  nodeName.includes('cristal')
) {

  node.material.color.set('#1A2A4A');

} else {

  node.material.color.set(cfg.color);

}
  }
});

  };

  model.addEventListener("model-loaded", applyColor);

  applyColor();

  return () => {
    model.removeEventListener("model-loaded", applyColor);
  };

}, [cfg.color, cfg.seatColor, cfg.wheelColor]);

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
            <div className="clbl">Color Asientos</div>
            <div className="ccolors">
              {SEAT_COLORS.map((col) => (
                <div
                  key={col.c}
                  className={`ccol${cfg.seatColor === col.c ? ' on' : ''}`}
                  style={{ background: col.c }}
                  title={col.n}
                  onClick={() => updateCfg({ seatColor: col.c, seatColorName: col.n })}
                />
              ))}
            </div>
          </div>

          <div className="cgrp">
  <div className="clbl">Color de Rines</div>

  <div className="ccolors">
    {WHEEL_COLORS.map((col) => (
      <div
        key={col.c}
        className={`ccol${cfg.wheelColor === col.c ? ' on' : ''}`}
        style={{ background: col.c }}
        title={col.n}
        onClick={() =>
          updateCfg({
            wheelColor: col.c,
            wheelColorName: col.n
          })
        }
      />
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
          <div className="vcar">
  <a-scene embedded>

  {/* Fondo */}
  <a-sky color="#050816"></a-sky>

  {/* Luces */}
  <a-light
    type="ambient"
    intensity="3">
  </a-light>

  <a-light
    type="directional"
    position="0 10 10"
    intensity="6">
  </a-light>

  {/* Modelo */}
  <a-entity
    id="carModel"
    gltf-model={cfg.model}
    position={cfg.position}
    rotation={cfg.rotation}
    scale={cfg.scale}>
  </a-entity>

  {/* Cámara orbital */}
  <a-camera
    orbit-controls="
      target: 0 2 0;
      minDistance: 25;
      maxDistance: 60;
      initialPosition: 0 6 35;
      enableDamping: true;
      dampingFactor: 0.15;
      rotateSpeed: 0.6;">
  </a-camera>

</a-scene>
</div>
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
            <div className="sum-row"><span>Color Asientos</span><span style={{ color: 'var(--b)' }}>{cfg.seatColorName}</span></div>
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
