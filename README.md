# CodeMentor Pro - Programming Education Platform

Una plataforma completa para aprender programación con microtutoriales, series de entrenamiento y guías de carrera profesional.

## 🚀 Características

- **Microtutoriales**: Aprende conceptos específicos en 3-8 minutos
- **Series de Entrenamiento**: Rutas estructuradas de aprendizaje
- **Guías de Carrera**: CV, portfolio y estrategias para conseguir empleo
- **Ebook**: Guía completa del programador moderno
- **Generación Automática de Contenido**: Powered by Gemini AI
- **SEO Optimizado**: Metadatos automáticos y rich snippets

## 🛠️ Tecnologías

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **AI Integration**: Google Gemini 1.5 Flash
- **Automation**: GitHub Actions
- **Database**: Neon PostgreSQL (recomendado)
- **Hosting**: Netlify (recomendado)

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn
- Cuenta de Google Cloud (para Gemini API)

### Instalación

1. Clona el repositorio
```bash
git clone <tu-repo>
cd programming-education-platform
```

2. Instala dependencias
```bash
npm install
```

3. Configura variables de entorno
```bash
cp .env.example .env.local
```

4. Obtén tu API key de Gemini:
   - Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Crea una nueva API key
   - Añádela a tu `.env.local`

5. Inicia el servidor de desarrollo
```bash
npm run dev
```

## 🤖 Automatización con IA

### Configuración de Gemini API

1. **Obtener API Key**:
   - Visita [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Crea un nuevo proyecto o usa uno existente
   - Genera una API key para Gemini
   - Copia la key y añádela a tu archivo `.env.local`

2. **Configurar GitHub Secrets** (para automatización):
   - Ve a tu repositorio en GitHub
   - Settings → Secrets and variables → Actions
   - Añade `GEMINI_API_KEY` con tu API key

### Generación Automática de Contenido

El sistema incluye automatización para:

- **Microtutoriales**: Generación semanal de 3 nuevos tutoriales
- **Actualizaciones del Ebook**: Content refresh automático
- **SEO**: Metadatos y descripciones optimizadas

### Scripts Disponibles

```bash
# Generar tutoriales manualmente
node scripts/generate-tutorials.js

# Actualizar contenido del ebook
node scripts/update-ebook.js

# Generar metadatos SEO
node scripts/generate-seo.js
```

## 📊 Estructura del Proyecto

```
├── app/                    # Next.js App Router
│   ├── tutorials/         # Página de tutoriales
│   ├── ebook/            # Página de venta del ebook
│   └── training/         # Series de entrenamiento
├── components/           # Componentes React
├── scripts/             # Scripts de automatización
├── data/               # Datos generados por IA
└── .github/workflows/  # GitHub Actions
```

## 🎯 Funcionalidades Principales

### 1. Microtutoriales
- Contenido conciso (3-8 minutos de lectura)
- Ejemplos de código funcionales
- Ejercicios prácticos
- Categorización por tecnología y nivel

### 2. Series de Entrenamiento
- Frontend Developer (HTML, CSS, JS, React, TypeScript)
- Backend Developer (PHP, Laravel, APIs, Databases)
- Career Development (CV, Portfolio, Interviews)

### 3. Ebook y Monetización
- Página de venta optimizada
- Testimonios y garantías
- Integración con Stripe (recomendado)
- Descarga automática post-compra

## 🔧 Integraciones Recomendadas

### Base de Datos (Neon)
1. Conecta [Neon MCP](#connect-neon) desde Builder.io
2. Crea tablas para tutorials, users, purchases
3. Configura la URL en variables de entorno

### Hosting (Netlify)
1. Conecta [Netlify MCP](#connect-netlify) desde Builder.io  
2. Configura despliegue automático desde GitHub
3. Configura variables de entorno en Netlify

### Email Marketing
1. Configura Mailchimp o ConvertKit
2. Crea formularios de suscripción
3. Automatiza secuencias de bienvenida

## 📈 SEO y Analíticas

- Meta tags automáticos generados con IA
- Structured data para rich snippets
- Google Analytics integrado
- Sitemap automático

## 🛡️ Seguridad

- Variables de entorno para todas las keys
- Validación de inputs
- Rate limiting en APIs
- HTTPS obligatorio en producción

## 📝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🆘 Soporte

- 📧 Email: hola@codementorpro.com
- 💬 Discord: [Comunidad CodeMentor Pro](#)
- 📚 Documentación: [Wiki del proyecto](#)

---

**¿Listo para construir tu plataforma de educación tech?** 

1. Conecta [Neon](#connect-neon) para la base de datos
2. Conecta [Netlify](#connect-netlify) para hosting  
3. Configura tu Gemini API key
4. ¡Lanza tu plataforma!
