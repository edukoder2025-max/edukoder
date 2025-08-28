'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, Award, Code, BookOpen, Layout, FileText } from 'lucide-react'
import { useProgress } from '@/contexts/ProgressContext'
import InteractiveText from '@/components/InteractiveText'
import InteractiveQuiz from '@/components/InteractiveQuiz'
import CodeBlock from '@/components/CodeBlock'

export default function HtmlSemanticoPage() {
  const { markLessonComplete, updateLessonTime, saveQuizScore, completeExercise } = useProgress()
  const [activeTab, setActiveTab] = useState<'queEs' | 'layout' | 'articulos' | 'beneficios'>('queEs')

  const lessonData = {
    series: 'Frontend Developer',
    seriesId: 'frontend-developer',
    week: 1,
    moduleId: 'week1',
    lessonId: 'html-semantico',
    title: 'HTML Semántico: Estructura con Significado',
    duration: '45 minutos',
    difficulty: 'Principiante',
    description: 'Ve más allá de los `<div>`. Aprende a usar etiquetas HTML semánticas para dar estructura y significado a tu contenido, mejorando el SEO y la accesibilidad.'
  }

  const codeExamples = {
    queEs: `<!-- Antes: "Divitis" o sopa de divs -->
<div class="header">
  <div class="nav">...</div>
</div>
<div class="main-content">
  <h1>Título</h1>
  <p>Contenido principal...</p>
</div>
<div class="footer">...</div>

<!-- Ahora: HTML Semántico ✨ -->
<!-- Cada etiqueta describe su propósito. -->
<header>
  <nav>...</nav>
</header>
<main>
  <h1>Título</h1>
  <p>Contenido principal...</p>
</main>
<footer>...</footer>`,

    layout: `<!-- Estructura de una página con etiquetas de layout -->
<body>
  <header>
    <h1>Logo de la Empresa</h1>
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <!-- El contenido principal y único de esta página -->
    <h2>Nuestro Blog</h2>
    <p>Noticias y artículos sobre nuestra industria.</p>
  </main>

  <aside>
    <!-- Contenido relacionado pero no esencial, como links o publicidad -->
    <h3>Categorías del Blog</h3>
    <ul>...</ul>
  </aside>

  <footer>
    <!-- Información del pie de página: copyright, links, etc. -->
    <p>&copy; 2024 Mi Empresa. Todos los derechos reservados.</p>
  </footer>
</body>`,

    articulos: `<!-- Estructura para contenido independiente -->
<main>
  <article>
    <h2>Cómo preparar el café perfecto</h2>
    <p>Publicado el <time datetime="2024-05-21">21 de Mayo, 2024</time></p>
    
    <p>El café es más que una bebida, es un ritual...</p>
    
    <section>
      <h3>Paso 1: Elige tus granos</h3>
      <p>La calidad del grano es fundamental...</p>
    </section>
    
    <section>
      <h3>Paso 2: La molienda</h3>
      <p>Muele los granos justo antes de preparar...</p>
    </section>

    <figure>
      <img src="/cafe.jpg" alt="Una taza de café recién hecho." />
      <figcaption>El resultado final: una taza aromática y deliciosa.</figcaption>
    </figure>
  </article>
</main>`,

    beneficios: `/* ¿Por qué usar HTML Semántico? */

// 1. SEO (Search Engine Optimization) 🚀
// Los motores de búsqueda como Google entienden mejor la estructura
// de tu página, lo que puede mejorar tu ranking.
// <nav>, <main>, <article> son pistas claras para los bots.

// 2. Accesibilidad (a11y) ♿
// Los lectores de pantalla usan estas etiquetas para navegar.
// Un usuario puede saltar directamente al <main> o a la <nav>,
// mejorando drásticamente la experiencia para personas con discapacidad visual.

// 3. Mantenibilidad y Claridad del Código 🧼
// Es más fácil para ti y otros desarrolladores entender el propósito
// de cada bloque de código.
// <header> es mucho más claro que <div id="top-banner-wrapper">.

// 4. Futuro y Dispositivos 📱⌚
// Navegadores y nuevos dispositivos (como relojes o asistentes de voz)
// pueden interpretar y presentar tu contenido de formas innovadoras
// si entienden su significado.
`
  }

  const quizData = {
    lessonId: lessonData.lessonId,
    questions: [
      {
        question: '¿Cuál es el propósito principal de la etiqueta `<main>`?',
        options: [
          'Contener la navegación principal del sitio.',
          'Representar el contenido principal y único del cuerpo de un documento.',
          'Agrupar todo el contenido visible de la página.',
          'Definir el pie de página.'
        ],
        correctAnswer: 1,
        explanation: 'La etiqueta `<main>` está diseñada para albergar el contenido dominante del `<body>` de un documento, que es único para esa página.'
      },
      {
        question: '¿Qué etiqueta usarías para un bloque de contenido independiente y reutilizable, como una entrada de blog o un comentario?',
        options: [
          '<section>',
          '<div>',
          '<article>',
          '<block>'
        ],
        correctAnswer: 2,
        explanation: '`<article>` es la etiqueta semántica correcta para contenido auto-contenido que podría ser distribuido de forma independiente, como una noticia o un post.'
      },
      {
        question: '¿Para qué se utiliza la etiqueta `<aside>`?',
        options: [
          'Para contenido de importancia crítica.',
          'Para contenido que está tangencialmente relacionado con el contenido principal.',
          'Para ocultar contenido a los lectores de pantalla.',
          'Para crear una sección lateral, siempre a la derecha.'
        ],
        correctAnswer: 1,
        explanation: '`<aside>` se usa para contenido que está relacionado con el contenido circundante pero que podría considerarse separado, como una barra lateral, glosarios o publicidad.'
      },
      {
        question: '¿Cuál de los siguientes NO es un beneficio directo del HTML semántico?',
        options: [
          'Mejora del SEO (Optimización para Motores de Búsqueda).',
          'Mejora de la accesibilidad para lectores de pantalla.',
          'Hace que la página se cargue más rápido.',
          'Código más claro y fácil de mantener.'
        ],
        correctAnswer: 2,
        explanation: 'Aunque un código limpio puede tener un impacto marginal, el HTML semántico no garantiza por sí mismo una carga más rápida. Sus beneficios principales son SEO, accesibilidad y mantenibilidad.'
      }
      ,
      {
        question: '¿Qué atributo es esencial para mejorar la accesibilidad de las imágenes?',
        options: [
          'title',
          'alt',
          'data-src',
          'role'
        ],
        correctAnswer: 1,
        explanation: 'El atributo `alt` proporciona una descripción textual de la imagen que los lectores de pantalla pueden leer.'
      },
      {
        question: '¿Cuál es la práctica recomendada al usar <section> dentro de un documento?',
        options: [
          'Usar <section> libremente sin encabezados.',
          'Cada <section> debe tener sentido independiente y preferiblemente un encabezado.',
          'Reemplazar siempre <article> por <section>.',
          'Usar <section> sólo para layout visual.'
        ],
        correctAnswer: 1,
        explanation: 'Las secciones deben ser agrupaciones temáticas que idealmente incluyan un encabezado (h1-h6) para mayor claridad y accesibilidad.'
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-center flex-grow">
              <div className="text-sm font-medium text-blue-600">{lessonData.series}</div>
              <h1 className="text-2xl font-bold text-gray-900">{lessonData.title}</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <InteractiveText
                sections={[
                  {
                    id: 'que-es',
                    title: '¿Qué es HTML semántico?',
                    paragraphs: [
                      'HTML semántico significa usar etiquetas que describen el propósito del contenido, no sólo su apariencia.',
                      'Esto ayuda a buscadores y a tecnologías de asistencia a entender tu contenido.'
                    ]
                  },
                  {
                    id: 'layout',
                    title: 'Estructura de la página',
                    paragraphs: [
                      'Usa <header>, <main>, <aside> y <footer> para estructurar tus páginas.',
                      'Evita usar divs genéricos cuando exista una etiqueta semántica apropiada.'
                    ],
                    code: `<!doctype html>\n<header>...</header>\n<main>...</main>\n<footer>...</footer>`,
                    language: 'html'
                  },
                  {
                    id: 'beneficios',
                    title: 'Beneficios',
                    paragraphs: [
                      'Mejor accesibilidad, mejor SEO, y código más claro.'
                    ]
                  }
                ]}
                onSectionRead={(id, time) => updateLessonTime(lessonData.seriesId, lessonData.moduleId, lessonData.lessonId, time)}
                onComplete={() => markLessonComplete(lessonData.seriesId, lessonData.moduleId, lessonData.lessonId)}
              />

              <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">{lessonData.difficulty}</div>
                  <div className="flex items-center text-gray-500"><Clock className="h-4 w-4 mr-1.5" />{lessonData.duration}</div>
                </div>
                <p className="text-lg text-gray-700 mb-6">{lessonData.description}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lo que aprenderás a construir:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                  <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Una estructura de página web clara y con significado.</span></div>
                  <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Layouts que son entendibles por buscadores y lectores de pantalla.</span></div>
                  <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Uso correcto de {'<article>'}, {'<section>'} y {'<aside>'}.</span></div>
                  <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Mejorar la accesibilidad y el SEO de tus proyectos.</span></div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex border-b border-gray-200">
                  {(Object.keys(codeExamples) as Array<keyof typeof codeExamples>).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-3 font-medium text-sm transition-colors duration-200 ${
                        activeTab === tab
                          ? 'border-b-2 border-blue-600 text-blue-600'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab === 'queEs' && '¿Qué es?'}
                      {tab === 'layout' && 'Layout Principal'}
                      {tab === 'articulos' && 'Artículos y Secciones'}
                      {tab === 'beneficios' && 'Beneficios'}
                    </button>
                  ))}
                </div>
                <div className="bg-gray-900 rounded-b-lg">
                  <CodeBlock code={codeExamples[activeTab]} language={activeTab === 'beneficios' ? 'css' : 'html'} />
                </div>
              </div>

              <InteractiveQuiz quizData={quizData} onQuizComplete={(score) => saveQuizScore(lessonData.seriesId, lessonData.moduleId, lessonData.lessonId, score)} />
            </div>

            <aside className="lg:col-span-4 lg:sticky top-8 self-start">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recursos de la Lección</h3>
                <div className="space-y-3">
                  <a href="https://developer.mozilla.org/es/docs/Glossary/Semantics" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"><BookOpen className="h-4 w-4 mr-2" />MDN: Semántica en HTML</a>
                  <a href="https://www.w3schools.com/html/html5_semantic_elements.asp" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"><Layout className="h-4 w-4 mr-2" />W3Schools: Elementos Semánticos</a>
                  <a href="https://html.spec.whatwg.org/multipage/sections.html" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"><FileText className="h-4 w-4 mr-2" />Especificación oficial de HTML</a>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium text-gray-900 mb-3">Proyecto Práctico</h4>
                  <p className="text-sm text-gray-600 mb-4">Refactoriza una página simple (hecha con `divs`) para que use etiquetas semánticas.</p>
                  <button onClick={() => completeExercise(lessonData.seriesId, lessonData.moduleId, lessonData.lessonId)} className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Marcar como completado
                  </button>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-12 flex justify-end">
            <Link 
              href="/training/frontend-developer/week2/css-moderno" 
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Siguiente Lección: CSS Moderno
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}