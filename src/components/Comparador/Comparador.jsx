import { useState } from 'react';
import { CARS } from '../../data/cars';
import './Comparador.css';

export default function Comparador() {
  const [selected, setSelected] = useState([]);

  const toggleCar = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(c => c !== id));
    } else if (selected.length < 3) {
      setSelected([...selected, id]);
    }
  };

  const selectedCars = CARS.filter(c => selected.includes(c.id));

  const specs = [
    { key: 'hp', label: 'Potencia', unit: 'HP' },
    { key: 's', label: 'Aceleración', unit: '0-100 km/h' },
    { key: 'top', label: 'Velocidad máxima', unit: 'km/h' },
    { key: 'range', label: 'Autonomía', unit: 'km' },
    { key: 'price', label: 'Precio', unit: '$' },
  ];

  return (
    <section id="comparador" className="sec sec-alt">
      <div className="sec-hdr reveal up">
        <div className="sec-bar" />
        <div className="sec-title">COMPARADOR</div>
        <div className="sec-tag">Selecciona hasta 3 vehículos</div>
      </div>

      <div className="comp-layout">
        <div className="comp-selector reveal left">
          <div className="comp-title">Selecciona vehículos</div>
          <div className="comp-list">
            {CARS.map(car => (
              <div
                key={car.id}
                className={`comp-item${selected.includes(car.id) ? ' selected' : ''}${selected.length >= 3 && !selected.includes(car.id) ? ' disabled' : ''}`}
                onClick={() => toggleCar(car.id)}
              >
                <div className="comp-item-name">{car.name}</div>
                <div className="comp-item-cat" style={{ color: car.ac }}>{car.cat}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="comp-table reveal right">
          {selectedCars.length === 0 ? (
            <div className="comp-empty">
              <i className="ti ti-layout-list" style={{ fontSize: 48, marginBottom: 16, opacity: 0.3 }} aria-hidden="true" />
              <p>Selecciona vehículos para comparar</p>
            </div>
          ) : (
            <div className="comp-grid">
              <div className="comp-header">
                {selectedCars.map(car => (
                  <div key={car.id} className="comp-col">
                    <div className="comp-car-name">{car.name}</div>
                    <div className="comp-car-cat" style={{ color: car.ac }}>{car.cat}</div>
                  </div>
                ))}
              </div>

              {specs.map(spec => (
                <div key={spec.key} className="comp-row">
                  <div className="comp-spec-label">{spec.label}</div>
                  {selectedCars.map(car => (
                    <div key={`${car.id}-${spec.key}`} className="comp-col">
                      <div className="comp-value">
                        {spec.key === 'price' ? `$${car[spec.key].toLocaleString()}` : `${car[spec.key]} ${spec.unit}`}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
