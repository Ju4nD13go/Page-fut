# Academia Futbol ⚽

Sitio web profesional para una academia de fútbol con entrenamiento de calidad, gestión de categorías y galería de momentos.

## 🚀 Características

- **Diseño Responsivo**: Completamente adaptado a móviles, tablets y escritorio
- **Componentes Reutilizables**: Arquitectura modular y escalable
- **Animaciones Suaves**: Transiciones elegantes con Framer Motion
- **Formulario de Contacto**: Validación client-side con manejo de estados
- **Galería Interactiva**: Modal/Lightbox para visualizar imágenes
- **Hook Personalizado**: `useWindowScroll` para efectos dinámicos
- **Accesibilidad**: Cumple con estándares WCAG AA
- **SEO Optimizado**: Meta tags y estructura semántica
- **Tests**: Pruebas unitarias con Vitest y React Testing Library

## 📦 Instalación

### Requisitos
- Node.js 18+
- npm o yarn

### Pasos

1. Clona el repositorio o descarga los archivos
2. Navega a la carpeta del proyecto
3. Instala las dependencias:

\`\`\`bash
npm install
\`\`\`

## 🏃 Uso

### Desarrollo
Inicia el servidor de desarrollo:

\`\`\`bash
npm run dev
\`\`\`

El sitio estará disponible en \`http://localhost:3000\`

### Producción
Construye la aplicación para producción:

\`\`\`bash
npm run build
\`\`\`

Visualiza la build de producción:

\`\`\`bash
npm run preview
\`\`\`

### Linting y Formato
Ejecuta ESLint:

\`\`\`bash
npm run lint
\`\`\`

Formatea el código con Prettier:

\`\`\`bash
npm run format
\`\`\`

### Tests
Ejecuta los tests:

\`\`\`bash
npm test
\`\`\`

## 📁 Estructura del Proyecto

\`\`\`
academia-futbol/
├── src/
│   ├── components/
│   │   ├── ui/               # Componentes reutilizables
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── SectionWrapper.jsx
│   │   ├── __tests__/        # Tests de componentes
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── MisionVisionValores.jsx
│   │   ├── Categorias.jsx
│   │   ├── Galeria.jsx
│   │   ├── Estadisticas.jsx
│   │   └── FormularoContacto.jsx
│   ├── pages/                # Páginas principales
│   │   ├── Home.jsx
│   │   ├── Categorias.jsx
│   │   ├── Galeria.jsx
│   │   └── Contacto.jsx
│   ├── hooks/                # Hooks personalizados
│   │   └── useWindowScroll.js
│   ├── test/
│   │   └── setup.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vitest.config.js
├── .eslintrc.json
├── .prettierrc
└── README.md
\`\`\`

## 🎨 Paleta de Colores

- **Azul Profundo**: \`#0A1A44\` (Principal)
- **Granate**: \`#8A033E\` (Secundario)
- **Amarillo Dorado**: \`#F4C900\` (Acento)
- **Blanco**: \`#FFFFFF\`
- **Grises**: Para contraste y neutrales

## 📦 Dependencias Principales

- **React 18.2**: Librería UI
- **React Router 6**: Enrutamiento
- **Framer Motion 10**: Animaciones
- **Tailwind CSS 4**: Estilos
- **Lucide React**: Iconografía
- **Vite 5**: Build tool
- **Vitest**: Testing
- **ESLint & Prettier**: Calidad de código

## ♿ Accesibilidad

- Roles ARIA semánticos
- Contraste WCAG AA+
- Focus states visibles
- Labels de formulario accesibles
- Navegación por teclado

## 🌐 Despliegue

### Vercel (Recomendado)
1. Sube tu código a GitHub
2. Conecta el repo en vercel.com
3. Vercel desplegará automáticamente

\`\`\`bash
# O usa Vercel CLI
npm install -g vercel
vercel
\`\`\`

### Netlify
1. Construye el proyecto: \`npm run build\`
2. Sube la carpeta \`dist/\` a Netlify
3. O conecta tu GitHub repo directamente

### GitHub Pages
1. Actualiza \`vite.config.js\` con tu repositorio
2. Ejecuta: \`npm run build\`
3. Sube a GitHub

## 📸 Imágenes Utilizadas

Todas las imágenes son de uso libre de:
- **Unsplash**: https://unsplash.com/
- **Pexels**: https://www.pexels.com/

Asegúrate de seguir las licencias de cada plataforma.

## 🔄 Siguientes Pasos

### 1. Integración CMS
- **Sanity**: Para gestionar contenido dinámico
- **Strapi**: CMS headless de código abierto
- **GraphQL**: Para consultas eficientes

### 2. Analíticas
- **Google Analytics 4**: Tracking de usuarios
- **Vercel Analytics**: Rendimiento del sitio

### 3. Características Adicionales
- Blog de noticias
- Sistema de inscripción en línea
- Integración con Stripe/PayPal para pagos
- WhatsApp Bot para consultas rápidas
- Calendario de entrenamientos
- Perfiles de jugadores

### 4. Mejoras de Rendimiento
- Code splitting automático
- Lazy loading de imágenes
- Caché optimizado
- PWA (Progressive Web App)

## 📝 Licencia

Este proyecto está disponible bajo licencia MIT.

## ⚖️ Nota Legal

Este sitio web utiliza imágenes de uso libre. No se utilizan logos, textos ni imágenes del FC Barcelona ni de cualquier otra marca protegida. Respeta siempre los derechos de autor y las licencias de las imágenes utilizadas.

## 💬 Soporte

Para soporte, abre un issue en el repositorio o contacta a través del formulario de la web.

---

**Desarrollado con ⚽ y pasión por el fútbol**
