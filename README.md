# 🚗 Nova Motors - Plataforma de Vehículos de Lujo

**Nova Motors** es una aplicación web moderna para la visualización, configuración y comparación de vehículos de lujo en 3D. Desarrollada con React, Vite y A-Frame.

![Nova Motors](https://img.shields.io/badge/React-18.3-blue) ![Vite](https://img.shields.io/badge/Vite-5.4-purple) ![A--Frame](https://img.shields.io/badge/A--Frame-1.6-red)

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologías](#-tecnologías)
- [Despliegue](#-despliegue)
- [Contribuir](#-contribuir)

---

## ✨ Características

### 🎨 Configurador 3D Avanzado
- **Visualización 3D en tiempo real** con A-Frame
- **Personalización completa**:
  - 8 colores de carrocería
  - 8 colores de asientos
  - 8 colores de rines
  - 4 tipos de llantas
  - 4 tipos de interior
  - Extras configurables (techo panorámico, modo sport, alerón, LED)

### 🏎️ Showroom 3D Interactivo
- Rotación automática del vehículo
- Controles de órbita (mouse drag para rotar)
- Zoom con scroll
- Iluminación dinámica

### 🔍 Comparador de Vehículos
- Compara hasta 3 vehículos simultáneamente
- Especificaciones detalladas lado a lado
- Filtrado inteligente

### 📱 Diseño Responsive
- Optimizado para desktop, tablet y móvil
- Breakpoints: 1024px, 768px, 480px
- Layout adaptativo

### 💾 Funcionalidades de Usuario
- **Guardar configuración** como imagen PNG
- **Agregar a favoritos** (localStorage)
- **Compartir configuración** (Web Share API / Clipboard)
- **Persistencia de datos** en navegador

### 🎯 Filtros Avanzados
- Por categoría (Deportivo, Hypercar, SUV, Eléctrico, Clásico)
- Por rango de precio
- Búsqueda por nombre

---

## 🔧 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** (versión 9 o superior)
- **Git** (para clonar el repositorio)

Verifica las versiones:
```bash
node --version
npm --version
git --version
```

---

## 📦 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/DlEGOSKY/Nova-Motors.git
cd Nova-Motors
```

### 2. Instalar dependencias

```bash
npm install
```

Esto instalará todas las dependencias necesarias:
- React 18.3.1
- Vite 5.4.21
- A-Frame 1.6.0
- aframe-orbit-controls
- Y más...

### 3. Verificar instalación

```bash
npm list --depth=0
```

---

## 🚀 Uso

### Desarrollo Local

Inicia el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en:
- **Local**: http://localhost:5173/
- **Network**: Usa `--host` para exponer en red local

### Build para Producción

Genera los archivos optimizados:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`

### Preview de Producción

Previsualiza el build de producción:

```bash
npm run preview
```

### Linting

Ejecuta el linter para verificar el código:

```bash
npm run lint
```

---

## 📁 Estructura del Proyecto

```
nova-motors-react/
├── public/
│   ├── img/                    # Imágenes de vehículos
│   └── models/
│       └── body/               # Modelos 3D (.glb)
├── src/
│   ├── components/
│   │   ├── Catalogo/          # Catálogo de vehículos
│   │   ├── Comparador/        # Comparador de vehículos
│   │   ├── Configurador/      # Configurador 3D
│   │   ├── Contacto/          # Formulario de contacto
│   │   ├── FavsPanel/         # Panel de favoritos
│   │   ├── Footer/            # Pie de página
│   │   ├── Hero/              # Sección hero
│   │   ├── Navbar/            # Barra de navegación
│   │   ├── Nosotros/          # Sección sobre nosotros
│   │   └── Showroom/          # Showroom 3D
│   ├── context/
│   │   └── AppContext.jsx     # Context API global
│   ├── data/
│   │   └── cars.js            # Datos de vehículos
│   ├── utils/
│   │   └── carSvg.js          # Utilidades SVG
│   ├── App.jsx                # Componente principal
│   ├── index.css              # Estilos globales
│   └── main.jsx               # Punto de entrada
├── index.html                 # HTML principal
├── package.json               # Dependencias
├── vite.config.js             # Configuración Vite
└── README.md                  # Este archivo
```

---

## 🎯 Funcionalidades

### 1. Catálogo de Vehículos
- **Visualización**: Grid responsive con cards de vehículos
- **Filtros**: Por categoría y rango de precio
- **Búsqueda**: Por nombre en tiempo real
- **Favoritos**: Agregar/quitar con un click
- **Configurar**: Botón directo al configurador 3D

### 2. Configurador 3D
- **Panel Izquierdo**: Opciones de personalización
  - Colores de carrocería (8 opciones)
  - Tipo de asientos (4 opciones)
  - Colores de asientos (8 opciones)
  - Tipo de llantas (4 opciones)
  - Colores de rines (8 opciones)
  - Tipo de interior (4 opciones)
  - Extras (4 switches)

- **Visor Central**: Modelo 3D interactivo
  - Rotación automática
  - Controles de órbita
  - Zoom con scroll
  - Iluminación dinámica

- **Panel Derecho**: Resumen y acciones
  - Precio calculado en tiempo real
  - Especificaciones del vehículo
  - Resumen de configuración
  - Botones de acción:
    - 💾 **Guardar**: Captura PNG del 3D
    - ❤️ **Favorito**: Guarda en localStorage
    - 🔗 **Compartir**: Copia link al portapapeles

### 3. Showroom 3D
- Visualización inmersiva del vehículo
- Rotación automática continua
- Controles interactivos
- Iluminación profesional

### 4. Comparador
- Selecciona hasta 3 vehículos
- Comparación lado a lado de:
  - Potencia (HP)
  - Aceleración (0-100 km/h)
  - Velocidad máxima
  - Autonomía
  - Precio

### 5. Sistema de Favoritos
- Persistencia en localStorage
- Panel lateral deslizable
- Gestión completa (agregar/eliminar)

### 6. Formulario de Contacto
- Validación en tiempo real
- Integración con Formspree
- Mensajes de éxito/error
- Estados de carga

---

## 🛠️ Tecnologías

### Frontend
- **React 18.3.1**: Biblioteca UI
- **Vite 5.4.21**: Build tool y dev server
- **A-Frame 1.6.0**: Framework WebVR/3D
- **aframe-orbit-controls**: Controles de cámara

### Estilos
- **CSS3**: Estilos personalizados
- **CSS Grid & Flexbox**: Layouts responsive
- **CSS Variables**: Theming dinámico
- **Animations**: Transiciones suaves

### Estado y Datos
- **React Context API**: Estado global
- **localStorage**: Persistencia local
- **JSON**: Datos de vehículos

### Iconos y Fuentes
- **Tabler Icons**: Iconografía
- **Google Fonts**: 
  - Bebas Neue
  - Inter
  - Montserrat

---

## 🌐 Despliegue

### Netlify (Recomendado)

1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **Node Version**: 18

### Vercel

1. **Framework Preset**: Vite
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`

### GitHub Pages

```bash
npm run build
# Sube la carpeta dist/ a gh-pages branch
```

---

## 📝 Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz:

```env
VITE_FORMSPREE_ID=tu_formspree_id
```

### Agregar Nuevos Vehículos

Edita `src/data/cars.js`:

```javascript
{
  id: 10,
  name: 'Nombre del Vehículo',
  cat: 'Categoría',
  price: 500000,
  hp: 700,
  s: '2.5s',
  top: 340,
  range: 600,
  image: '/img/imagen.jpg',
  model: '/models/body/modelo.glb',
  scale: '15 15 15',
  position: '0 0 0',
  rotation: '0 180 0',
  ac: '#FFD700',
  bc: '#1A1A1A',
  nw: true
}
```

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es privado y pertenece a Nova Motors.

---

## 👥 Autores

- **Diego** - Desarrollo principal
- **Equipo Nova Motors** - Diseño y concepto

---

## 📞 Soporte

Para soporte y consultas:
- **Email**: contacto@novamotors.com
- **GitHub Issues**: [Reportar un problema](https://github.com/DlEGOSKY/Nova-Motors/issues)

---

## 🔄 Changelog

### v2.0.0 (Junio 2026)
- ✅ Sistema de colores mejorado (carrocería, asientos, rines)
- ✅ Showroom 3D con controles de órbita
- ✅ Comparador de vehículos
- ✅ Filtros avanzados por precio
- ✅ Guardar configuración como PNG
- ✅ Sistema de favoritos y compartir
- ✅ Diseño responsive completo
- ✅ Animaciones y transiciones mejoradas

### v1.0.0 (Mayo 2026)
- 🎉 Lanzamiento inicial
- Catálogo de vehículos
- Configurador 3D básico
- Formulario de contacto

---

**Hecho con ❤️ por el equipo de Nova Motors**
