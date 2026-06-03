import { useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Catalogo from './components/Catalogo/Catalogo';
import Configurador from './components/Configurador/Configurador';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import FavsPanel from './components/FavsPanel/FavsPanel';

function AppInner() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('vis'); }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    const observe = () => document.querySelectorAll('.reveal:not(.vis)').forEach((el) => io.observe(el));
    observe();
    const mut = new MutationObserver(observe);
    mut.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mut.disconnect(); };
  }, []);

  return (
    <div id="root-inner">
      <h2 className="sr-only">Nova Motors — landing page premium, visualización y configuración de vehículos de lujo</h2>
      <Navbar />
      <FavsPanel />
      <Hero />
      <Catalogo />
      <Configurador />
      <Nosotros />
      <Contacto />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  );
}
