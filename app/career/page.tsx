'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Download, CheckCircle, Users, Star, ArrowRight, FileText, Briefcase, DollarSign, Network, Eye, Calculator } from 'lucide-react'
import Modal from '@/components/Modal'
import RateCalculator from '@/components/RateCalculator'

export default function CareerPage() {
  const [activeModal, setActiveModal] = useState<string | null>(null)
  const [downloadingGuide, setDownloadingGuide] = useState<string | null>(null)

  const careerGuides = [
    {
      id: 'cv-optimization',
      title: 'CV Técnico Optimizado',
      description: 'Crea un CV que pase los sistemas ATS y llame la atención de recruiters tech',
      icon: FileText,
      benefits: [
        'Plantillas ATS-friendly',
        'Keywords específicas por rol',
        'Sección de proyectos destacados',
        'Optimización para LinkedIn'
      ],
      downloadCount: '15,000+',
      rating: 4.9,
      color: 'from-blue-500 to-blue-600',
      previewContent: `
# CV Técnico Optimizado - Vista Previa

## 📋 Contenido de la Guía

### 1. Estructura ATS-Friendly
- Formato que pasa filtros automáticos
- Secciones obligatorias y opcionales
- Longitud ideal por sección

### 2. Keywords por Tecnología
- Frontend: React, Vue, Angular, TypeScript
- Backend: Node.js, Python, Java, PHP
- DevOps: AWS, Docker, Kubernetes
- Mobile: React Native, Flutter

### 3. Sección de Proyectos
- Cómo describir proyectos técnicos
- Métricas de impacto
- Links a demos y repositorios

### 4. Optimización LinkedIn
- Sincronización CV-LinkedIn
- Keywords para búsquedas
- Recomendaciones estratégicas

## 🎯 Ejemplo de Proyecto Optimizado

**E-commerce React con Stripe**
- Desarrollé plataforma de e-commerce usando React, Next.js y Stripe
- Implementé carrito de compras, checkout y panel admin
- Optimicé performance: 95% Lighthouse score
- Resultado: 40% aumento en conversiones
- Tech stack: React, Next.js, TypeScript, Stripe, MongoDB
- [Demo](link) | [Código](github)

## ✅ Checklist Final
- [ ] Formato ATS-compatible
- [ ] Keywords relevantes incluidas
- [ ] Proyectos con métricas
- [ ] Enlaces funcionando
- [ ] Menos de 2 páginas
      `
    },
    {
      id: 'portfolio-development',
      title: 'Portfolio que Convierte',
      description: 'Construye un portfolio que demuestre tus habilidades y consiga entrevistas',
      icon: Briefcase,
      benefits: [
        'Estructura de proyectos efectiva',
        'Casos de estudio detallados',
        'GitHub profile optimization',
        'Hosting y dominio profesional'
      ],
      downloadCount: '12,500+',
      rating: 4.8,
      color: 'from-purple-500 to-purple-600',
      previewContent: `
# Portfolio que Convierte - Vista Previa

## 🎨 Estructura Efectiva

### 1. Página Principal
- Hero section con elevator pitch
- Tecnologías principales (iconos)
- Call-to-action claro
- Proyectos destacados (3 máximo)

### 2. Página de Proyectos
- Grid de proyectos con filtros
- Cada proyecto: imagen, descripción, tech stack
- Links a demo y código
- Caso de estudio detallado

### 3. Sobre Mí
- Historia personal breve
- Pasión por tecnología
- Objetivos profesionales
- Foto profesional

### 4. Contacto
- Formulario funcional
- Links a redes sociales
- Disponibilidad para trabajo
- CV descargable

## 🚀 Ejemplo de Caso de Estudio

**TaskMaster - App de Productividad**

**El Problema:** Los freelancers necesitan mejor organización
**La Solución:** App web con timer Pomodoro y tracking de tareas
**Mi Rol:** Full Stack Developer (proyecto personal)

**Proceso:**
1. Research: Encuestas a 50 freelancers
2. Diseño: Wireframes en Figma
3. Development: React + Node.js + MongoDB
4. Testing: Tests automatizados con Jest
5. Deploy: Vercel + Railway

**Resultados:**
- 500+ usuarios en primer mes
- 4.8/5 rating en Product Hunt
- Featured en newsletter de Indie Hackers

**Tech Stack:** React, TypeScript, Node.js, MongoDB, Socket.io

[Ver Demo](link) | [Código](github) | [Caso de Estudio Completo](link)
      `
    },
    {
      id: 'interview-preparation',
      title: 'Preparación de Entrevistas',
      description: 'Domina las entrevistas técnicas y de comportamiento en empresas tech',
      icon: Users,
      benefits: [
        'Preguntas frecuentes por tecnología',
        'Coding challenges resueltos',
        'Mock interviews grabadas',
        'Técnicas de comunicación'
      ],
      downloadCount: '18,200+',
      rating: 4.9,
      color: 'from-green-500 to-green-600',
      previewContent: `
# Preparación de Entrevistas - Vista Previa

## 🎯 Tipos de Entrevistas

### 1. Entrevista Técnica
**Preguntas Frecuentes:**
- "Explica la diferencia entre let, const y var"
- "¿Cómo funciona el event loop en JavaScript?"
- "¿Qué es el virtual DOM y por qué es útil?"
- "Diferencias entre SQL y NoSQL"

**Coding Challenges Comunes:**
- FizzBuzz (calentamiento)
- Reverse string/array
- Find duplicates in array
- Implement debounce function
- API fetch with error handling

### 2. Entrevista de Comportamiento
**Framework STAR:** Situation, Task, Action, Result

**Preguntas Típicas:**
- "Cuéntame sobre un proyecto desafiante"
- "¿Cómo manejas deadlines ajustados?"
- "Describe una vez que tuviste que aprender algo nuevo rápidamente"

### 3. System Design (Senior+)
- Diseño de API REST
- Arquitectura de base de datos
- Consideraciones de escalabilidad
- Trade-offs técnicos

## 💡 Ejemplo de Respuesta STAR

**Pregunta:** "Describe un bug difícil que resolviste"

**Situation:** En mi proyecto de e-commerce, los usuarios reportaban que el carrito se vaciaba aleatoriamente.

**Task:** Necesitaba encontrar y arreglar el bug sin afectar la funcionalidad existente.

**Action:** 
1. Reproduje el bug en desarrollo
2. Analicé logs del servidor y cliente
3. Descubrí que era un race condition en localStorage
4. Implementé debouncing para las actualizaciones
5. Agregué tests para prevenir regresiones

**Result:** Bug resuelto, 0 reportes adicionales, mejoré la arquitectura del state management.

## 🗣️ Tips de Comunicación
- Piensa en voz alta durante coding
- Pregunta clarificaciones
- Explica tu razonamiento
- Admite cuando no sabes algo
- Propone alternativas
      `
    },
    {
      id: 'salary-negotiation',
      title: 'Negociación Salarial',
      description: 'Estrategias para negociar salarios y benefits como un profesional',
      icon: DollarSign,
      benefits: [
        'Research de mercado salarial',
        'Scripts de negociación',
        'Timing perfecto para negociar',
        'Benefits más allá del salario'
      ],
      downloadCount: '9,800+',
      rating: 4.7,
      color: 'from-yellow-500 to-orange-500',
      previewContent: `
# Negociación Salarial - Vista Previa

## 💰 Research de Mercado

### Fuentes Confiables:
- **Glassdoor:** Salarios por empresa y ubicación
- **Levels.fyi:** Rangos detallados por nivel
- **Stack Overflow Survey:** Tendencias anuales
- **LinkedIn Salary:** Datos regionalizados
- **AngelList:** Startups y equity

### Factores que Afectan Salario:
- Años de experiencia
- Stack tecnológico
- Tamaño de empresa
- Ubicación (remoto/presencial)
- Industria (fintech, e-commerce, etc.)

## 🎯 Scripts de Negociación

### Inicial:
"Gracias por la oferta. Estoy muy emocionado por la oportunidad. Basado en mi investigación de mercado y experiencia, esperaba un rango de $X - $Y. ¿Hay flexibilidad en la compensación?"

### Contraofertas:
"Aprecio la oferta revisada. Para llegar a un acuerdo, ¿podrían considerar $X, o incluir [beneficio específico]?"

### Múltiples Ofertas:
"Tengo otra oferta que valoro en $X total. [Esta empresa] es mi primera opción. ¿Hay manera de igualar o superar esa oferta?"

## 📊 Tabla de Negociación

| Beneficio | Valor Estimado | Negociabilidad |
|-----------|----------------|----------------|
| Salario base | 100% | Alta |
| Equity/Stock options | 10-30% | Media |
| Bonus anual | 10-20% | Alta |
| Vacaciones extras | $2k-5k | Alta |
| Presupuesto formación | $1k-3k | Alta |
| Setup remoto | $1k-2k | Media |
| Seguro premium | $2k-4k | Baja |

## ⏰ Timing Perfecto

**Cuándo NO negociar:**
- Primera conversación
- Durante entrevistas técnicas
- Si no tienes leverage

**Cuándo SÍ negociar:**
- Después de la oferta formal
- Con múltiples ofertas
- Al renovar contrato
- Después de promotion/raise cycle

## 🔥 Ejemplo Real

**Situación:** Oferta inicial $60k, esperaba $70k

**Estrategia:**
1. "Gracias por la oferta. Muy emocionado por el rol."
2. "Basado en mi experiencia con React y Node.js, y el mercado actual, esperaba $70k."
3. "¿Hay flexibilidad en el salario base?"

**Resultado:** $67k + $2k presupuesto formación + 1 semana vacaciones extra

**Total value:** ~$70k equivalente
      `
    }
  ]

  const testimonials = [
    {
      name: 'Laura Rodríguez',
      role: 'Frontend Developer en Microsoft',
      content: 'Siguiendo la guía de CV conseguí 8 entrevistas en 2 semanas. Mi salario inicial fue 40% más alto de lo esperado.',
      avatar: '👩‍💻'
    },
    {
      name: 'Carlos Mendoza',
      role: 'Full Stack Developer',
      content: 'El portfolio guide me ayudó a estructurar mis proyectos de forma profesional. Ahora los recruiters me contactan a mí.',
      avatar: '👨‍💻'
    },
    {
      name: 'Ana Torres',
      role: 'DevOps Engineer en AWS',
      content: 'Las técnicas de entrevista fueron game-changer. Pasé de nervioso a confiado en mis technical interviews.',
      avatar: '👩‍🔧'
    }
  ]

  const careerStats = [
    { label: 'Empleos Conseguidos', value: '2,500+' },
    { label: 'Incremento Salarial Promedio', value: '45%' },
    { label: 'Tiempo Promedio de Búsqueda', value: '6 semanas' },
    { label: 'Tasa de Éxito', value: '87%' }
  ]

  const handleDownload = async (guideId: string) => {
    setDownloadingGuide(guideId)
    
    // Simulate download process
    setTimeout(() => {
      // In a real app, this would download the actual file
      alert(`Descargando guía: ${careerGuides.find(g => g.id === guideId)?.title}`)
      setDownloadingGuide(null)
    }, 2000)
  }

  const openPreview = (guideId: string) => {
    setActiveModal(`preview-${guideId}`)
  }

  const openCalculator = () => {
    setActiveModal('calculator')
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Guías de{' '}
              <span className="text-yellow-300">Carrera Tech</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-green-100">
              Estrategias probadas para conseguir tu primer empleo tech, 
              negociar salarios y acelerar tu crecimiento profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="#guides" className="btn-secondary inline-flex items-center">
                Ver Todas las Guías
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link href="/ebook" className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-green-600 transition-colors">
                Descargar Ebook Completo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Resultados que hablan por sí solos
            </h2>
            <p className="text-xl text-gray-600">
              Miles de desarrolladores han transformado su carrera con nuestras guías
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careerStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Guides */}
      <section id="guides" className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Guías Especializadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada guía está diseñada para resolver un aspecto específico de tu desarrollo profesional
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {careerGuides.map((guide) => {
              const Icon = guide.icon
              return (
                <div key={guide.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className={`h-4 bg-gradient-to-r ${guide.color}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${guide.color} rounded-lg flex items-center justify-center mr-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{guide.title}</h3>
                        <div className="flex items-center text-sm text-gray-500">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="mr-3">{guide.rating}/5</span>
                          <span>{guide.downloadCount} descargas</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">
                      {guide.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {guide.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button 
                        onClick={() => handleDownload(guide.id)}
                        disabled={downloadingGuide === guide.id}
                        className="btn-primary flex-1 disabled:opacity-50"
                      >
                        {downloadingGuide === guide.id ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Descargando...
                          </div>
                        ) : (
                          <>
                            <Download className="h-4 w-4 mr-2" />
                            Descargar Gratis
                          </>
                        )}
                      </button>
                      <button 
                        onClick={() => openPreview(guide.id)}
                        className="border-2 border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:border-green-600 hover:text-green-600 transition-colors"
                      >
                        <Eye className="h-4 w-4 mr-1 inline" />
                        Vista Previa
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Historias de Éxito
            </h2>
            <p className="text-xl text-gray-600">
              Desarrolladores reales que transformaron su carrera
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-teal-400 rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Calculadora de Tarifas Freelance
              </h2>
              <p className="text-xl text-gray-600">
                Herramienta gratuita para calcular tus tarifas como freelancer
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 border border-green-200">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    ¿Cuánto deberías cobrar?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Cálculo basado en experiencia</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Ajuste por mercado local</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Comparación con el mercado</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>Tips de negociación incluidos</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-center">
                    <div className="text-4xl mb-4">💰</div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Calculadora Interactiva
                    </h4>
                    <p className="text-gray-600 mb-6">
                      Descubre tu tarifa ideal en menos de 2 minutos
                    </p>
                    <button 
                      onClick={openCalculator}
                      className="btn-secondary w-full"
                    >
                      <Calculator className="h-5 w-5 mr-2" />
                      Usar Calculadora
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Acelera tu carrera tech hoy mismo
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Descarga nuestro ebook completo y accede a todas las guías, 
            plantillas y recursos para transformar tu carrera.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ebook" className="inline-flex items-center bg-yellow-400 text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-yellow-300 transition-colors">
              <Download className="h-6 w-6 mr-2" />
              Descargar Ebook - $29
            </Link>
            <Link href="/training" className="inline-flex items-center border-2 border-gray-400 text-gray-300 font-semibold py-4 px-8 rounded-lg hover:border-white hover:text-white transition-colors">
              Ver Series de Entrenamiento
            </Link>
          </div>
        </div>
      </section>

      {/* Modals */}
      {careerGuides.map(guide => (
        <Modal
          key={`modal-${guide.id}`}
          isOpen={activeModal === `preview-${guide.id}`}
          onClose={closeModal}
          title={`Vista Previa: ${guide.title}`}
          size="lg"
        >
          <div className="prose prose-gray max-w-none">
            <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-4 rounded-lg overflow-auto max-h-96">
              {guide.previewContent}
            </pre>
          </div>
          <div className="mt-6 flex gap-3">
            <button 
              onClick={() => {
                closeModal()
                handleDownload(guide.id)
              }}
              className="btn-primary"
            >
              <Download className="h-4 w-4 mr-2" />
              Descargar Guía Completa
            </button>
            <button onClick={closeModal} className="btn-secondary">
              Cerrar
            </button>
          </div>
        </Modal>
      ))}

      <Modal
        isOpen={activeModal === 'calculator'}
        onClose={closeModal}
        title="Calculadora de Tarifas Freelance"
        size="xl"
      >
        <RateCalculator />
      </Modal>
    </div>
  )
}
