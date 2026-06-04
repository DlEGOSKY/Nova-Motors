import { useState, useRef } from 'react';
import { CARS } from '../../data/cars';
import { cSVG } from '../../utils/carSvg';
import { useApp } from '../../context/AppContext';
import './Catalogo.css';

const FILTERS = ['Todos', 'Deportivo', 'Hypercar', 'SUV', 'Eléctrico', 'Clásico'];

const PRICE_RANGES = [
  { label: 'Todos', min: 0, max: Infinity },
  { label: 'Menos de $500k', min: 0, max: 500000 },
  { label: '$500k - $1M', min: 500000, max: 1000000 },
  { label: '$1M - $2M', min: 1000000, max: 2000000 },
  { label: 'Más de $2M', min: 2000000, max: Infinity },
];

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function CarCard({ car, onConfigure }) {
  const { favs, toggleFav } = useApp();
  const isFav = favs.has(car.id);
  return (
    <div className="car-card reveal scale">
      <div className="card-glow" style={{ boxShadow: `inset 0 0 40px ${car.ac}18` }} />
      <div className="cvis" style={{ background: `linear-gradient(135deg,${car.bc},#06060C)` }}>
        <img
          src={car.image}
          alt={car.name}
          className="car-image"
        />
        {car.nw && <div className="cnew">NEW</div>}
        <div
          className={`cfav${isFav ? ' on' : ''}`}
          onClick={(e) => { e.stopPropagation(); toggleFav(car.id); }}
          title="Favorito"
        >
          <i className="ti ti-heart" aria-hidden="true" />
        </div>
      </div>
      <div className="cbody">
        <div className="cname">{car.name}</div>
        <div className="ccat" style={{ color: car.ac }}>{car.cat}</div>
        <div className="cmeta">
          <div className="cmi"><span>{car.hp} HP</span></div>
          <div className="cmi"><span>{car.s}</span> 0-100</div>
          <div className="cmi"><span>{car.range}km</span></div>
        </div>
        <div className="cprice" style={{ color: car.ac }}>${car.price.toLocaleString()}</div>
        <div className="cbtns">
          <button className="cbtn cbtn-fill" onClick={() => onConfigure(car.id)}>Configurar</button>
          <button className={`cbtn cbtn-out${isFav ? ' fav-on' : ''}`} onClick={() => toggleFav(car.id)}>
            <i className="ti ti-heart" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Catalogo() {
  const [filter, setFilter] = useState('Todos');
  const [priceRange, setPriceRange] = useState('Todos');
  const [query, setQuery] = useState('');
  const gridRef = useRef(null);
  const { updateCfg } = useApp();

  const priceFilter = PRICE_RANGES.find(p => p.label === priceRange) || PRICE_RANGES[0];

  const filtered = CARS.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) &&
      (filter === 'Todos' || c.cat === filter) &&
      c.price >= priceFilter.min &&
      c.price <= priceFilter.max
  );

  const handleConfigure = (id) => {
  const car = CARS.find((c) => c.id === id);

  if (car) {
    updateCfg({
      price: car.price,
      model: car.model,
      scale: car.scale,
      position: car.position,
      rotation: car.rotation
    });

    scrollTo('configurador');
  }
};

  return (
    <section id="catalogo" className="sec">
      <div className="sec-hdr reveal up">
        <div className="sec-bar" />
        <div className="sec-title">CATÁLOGO</div>
        <div className="sec-tag">{filtered.length} vehículos</div>
      </div>

      <input
        className="srch reveal up"
        placeholder="Buscar vehículo por nombre o categoría..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="filter-bar reveal up">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`flt${filter === f ? ' on' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="price-filter reveal up">
        <span className="price-label">Rango de precio:</span>
        <div className="price-buttons">
          {PRICE_RANGES.map((p) => (
            <button
              key={p.label}
              className={`price-btn${priceRange === p.label ? ' on' : ''}`}
              onClick={() => setPriceRange(p.label)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="car-grid stagger" ref={gridRef}>
        {filtered.map((car) => (
          <CarCard key={car.id} car={car} onConfigure={handleConfigure} />
        ))}
      </div>
    </section>
  );
}
