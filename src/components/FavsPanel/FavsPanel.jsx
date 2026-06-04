import { useApp } from '../../context/AppContext';
import { CARS } from '../../data/cars';
import './FavsPanel.css';

export default function FavsPanel() {
  const { favs, toggleFav, favPanelOpen, closeFavPanel } = useApp();
  const favCars = CARS.filter((c) => favs.has(c.id));

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeFavPanel();
  };

  return (
    <div className={`favs-overlay${favPanelOpen ? ' open' : ''}`} onClick={handleOverlayClick}>
      <div className="favs-panel">
        <div className="favs-hdr">
          <div className="favs-title">FAVORITOS</div>
          <button className="favs-close" onClick={closeFavPanel}>✕</button>
        </div>
        <div id="fav-list">
          {favCars.length === 0 ? (
            <div className="favs-empty">
              <i className="ti ti-heart" style={{ fontSize: 28, display: 'block', marginBottom: 8, opacity: 0.3 }} aria-hidden="true" />
              Aún no tienes favoritos
            </div>
          ) : (
            favCars.map((c) => (
              <div key={c.id} className="fav-item">
                <div style={{ flex: 1 }}>
                  <div className="fav-name">{c.name}</div>
                  <div className="fav-cat" style={{ color: c.ac }}>{c.cat}</div>
                  <div className="fav-price" style={{ color: c.ac }}>${c.price.toLocaleString()}</div>
                </div>
                <button className="fav-remove" onClick={() => toggleFav(c.id)}>
                  <i className="ti ti-x" aria-hidden="true" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
