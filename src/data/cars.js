export const CARS = [
  {
  id: 1,
  name: 'Lamborghini Aventador SVJ',
  cat: 'Deportivo',
  price: 507000,
  hp: 770,
  s: '2.8s',
  top: 350,
  range: 450,
  image: '/public/img/imagen carro1.jpg',
  model: '/models/body/car.glb',
  scale: '15 15 15',
  position: '0 0 0',
  rotation: '0 180 0',
  ac: '#FFD700',
  bc: '#1A1A1A',
  nw: true
},
{
  id: 2,
  name: 'Lamborghini Centenario Roadster',
  cat: 'Hypercar',
  price: 2200000,
  hp: 770,
  s: '2.8s',
  top: 350,
  range: 450,
  image: '/public/img/imgcarro2.jpg',
  model: '/models/body/car2.glb',
  model: '/models/body/car2.glb',
  scale: '1200 1200 1200',
  position: '0 -6 0',
  rotation: '0 180 0',
  ac: '#9B30FF',
  bc: '#110022',
  nw: true
}, 
{
  id: 3,
  name: 'Ferrari 296 GTB 2022',
  cat: 'Deportivo',
  price: 322000,
  hp: 830,
  s: '2.9s',
  top: 330,
  range: 520,
  image: '/img/imgcarro3.jpg',
  model: '/models/body/car3.glb',

  scale: '1500 1500 1500',
  position: '0 -4 0',
  rotation: '0 180 0',

  ac: '#FF0000',
  bc: '#220000',
  nw: true
},
{
  id: 4,
  name: 'Ferrari Testarossa 2026',
  cat: 'Hypercar',
  price: 485000,
  hp: 920,
  s: '2.5s',
  top: 355,
  range: 540,
  image: '/img/imgcarro4.webp',
  model: '/models/body/car4.glb',

  scale: '1000 1000 1000',
  position: '0 -4 0',
  rotation: '0 180 0',

  ac: '#FF2A2A',
  bc: '#220000',
  nw: true
},
{
  id: 5,
  name: 'Bugatti Chiron 2016',
  cat: 'Hypercar',
  price: 3000000,
  hp: 1500,
  s: '2.4s',
  top: 420,
  range: 650,
  image: '/img/imgcarro5.jpg',
  model: '/models/body/car5.glb',

  scale: '990 990 990',
  position: '0 -4 0',
  rotation: '0 180 0',

  ac: '#0066FF',
  bc: '#001133',
  nw: true
},
{
  id: 6,
  name: 'Lamborghini Asterion LPI910-4 Concept 2014',
  cat: 'Hypercar',
  price: 9000000,
  hp: 1600,
  s: '2.4s',
  top: 380,
  range: 650,

  image: '/img/imgcarro6.jpg',
  model: '/models/body/car6.glb',

  scale: '700 700 700',
  position: '0 0 0',
  rotation: '0 180 0',

  ac: '#00BFFF',
  bc: '#001122',
  nw: true
},
{
  id: 7,
  name: 'Roadster Lamborghini Centenario 2017',
  cat: 'Deportivo',
  price: 150000,
  hp: 550,
  s: '3.6s',
  top: 306,
  range: 500,

  image: '/img/imgcarro7.jpg',
  model: '/models/body/car7.glb',

  scale: '800 800 800',
  position: '0 0 0',
  rotation: '0 180 0',

  ac: '#00C8FF',
  bc: '#001122',
  nw: true
},
{
  id: 8,
  name: 'Porsche 911 GT3 2014',
  cat: 'Deportivo',
  price: 165000,
  hp: 475,
  s: '3.5s',
  top: 315,
  range: 450,

  image: '/img/imgcarro8.jpeg',
  model: '/models/body/car8.glb',

  scale: '700 700 700',
  position: '0 0 0',
  rotation: '0 180 0',

  ac: '#00C8FF',
  bc: '#001122',
  nw: true
},
];

export const HERO_SLIDES = [
  {
  tag: '⬡ SUPERCAR · V12',
  tagColor: '#00D9A6',
  title: 'LAMBORGHINI',
  subtitle: 'AVENTADOR SVJ',
  subtitleColor: '#00D9A6',
  desc: '770 HP de potencia V12. De 0 a 100 km/h en 2.8 segundos.',

  btnGrad: 'linear-gradient(135deg,#00D9A6,#008F6B)',
  btnShadow: '0 4px 24px rgba(0,217,166,.35)',

  btnOutColor: '#00D9A6',
  btnOutBorder: 'rgba(0,217,166,.4)',

  specs: [
    { v: '770', l: 'HP' },
    { v: '2.8s', l: '0-100' },
    { v: '350', l: 'km/h' },
  ],

  color: '#00D9A6',
  bc: '#001A14',
},

  {
    tag: '⬡ SUPERCAR · FERRARI',
    tagColor: '#FF2A2A',
    title: 'FERRARI',
    subtitle: '296 GTB',
    subtitleColor: '#FF2A2A',
    desc: '830 HP híbridos. Diseño italiano y rendimiento extremo.',
    btnGrad: 'linear-gradient(135deg,#FF2A2A,#990000)',
    btnShadow: '0 4px 24px rgba(255,42,42,.35)',
    btnOutColor: '#FF2A2A',
    btnOutBorder: 'rgba(255,42,42,.4)',
    specs: [
      { v: '830', l: 'HP' },
      { v: '2.9s', l: '0-100' },
      { v: '330', l: 'km/h' },
    ],
    color: '#FF2A2A',
    bc: '#220000',
  },

  {
    tag: '⬡ HYPERCAR · BUGATTI',
    tagColor: '#00BFFF',
    title: 'BUGATTI',
    subtitle: 'CHIRON',
    subtitleColor: '#00BFFF',
    desc: '1500 HP. Ingeniería francesa llevada al límite.',
    btnGrad: 'linear-gradient(135deg,#00BFFF,#0044AA)',
    btnShadow: '0 4px 24px rgba(0,191,255,.35)',
    btnOutColor: '#00BFFF',
    btnOutBorder: 'rgba(0,191,255,.4)',
    specs: [
      { v: '1500', l: 'HP' },
      { v: '2.4s', l: '0-100' },
      { v: '420', l: 'km/h' },
    ],
    color: '#00BFFF',
    bc: '#001133',
  },
];
