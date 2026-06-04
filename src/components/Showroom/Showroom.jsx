import 'aframe';

export default function Showroom() {

  return (

    <section style={{ width: '100%', height: '100vh' }}>

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

  <a-camera position="0 2 15"></a-camera>

  <a-entity
    gltf-model="/models/body/car.glb"
    position="0 0 0"
    rotation="0 180 0"
    scale="0.1 0.1 0.1">
  </a-entity>

</a-scene>

    </section>
  );
}