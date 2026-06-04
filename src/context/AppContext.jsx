import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [favs, setFavs] = useState(() => {
    const saved = localStorage.getItem('nova_favs');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [cfg, setCfg] = useState({
    color: '#101020',
    colorName: 'Negro Abismo',
    seatColor: '#8B4513',
    seatColorName: 'Marrón Natural',
    s: 'Cuero Liso',
    w: '18" Radial',
    i: 'Nogal',
    price: 87500,
    model: '/models/body/car.glb',
    scale: '18 18 18',
    position: '0 -2 0',
    rotation: '0 180 0'
  });
  const [sw, setSw] = useState({ roof: true, sport: false, wing: false, led: true });
  const [favPanelOpen, setFavPanelOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('nova_favs', JSON.stringify(Array.from(favs)));
  }, [favs]);

  const toggleFav = useCallback((id) => {
    setFavs((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleFavPanel = useCallback(() => setFavPanelOpen((v) => !v), []);
  const closeFavPanel = useCallback(() => setFavPanelOpen(false), []);

  const updateCfg = useCallback((patch) => setCfg((prev) => ({ ...prev, ...patch })), []);
  const toggleSw = useCallback((key) => setSw((prev) => ({ ...prev, [key]: !prev[key] })), []);

  const computedPrice = (() => {
    let p = cfg.price || 87500;
    if (sw.roof)  p += 3500;
    if (sw.sport) p += 8000;
    if (sw.wing)  p += 2200;
    if (sw.led)   p += 1800;
    if (cfg.w?.includes('22')) p += 4500;
    else if (cfg.w?.includes('21')) p += 3800;
    else if (cfg.w?.includes('20')) p += 2500;
    if (cfg.s === 'Alcantara') p += 5000;
    else if (cfg.s === 'Cuero Sport') p += 3200;
    return p;
  })();

  return (
    <AppContext.Provider value={{
      favs, toggleFav,
      favPanelOpen, toggleFavPanel, closeFavPanel,
      cfg, updateCfg,
      sw, toggleSw,
      computedPrice,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
