import { useEffect } from 'react';
import 'aframe';
import 'aframe-orbit-controls';
import './Showroom.css';

export default function Showroom() {

  useEffect(() => {
    // Asegurar que A-Frame esté listo
    const scene = document.querySelector('a-scene');
    if (scene && scene.hasLoaded) {
      console.log('Showroom 3D cargado');
    }
  }, []);

  return (
    <section id="showroom" className="sec showroom-section">
      <div className="sec-hdr reveal up">
        <div className="sec-bar" />
        <div className="sec-title">SHOWROOM 3D</div>
        <div className="sec-tag">EXPERIENCIA INMERSIVA</div>
      </div>

      <div className="showroom-container reveal scale">
        <a-scene embedded vr-mode-ui="enabled: false">
          <a-sky color="#050816"></a-sky>

          <a-light
            type="ambient"
            intensity="1.5">
          </a-light>

          <a-light
            type="directional"
            position="5 10 7.5"
            intensity="3">
          </a-light>

          <a-light
            type="point"
            position="-5 5 5"
            intensity="1"
            color="#00C8FF">
          </a-light>

          <a-entity
            gltf-model="/models/body/car.glb"
            position="0 0 0"
            rotation="0 180 0"
            scale="15 15 15"
            animation="property: rotation; to: 0 540 0; loop: true; dur: 30000; easing: linear">
          </a-entity>

          <a-camera 
            position="0 3 25"
            orbit-controls="
              target: 0 0 0;
              minDistance: 10;
              maxDistance: 50;
              initialPosition: 0 3 25;
              enableDamping: true;
              dampingFactor: 0.1;
              rotateSpeed: 0.5;
              autoRotate: false;
              autoRotateSpeed: 0.5;">
          </a-camera>
        </a-scene>
      </div>

      <div className="showroom-info reveal up">
        <p>Explora nuestros vehículos en 3D. Usa el mouse para rotar, scroll para zoom.</p>
      </div>
    </section>
  );
}