import 'aframe';
import './Showroom.css';

export default function Showroom() {

  return (
    <section id="showroom" className="sec showroom-section">
      <div className="sec-hdr reveal up">
        <div className="sec-bar" />
        <div className="sec-title">SHOWROOM 3D</div>
        <div className="sec-tag">EXPERIENCIA INMERSIVA</div>
      </div>

      <div className="showroom-container reveal scale">
        <a-scene embedded>
          <a-sky color="#050816"></a-sky>

          <a-light
            type="ambient"
            intensity="2">
          </a-light>

          <a-light
            type="directional"
            position="0 10 10"
            intensity="4">
          </a-light>

          <a-camera position="0 3 25"></a-camera>

          <a-entity
            gltf-model="/models/body/car.glb"
            position="0 0 0"
            rotation="0 180 0"
            scale="15 15 15">
          </a-entity>
        </a-scene>
      </div>

      <div className="showroom-info reveal up">
        <p>Explora nuestros vehículos en 3D. Usa el mouse para rotar, scroll para zoom.</p>
      </div>
    </section>
  );
}