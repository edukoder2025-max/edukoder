'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Code, BookOpen, LayoutDashboard, Grid } from 'lucide-react'
import { useProgress } from '@/contexts/ProgressContext'
import InteractiveText from '@/components/InteractiveText'
import InteractiveQuiz from '@/components/InteractiveQuiz'
import CodeBlock from '@/components/CodeBlock'

export default function CssModernoPage() {
  const { markLessonComplete, updateLessonTime, saveQuizScore, completeExercise } = useProgress()
  const [activeTab, setActiveTab] = useState<'flexbox' | 'flexItems' | 'grid' | 'gridItems'>('flexbox')

  const lessonData = {
    series: 'Frontend Developer',
    seriesId: 'frontend-developer',
    week: 2,
    moduleId: 'week2',
    lessonId: 'css-moderno',
    title: 'CSS Moderno: Flexbox y Grid',
    duration: '75 minutos',
    difficulty: 'Principiante-Intermedio',
    description: 'Domina los layouts modernos. Aprende a alinear y distribuir elementos con Flexbox y a crear complejas retículas bidimensionales con CSS Grid.'
  }

  const codeExamples = {
    flexbox: `/* --- Flexbox: El superpoder para alinear en 1D --- */
/* Se usa para distribuir elementos en una fila o columna. */

.contenedor-flex {
  display: flex; /* ¡Activa la magia! */
  
  /* --- Propiedades del Contenedor --- */

  /* flex-direction: Define el eje principal (dónde se alinean los items) */
  flex-direction: row; /* row | row-reverse | column | column-reverse */

  /* justify-content: Alinea los items en el EJE PRINCIPAL */
  justify-content: space-between; /* flex-start | flex-end | center | space-between | space-around */

  /* align-items: Alinea los items en el EJE TRANSVERSAL */
  align-items: center; /* stretch | flex-start | flex-end | center | baseline */

  /* flex-wrap: Permite que los items salten a la siguiente línea si no caben */
  flex-wrap: wrap; /* nowrap | wrap | wrap-reverse */

  /* gap: Espacio entre los items */
  gap: 16px;
}

/* Ejemplo de uso en HTML:
<div class="contenedor-flex">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
*/`,

    flexItems: `/* --- Propiedades para los Hijos (Flex Items) --- */

.item-flex {
  /* flex-grow: ¿Cuánto puede crecer un item si hay espacio extra? */
  /* Un valor de 1 significa que tomará una parte igual del espacio sobrante. */
  flex-grow: 1; /* por defecto es 0 */

  /* flex-shrink: ¿Cuánto puede encogerse un item si no hay espacio? */
  flex-shrink: 1; /* por defecto es 1 */

  /* flex-basis: El tamaño "ideal" o inicial del item antes de distribuir el espacio. */
  flex-basis: 200px; /* auto | <longitud> */

  /* Shorthand: flex: <grow> <shrink> <basis> */
  /* flex: 1 1 200px; es lo mismo que lo de arriba */
  flex: 1; /* Abreviatura común para flex: 1 1 0% */
}

.item-especial {
  /* order: Cambia el orden visual de los items. */
  order: -1; /* por defecto es 0. Un valor más bajo va primero. */

  /* align-self: Sobrescribe el 'align-items' del contenedor para un solo item. */
  align-self: flex-end; /* auto | flex-start | flex-end | center | baseline | stretch */
}`,

    grid: `/* --- CSS Grid: El maestro de los layouts en 2D --- */
/* Perfecto para layouts complejos de filas Y columnas. */

.contenedor-grid {
  display: grid;

  /* --- Definiendo la Retícula (Grid) --- */

  /* grid-template-columns: Define el número y tamaño de las columnas. */
  /* 3 columnas: la primera de 100px, la segunda toma el espacio sobrante (1fr), */
  /* y la tercera es del tamaño de su contenido. */
  grid-template-columns: 100px 1fr auto;

  /* Usando repeat() para patrones: 4 columnas de igual tamaño. */
  grid-template-columns: repeat(4, 1fr);

  /* grid-template-rows: Define el número y tamaño de las filas. */
  grid-template-rows: 100px 300px; /* 2 filas de tamaños específicos */

  /* gap: Espacio entre las celdas de la retícula. */
  gap: 20px; /* row-gap y column-gap */
}

/* Ejemplo de uso en HTML:
<div class="contenedor-grid">
  <div class="item-grid">1</div>
  <div class="item-grid">2</div>
  <div class="item-grid">3</div>
  <div class="item-grid">4</div>
</div>
*/`,

    gridItems: `/* --- Propiedades para los Hijos (Grid Items) --- */
/* Los items se colocan en la retícula usando líneas de grid. */
/* Una retícula de 3 columnas tiene 4 líneas de columna (1 | 2 | 3 | 4) */

.item-grid-especial {
  /* --- Posicionamiento en Columnas --- */

  /* Empieza en la línea de columna 1 y termina ANTES de la línea 3 (ocupa 2 columnas) */
  grid-column-start: 1;
  grid-column-end: 3;

  /* Shorthand para columnas: <start> / <end> */
  grid-column: 1 / 3;

  /* Shorthand para ocupar 2 columnas: <start> / span <número de columnas> */
  grid-column: 1 / span 2;


  /* --- Posicionamiento en Filas --- */

  /* Empieza en la línea de fila 2 y termina ANTES de la línea 4 (ocupa 2 filas) */
  grid-row-start: 2;
  grid-row-end: 4;

  /* Shorthand para filas: <start> / <end> */
  grid-row: 2 / 4;
}`
  }

  const quizData = {
    lessonId: lessonData.lessonId,
    questions: [
      {
        question: '¿Qué propiedad de Flexbox se usa para alinear los items a lo largo del eje principal?',
        options: [
          'align-items',
          'flex-direction',
          'justify-content',
          'align-content'
        ],
        correctAnswer: 2,
        explanation: '`justify-content` distribuye el espacio y alinea los items a lo largo del eje principal (main axis).'
      },
      {
        question: 'Si quieres que un flex item ocupe todo el espacio sobrante en el contenedor, ¿qué propiedad usarías?',
        options: [
          'flex-shrink: 0;',
          'flex-basis: 100%;',
          'flex-grow: 1;',
          'align-self: stretch;'
        ],
        correctAnswer: 2,
        explanation: '`flex-grow: 1;` le dice al item que "crezca" para ocupar cualquier espacio disponible en el contenedor flex.'
      },
      {
        question: '¿Cuál es la forma correcta de crear una retícula (grid) de 3 columnas de igual ancho?',
        options: [
          'grid-columns: 1fr 1fr 1fr;',
          'grid-template-columns: 33.3% 33.3% 33.3%;',
          'grid-template-columns: repeat(3, 1fr);',
          'display: grid(3, 1fr);'
        ],
        correctAnswer: 2,
        explanation: '`grid-template-columns: repeat(3, 1fr);` es la forma moderna y eficiente de definir 3 columnas que comparten el espacio disponible por igual (1fr = una unidad de fracción).'
      },
      {
        question: 'En CSS Grid, ¿cómo haces que un item ocupe desde la primera hasta la tercera línea de columna?',
        options: [
          'grid-column: span 3;',
          'grid-column: 1 / 3;',
          'grid-template-columns: 1 / 3;',
          'column-span: 1-3;'
        ],
        correctAnswer: 1,
        explanation: 'La sintaxis `grid-column: 1 / 3;` le indica al item que comience en la línea de grid 1 y termine justo antes de la línea de grid 3, ocupando así las dos primeras columnas.'
      }
      ,
      {
        question: '¿Qué técnica permite crear columnas que se adaptan al ancho disponible usando Grid?',
        options: [
          'flex-wrap: wrap;',
          'repeat(auto-fit, minmax(200px, 1fr))',
          'grid-template-rows: auto;',
          'justify-items: stretch;'
        ],
        correctAnswer: 1,
        explanation: 'La combinación `repeat(auto-fit | auto-fill, minmax(min, max))` con Grid crea columnas que se adaptan automáticamente al espacio disponible.'
      },
      {
        question: 'Si deseas que un elemento no se encoja en Flexbox, ¿qué propiedad usarías?',
        options: [
          'flex-grow: 0;',
          'flex-shrink: 0;',
          'flex-basis: auto;',
          'align-self: stretch;'
        ],
        correctAnswer: 1,
        explanation: '`flex-shrink: 0;` evita que un elemento se reduzca cuando el espacio es limitado.'
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
                    id: 'flexbox',
                    title: 'Introducción a Flexbox',
                    paragraphs: [
                      'Flexbox es un modelo de layout pensado para distribuir espacio y alinear elementos en una sola dimensión (fila o columna).',
                      'El contenedor flex controla el eje principal (main axis) y el eje transversal (cross axis). Comprender esos ejes te ayuda a razonar sobre las propiedades que afectan alineación y orden.',
                      'Casos comunes: barras de navegación, cards alineadas, filas de botones y layouts que deben adaptarse a distinto ancho de pantalla.',
                      'Tip: para centrar un elemento en ambos ejes con Flexbox usa: display:flex; justify-content:center; align-items:center; — funciona tanto para filas como para columnas.'
                    ],
                    code: `.centro-ambos {
  display: flex;
  justify-content: center; /* centro en el eje principal */
  align-items: center;    /* centro en el eje transversal */
  height: 200px;
}

/* Ejemplo: cabecera con logo a la izquierda y acciones a la derecha */
.header { display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; }`,
                    language: 'css'
                  },
                  {
                    id: 'flex-advanced',
                    title: 'Flexbox avanzado: grow, shrink y trucos prácticos',
                    paragraphs: [
                      'flex-grow, flex-shrink y flex-basis permiten controlar cómo cada item toma espacio disponible o se reduce en pantallas pequeñas. Practica combinando estos valores para crear layouts fluidos.',
                      'Ejemplo práctico: tarjetas donde una tarjeta debe tomar todo el espacio sobrante mientras otras mantienen un ancho mínimo.',
                      'Orden visual: la propiedad order cambia la posición sin alterar el DOM — útil para reordenar elementos en distintos breakpoints.'
                    ],
                    code: `.card { flex: 1 1 220px; /* puede crecer, puede encogerse, base 220px */ }
.card--wide { flex: 2 1 300px; }
/* Mantener un footer pegado al fondo de un layout vertical */
.container-col { display: flex; flex-direction: column; min-height: 100vh; }
.content { flex: 1; }
footer { /* se queda al final */ }`,
                    language: 'css'
                  },
                  {
                    id: 'grid',
                    title: 'Introducción a CSS Grid',
                    paragraphs: [
                      'CSS Grid es una herramienta potente para layouts bidimensionales: filas y columnas. Usa Grid cuando necesites controlar ambos ejes simultáneamente.',
                      'grid-template-columns y grid-template-rows definen la estructura, pero propiedades como gap, align-content y justify-items te ayudan a pulir la disposición.',
                      'Minmax y repeat() permiten crear grillas responsivas con reglas simples: grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); crea columnas que ocupan al menos 200px y se ajustan en pantallas grandes.'
                    ],
                    code: `.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}

/* named areas para layout de cabecera */
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`,
                    language: 'css'
                  },
                  {
                    id: 'grid-advanced',
                    title: 'Grid avanzado: auto-fill, minmax y areas',
                    paragraphs: [
                      'auto-fill/auto-fit combinados con minmax permiten crear rejillas que "llenan" el espacio disponible con el número adecuado de columnas según el ancho.',
                      'Las grid areas hacen que el HTML se mantenga legible; puedes nombrar zonas y reorganizarlas fácilmente en distintos breakpoints con media queries.',
                      'Ejemplo: un layout con barra lateral que colapsa encima del contenido en pantallas estrechas usando grid-template-areas condicionales.'
                    ],
                    code: `/* Ejemplo: grid responsivo con auto-fill */
.responsive {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 18px;
}

/* Media query para reconfigurar areas */
@media (max-width: 768px) {
  .layout {
    grid-template-columns: 1fr;
    grid-template-areas: "header" "main" "sidebar" "footer";
  }
}`,
                    language: 'css'
                  }
                ]}
                onSectionRead={(id, time) => updateLessonTime(lessonData.seriesId, lessonData.moduleId, lessonData.lessonId, time)}
                onComplete={() => markLessonComplete(lessonData.seriesId, lessonData.moduleId, lessonData.lessonId)}
              />

              <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">{lessonData.difficulty}</div>
                  <div className="flex items-center text-gray-500"><Clock className="h-4 w-4 mr-1.5" />{lessonData.duration}</div>
                </div>
                <p className="text-lg text-gray-700 mb-6">{lessonData.description}</p>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Lo que dominarás:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                  <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Alineación y distribución de elementos con Flexbox.</span></div>
                  <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Creación de layouts complejos de dos dimensiones con Grid.</span></div>
                  <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Controlar el tamaño y orden de los elementos flexibles.</span></div>
                  <div className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" /><span>Posicionamiento preciso de items en una retícula.</span></div>
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
                      {tab === 'flexbox' && 'Flexbox Contenedor'}
                      {tab === 'flexItems' && 'Flexbox Items'}
                      {tab === 'grid' && 'Grid Contenedor'}
                      {tab === 'gridItems' && 'Grid Items'}
                    </button>
                  ))}
                </div>
                <div className="bg-gray-900 rounded-b-lg">
          <CodeBlock code={codeExamples[activeTab]} language="css" />
                </div>
              </div>

        <InteractiveQuiz quizData={quizData} onQuizComplete={(score) => saveQuizScore(lessonData.seriesId, lessonData.moduleId, lessonData.lessonId, score)} />
            </div>

            <aside className="lg:col-span-4 lg:sticky top-8 self-start">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recursos de la Lección</h3>
                <div className="space-y-3">
                  <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"><LayoutDashboard className="h-4 w-4 mr-2" />Guía Completa de Flexbox</a>
                  <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"><Grid className="h-4 w-4 mr-2" />Guía Completa de Grid</a>
                  <a href="https://flexboxfroggy.com/#es" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"><BookOpen className="h-4 w-4 mr-2" />Flexbox Froggy (Juego)</a>
                  <a href="https://cssgridgarden.com/#es" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"><BookOpen className="h-4 w-4 mr-2" />Grid Garden (Juego)</a>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-medium text-gray-900 mb-3">Proyecto Práctico</h4>
                  <p className="text-sm text-gray-600 mb-4">Crea una galería de tarjetas y un layout de página principal usando Flexbox y Grid.</p>
                  <button onClick={() => completeExercise(lessonData.seriesId, lessonData.moduleId, lessonData.lessonId)} className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Marcar como completado
                  </button>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-12 flex justify-between">
            <Link 
              href="/training/frontend-developer/week1/html-semantico" 
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Lección Anterior: HTML Semántico
            </Link>
            <Link 
              href="/training/frontend-developer/week3/responsive-design" 
              className="flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Siguiente Lección: Responsive Design
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}