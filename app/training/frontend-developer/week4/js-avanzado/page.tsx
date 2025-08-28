'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Play, CheckCircle, Clock, Code, Lightbulb, ListTodo, Zap } from 'lucide-react'

export default function JSAvanzadoPage() {
  const [activeTab, setActiveTab] = useState<'closures' | 'prototypes' | 'modules' | 'async'>('closures')
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: number}>({})

  const lessonData = {
    series: 'Frontend Developer',
    week: 4,
    title: 'JavaScript Avanzado',
    duration: '75 minutos',
    difficulty: 'Intermedio',
    description: 'Profundiza en conceptos avanzados de JavaScript: closures, prototypes, modules y programación asíncrona.'
  }

  const codeExamples = {
    closures: `// Closures - Funciones que "recuerdan" su entorno
function crearContador() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const contador1 = crearContador();
const contador2 = crearContador();

console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador2()); // 1 (independiente)

// Closure práctico: Factory function
function crearCalculadora(operacion) {
  return function(a, b) {
    switch(operacion) {
      case 'suma': return a + b;
      case 'resta': return a - b;
      case 'multiplicacion': return a * b;
      default: return 0;
    }
  };
}

const sumar = crearCalculadora('suma');
const restar = crearCalculadora('resta');
console.log(sumar(5, 3)); // 8`,

    prototypes: `// Prototypes y herencia en JavaScript
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Agregar métodos al prototype
Persona.prototype.saludar = function() {
  return \`Hola, soy \${this.nombre}\`;
};

Persona.prototype.cumplirAnios = function() {
  this.edad++;
  return \`Ahora tengo \${this.edad} años\`;
};

// Crear instancias
const juan = new Persona('Juan', 25);
const maria = new Persona('María', 30);

console.log(juan.saludar()); // "Hola, soy Juan"
console.log(maria.cumplirAnios()); // "Ahora tengo 31 años"

// Herencia con prototypes
function Desarrollador(nombre, edad, lenguaje) {
  Persona.call(this, nombre, edad);
  this.lenguaje = lenguaje;
}

Desarrollador.prototype = Object.create(Persona.prototype);
Desarrollador.prototype.constructor = Desarrollador;

Desarrollador.prototype.programar = function() {
  return \`Estoy programando en \${this.lenguaje}\`;
};`,

    modules: `// ES6 Modules - Exportar e importar
// archivo: utils.js
export const PI = 3.14159;

export function calcularArea(radio) {
  return PI * radio * radio;
}

export function calcularCircunferencia(radio) {
  return 2 * PI * radio;
}

// Export por defecto
export default function saludar(nombre) {
  return \`¡Hola, \${nombre}!\`;
}

// archivo: main.js
import saludar, { PI, calcularArea } from './utils.js';
import * as Utils from './utils.js';

console.log(saludar('Ana')); // ¡Hola, Ana!
console.log(calcularArea(5)); // 78.53975
console.log(Utils.PI); // 3.14159

// Importación dinámica
async function cargarModulo() {
  const modulo = await import('./utils.js');
  console.log(modulo.PI);
}`,

    async: `// Programación Asíncrona
// Promises
function simularAPI(exito = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) {
        resolve({ datos: 'Información importante' });
      } else {
        reject(new Error('Falló la operación'));
      }
    }, 2000);
  });
}

// Async/Await
async function obtenerDatos() {
  try {
    console.log('Obteniendo datos...');
    const resultado = await simularAPI(true);
    console.log('Datos recibidos:', resultado.datos);
    return resultado;
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Promise.all para múltiples operaciones
async function obtenerMultiplesDatos() {
  try {
    const [datos1, datos2, datos3] = await Promise.all([
      simularAPI(true),
      simularAPI(true),
      simularAPI(true)
    ]);
    
    console.log('Todos los datos:', { datos1, datos2, datos3 });
  } catch (error) {
    console.error('Alguna operación falló:', error);
  }
}`
  }

  const quiz = [
    {
      question: '¿Qué es un closure en JavaScript?',
      options: [
        'Una función que se ejecuta inmediatamente',
        'Una función que tiene acceso a variables de su scope exterior',
        'Una función que no puede ser llamada',
        'Una función sin parámetros'
      ],
      correct: 1,
      explanation: 'Un closure es una función que tiene acceso a variables de su scope exterior, incluso después de que la función exterior haya terminado de ejecutarse.'
    },
    {
      question: '¿Cuál es la diferencia entre Promise.all() y Promise.race()?',
      options: [
        'No hay diferencia',
        'Promise.all espera a todas, Promise.race a la primera que se resuelve',
        'Promise.race espera a todas, Promise.all a la primera',
        'Ambas hacen lo mismo pero con diferente sintaxis'
      ],
      correct: 1,
      explanation: 'Promise.all() espera a que todas las promesas se resuelvan, mientras que Promise.race() se resuelve tan pronto como la primera promesa se resuelve o rechaza.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="section-container">
          <div className="flex items-center justify-between py-4">
            <Link href="/training/frontend-developer" className="flex items-center text-blue-600 hover:text-blue-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Frontend Developer
            </Link>
            
            <div className="text-center">
              <div className="text-sm text-gray-500">Semana 4</div>
              <h1 className="text-xl font-semibold text-gray-900">{lessonData.title}</h1>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              {lessonData.duration}
            </div>
          </div>
        </div>
      </header>

      <div className="section-container py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Video Placeholder */}
            <div className="bg-gray-900 rounded-lg mb-8 aspect-video flex items-center justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 transition-colors">
                <Play className="h-8 w-8" />
              </button>
            </div>

            {/* Lesson Overview */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                  {lessonData.difficulty}
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {lessonData.duration}
                </div>
              </div>

              <p className="text-gray-700 mb-6">{lessonData.description}</p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Conceptos avanzados que dominarás:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Closures y scope avanzado</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Prototypes y herencia</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">ES6 Modules</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Async/Await y Promises</span>
                </div>
              </div>
            </div>

            {/* Interactive Code Tabs */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center mb-6">
                <Code className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Conceptos Avanzados</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {(Object.keys(codeExamples) as Array<keyof typeof codeExamples>).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tab === 'closures' && 'Closures'}
                    {tab === 'prototypes' && 'Prototypes'}
                    {tab === 'modules' && 'ES6 Modules'}
                    {tab === 'async' && 'Async/Await'}
                  </button>
                ))}
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-100">
                  <code>{codeExamples[activeTab]}</code>
                </pre>
              </div>
            </div>

            {/* Quiz */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="h-5 w-5 text-yellow-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Evaluación Avanzada</h3>
              </div>
              
              {quiz.map((question, index) => (
                <div key={index} className="mb-6 p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">{question.question}</h4>
                  <div className="space-y-2">
                    {question.options.map((option, optionIndex) => (
                      <label key={optionIndex} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name={`question-${index}`}
                          value={optionIndex}
                          onChange={(e) => setQuizAnswers({...quizAnswers, [index]: parseInt(e.target.value)})}
                          className="mr-3"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                  {quizAnswers[index] !== undefined && (
                    <div className={`mt-3 p-3 rounded-lg ${
                      quizAnswers[index] === question.correct 
                        ? 'bg-green-50 border border-green-200' 
                        : 'bg-red-50 border border-red-200'
                    }`}>
                      <p className={`text-sm ${
                        quizAnswers[index] === question.correct ? 'text-green-800' : 'text-red-800'
                      }`}>
                        {quizAnswers[index] === question.correct ? '¡Correcto!' : 'Incorrecto.'} {question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <Link 
                href="/training/frontend-developer/week3/js-fundamentals"
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Semana anterior
              </Link>
              
              <Link 
                href="/training/frontend-developer/week5/apis-fetch" 
                className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Siguiente semana
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-8">
              <h3 className="font-semibold text-gray-900 mb-4">Semana 4: JS Avanzado</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-blue-600 font-medium">
                  <Zap className="h-4 w-4 mr-2" />
                  <span className="text-sm">Closures</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm">Prototypes</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm">ES6 Modules</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm">Async/Await</span>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-2">
                  <ListTodo className="h-4 w-4 text-orange-600 mr-2" />
                  <h4 className="font-medium text-orange-900">Proyecto: App de Tareas</h4>
                </div>
                <p className="text-sm text-orange-800">
                  Crea una aplicación completa de gestión de tareas usando todos los conceptos avanzados aprendidos.
                </p>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium text-gray-900 mb-3">Recursos</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-blue-600 hover:text-blue-700">🔥 Advanced JS Patterns</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700">⚡ Async Programming</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700">🏗️ Module Systems</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700">🎯 Closure Examples</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
