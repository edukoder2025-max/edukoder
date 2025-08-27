# CodeMentor Pro - Setup Guide

Guía completa para configurar tu plataforma de educación en programación con todas las integraciones.

## 📋 Checklist de Setup

### 1. ✅ Base del Proyecto
- [x] Next.js 14 con TypeScript
- [x] Tailwind CSS configurado
- [x] Componentes UI completados
- [x] Páginas principales creadas

### 2. 🗄️ Base de Datos (Neon)

**Paso 1: Conectar Neon**
1. En Builder.io, clic en [Connect to Neon](#open-mcp-popover)
2. Sigue las instrucciones para conectar tu proyecto
3. Copia la DATABASE_URL desde Neon dashboard

**Paso 2: Ejecutar Schema**
```bash
# Ejecuta el schema en tu base de datos Neon
psql $DATABASE_URL -f database/schema.sql
```

**Paso 3: Configurar Variables**
```env
DATABASE_URL=postgresql://user:password@host:5432/database?sslmode=require
```

### 3. 💳 Pagos (Stripe)

**Paso 1: Crear cuenta Stripe**
1. Ve a [Stripe Dashboard](https://dashboard.stripe.com)
2. Crea una cuenta o inicia sesión
3. Obtén las API keys desde "Developers > API keys"

**Paso 2: Configurar Webhooks**
1. En Stripe Dashboard: "Developers > Webhooks"
2. Añadir endpoint: `https://tudominio.com/api/webhooks/stripe`
3. Eventos a escuchar:
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`

**Paso 3: Variables de entorno**
```env
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### 4. 📧 Email (Resend)

**Paso 1: Crear cuenta Resend**
1. Ve a [Resend](https://resend.com)
2. Crea cuenta y verifica dominio
3. Obtén API key desde dashboard

**Paso 2: Configurar dominio**
1. Añade tu dominio en Resend
2. Configura registros DNS
3. Verifica dominio

**Paso 3: Variables de entorno**
```env
RESEND_API_KEY=re_...
```

### 5. 🤖 IA (Gemini)

**Paso 1: Obtener API Key**
1. Ve a [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Crea nuevo proyecto o usa existente
3. Genera API key para Gemini

**Paso 2: Variables de entorno**
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 6. 🚀 Hosting (Netlify)

**Opción A: Desde Builder.io**
1. Clic en [Connect to Netlify](#open-mcp-popover)
2. Autoriza la conexión
3. Configura auto-deploy desde GitHub

**Opción B: Manual**
1. Ve a [Netlify](https://netlify.com)
2. Conecta tu repositorio GitHub
3. Configura build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

**Variables de entorno en Netlify:**
```
DATABASE_URL=...
STRIPE_SECRET_KEY=...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=...
STRIPE_WEBHOOK_SECRET=...
RESEND_API_KEY=...
GEMINI_API_KEY=...
```

## 🔧 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Generar tutoriales con IA
node scripts/generate-tutorials.js

# Actualizar ebook
node scripts/update-ebook.js
```

## 📊 Testing de Integraciones

### Base de Datos
```bash
# Test conexión a BD
node -e "
const { query } = require('./lib/database.ts');
query('SELECT NOW()').then(r => console.log('DB OK:', r.rows[0]));
"
```

### Stripe
```bash
# Test Stripe (modo test)
curl -X POST http://localhost:3000/api/payments/create-intent \
  -H "Content-Type: application/json" \
  -d '{"productId":"EBOOK","userEmail":"test@example.com"}'
```

### Email
```bash
# Test email
node -e "
const { sendWelcomeEmail } = require('./lib/email.ts');
sendWelcomeEmail('test@example.com', 'Test User').then(console.log);
"
```

### IA
```bash
# Test Gemini
node scripts/generate-tutorials.js
```

## 🛡️ Seguridad

### Variables de Producción
- ✅ Usa `STRIPE_SECRET_KEY` real (empieza con `sk_live_`)
- ✅ Configura `STRIPE_WEBHOOK_SECRET` de producción
- ✅ Usa dominio verificado en Resend
- ✅ Restringe `GEMINI_API_KEY` por dominio

### Headers de Seguridad
Configurados automáticamente en `netlify.toml`:
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff

## 📈 Monitoreo

### Analytics
1. Crea cuenta Google Analytics
2. Añade `GOOGLE_ANALYTICS_ID` a variables de entorno
3. El tracking se activa automáticamente

### Logs de Errores
- Stripe webhooks: Dashboard > Logs
- Email delivery: Resend dashboard
- Base de datos: Neon dashboard
- Aplicación: Netlify functions logs

## 🆘 Troubleshooting

### Error: "Database connection failed"
- ✅ Verifica `DATABASE_URL` format
- ✅ Revisa firewall/IP restrictions en Neon
- ✅ Confirma SSL mode en connection string

### Error: "Stripe webhook verification failed"
- ✅ Verifica `STRIPE_WEBHOOK_SECRET`
- ✅ Confirma endpoint URL en Stripe dashboard
- ✅ Revisa eventos seleccionados

### Error: "Email not sending"
- ✅ Verifica `RESEND_API_KEY`
- ✅ Confirma dominio verificado
- ✅ Revisa limits de Resend

### Error: "Gemini API failed"
- ✅ Verifica `GEMINI_API_KEY`
- ✅ Confirma quotas/limits en Google Cloud
- ✅ Revisa formato de requests

## 🎯 Próximos Pasos

1. **Contenido**: Usa IA para generar tutoriales iniciales
2. **SEO**: Configura sitemap y meta tags
3. **Analytics**: Setup tracking de conversiones
4. **Marketing**: Configura campaigns de email
5. **Escalabilidad**: Considera CDN para assets

---

## 💡 Tips de Optimización

### Performance
- Usa `next/image` para imágenes
- Implementa ISR para páginas estáticas
- Configura CDN en Netlify

### SEO
- Genera sitemap automático
- Usa metadata dinámico
- Implementa structured data

### Conversiones
- A/B test precios del ebook
- Optimiza landing pages
- Implementa exit-intent popups

¿Necesitas ayuda? Crea un issue en GitHub o contacta soporte.
