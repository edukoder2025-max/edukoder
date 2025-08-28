'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Play, CheckCircle, Clock, Code, Lightbulb, Calculator, Zap, FileText } from 'lucide-react'

export default function JSFundamentalsPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeExamples>('variables')
  const [calculatorResult, setCalculatorResult] = useState('')
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: number}>({})

  const lessonData = {
    series: 'Frontend Developer',
    week: 3,
    title: 'JavaScript Fundamentals',
    duration: '60 minutos',
    difficulty: 'Principiante',
    description: 'Domina los fundamentos de JavaScript: variables, funciones, DOM manipulation y eventos para crear aplicaciones interactivas.'
  }

  const codeExamples = {
    variables: `// Variables y tipos de datos en JavaScript
let nombre = "Ana García";           // String
const edad = 25;                     // Number
let esEstudiante = true;             // Boolean
let hobbies = ["leer", "nadar"];     // Array
let persona = {                      // Object
  nombre: "Ana",
  edad: 25,
  ciudad: "Madrid"
};

// ES6+ - Destructuring
const { nombre: nombrePersona, edad: edadPersona } = persona;
const [primerHobby, segundoHobby] = hobbies;

console.log(\`\${nombrePersona} tiene \${edadPersona} años\`);`,

    functions: `// Funciones tradicionales
function sumar(a, b) {
  return a + b;
}

// Arrow functions (ES6+)
const multiplicar = (a, b) => a * b;

// Función con parámetros por defecto
const saludar = (nombre = "Usuario") => {
  return \`¡Hola, \${nombre}!\`;
};

// Función de orden superior
const operacion = (a, b, callback) => {
  return callback(a, b);
};

// Ejemplos de uso
console.log(sumar(5, 3));                    // 8
console.log(multiplicar(4, 6));              // 24
console.log(saludar());                      // ¡Hola, Usuario!
console.log(saludar("María"));               // ¡Hola, María!
console.log(operacion(10, 5, sumar));       // 15`,

    dom: `// Selección de elementos del DOM
const titulo = document.getElementById('titulo');
const botones = document.querySelectorAll('.btn');
const primerParrafo = document.querySelector('p');

// Modificar contenido
titulo.textContent = 'Nuevo título';
titulo.innerHTML = '<strong>Título en negrita</strong>';

// Modificar estilos
titulo.style.color = 'blue';
titulo.style.fontSize = '24px';

// Agregar/remover clases
titulo.classList.add('destacado');
titulo.classList.remove('oculto');
titulo.classList.toggle('activo');

// Crear y agregar elementos
const nuevoElemento = document.createElement('div');
nuevoElemento.textContent = 'Elemento creado dinámicamente';
nuevoElemento.className = 'nuevo-elemento';
document.body.appendChild(nuevoElemento);`,

    events: `// Event Listeners
const boton = document.getElementById('miBoton');
const input = document.getElementById('miInput');

// Evento de click
boton.addEventListener('click', function(event) {
  console.log('¡Botón clickeado!');
  event.preventDefault(); // Prevenir comportamiento por defecto
});

// Evento de input
input.addEventListener('input', (event) => {
  console.log('Valor actual:', event.target.value);
});

// Evento de formulario
const formulario = document.getElementById('miFormulario');
formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  const datos = new FormData(event.target);
  console.log('Datos del formulario:', Object.fromEntries(datos));
});

// Delegación de eventos
document.addEventListener('click', (event) => {
  if (event.target.matches('.btn-dinamico')) {
    console.log('Botón dinámico clickeado');
  }
});`
  }

  const quiz = [
    {
      question: '¿Cuál es la diferencia entre let, const y var?',
      options: [
        'No hay diferencia, son sinónimos',
        'let y const tienen scope de bloque, var tiene scope de función',
        'var es más moderno que let y const',
        'const solo se usa para números'
      ],
      correct: 1,
      explanation: 'let y const tienen scope de bloque y no se pueden redeclarar. const además no se puede reasignar.'
    },
    {
      question: '¿Qué hace el método addEventListener()?',
      options: [
        'Crea un nuevo elemento HTML',
        'Modifica el CSS de un elemento',
        'Asocia una función a un evento específico',
        'Elimina un elemento del DOM'
      ],
      correct: 2,
      explanation: 'addEventListener() permite asociar una función (event handler) a un evento específico de un elemento.'
    },
    {
      question: '¿Cuál es la sintaxis correcta de una arrow function?',
      options: [
        'function => (a, b) { return a + b; }',
        '(a, b) => { return a + b; }',
        'arrow function(a, b) { return a + b; }',
        '=>(a, b) { return a + b; }'
      ],
      correct: 1,
      explanation: 'Las arrow functions usan la sintaxis (parámetros) => { código }. Si es una sola expresión, se puede omitir return y llaves.'
    }
  ]

  const calculatorCode = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Interactiva</title>
    <style>
        .calculadora {
            max-width: 300px;
            margin: 50px auto;
            background: #f0f0f0;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .display {
            width: 100%;
            height: 60px;
            font-size: 24px;
            text-align: right;
            padding: 10px;
            margin-bottom: 15px;
            border: none;
            background: #fff;
            border-radius: 5px;
        }
        .botones {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }
        .btn {
            height: 50px;
            font-size: 18px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.2s;
        }
        .btn:hover {
            opacity: 0.8;
        }
        .numero { background: #e0e0e0; }
        .operador { background: #ff9500; color: white; }
        .igual { background: #ff9500; color: white; }
        .limpiar { background: #ff6b6b; color: white; }
    </style>
</head>
<body>
    <div class="calculadora">
        <input type="text" class="display" id="display" readonly>
        <div class="botones">
            <button class="btn limpiar" onclick="limpiar()">C</button>
            <button class="btn operador" onclick="agregarOperador('/')">/</button>
            <button class="btn operador" onclick="agregarOperador('*')">×</button>
            <button class="btn operador" onclick="borrarUltimo()">←</button>
            
            <button class="btn numero" onclick="agregarNumero('7')">7</button>
            <button class="btn numero" onclick="agregarNumero('8')">8</button>
            <button class="btn numero" onclick="agregarNumero('9')">9</button>
            <button class="btn operador" onclick="agregarOperador('-')">-</button>
            
            <button class="btn numero" onclick="agregarNumero('4')">4</button>
            <button class="btn numero" onclick="agregarNumero('5')">5</button>
            <button class="btn numero" onclick="agregarNumero('6')">6</button>
            <button class="btn operador" onclick="agregarOperador('+')">+</button>
            
            <button class="btn numero" onclick="agregarNumero('1')">1</button>
            <button class="btn numero" onclick="agregarNumero('2')">2</button>
            <button class="btn numero" onclick="agregarNumero('3')">3</button>
            <button class="btn igual" onclick="calcular()" rowspan="2">=</button>
            
            <button class="btn numero" onclick="agregarNumero('0')" colspan="2">0</button>
            <button class="btn numero" onclick="agregarNumero('.')">.</button>
        </div>
    </div>

    <script>
        let display = document.getElementById('display');
        let operacionActual = '';
        let operadorAnterior = '';
        let operandoAnterior = '';

        function agregarNumero(numero) {
            if (operacionActual === '0' || operadorAnterior === '=') {
                operacionActual = numero;
                operadorAnterior = '';
            } else {
                operacionActual += numero;
            }
            actualizarDisplay();
        }

        function agregarOperador(operador) {
            if (operadorAnterior && operacionActual && operadorAnterior !== '=') {
                calcular();
            }
            operandoAnterior = operacionActual;
            operadorAnterior = operador;
            operacionActual = '';
        }

        function calcular() {
            let resultado;
            const anterior = parseFloat(operandoAnterior);
            const actual = parseFloat(operacionActual);

            if (isNaN(anterior) || isNaN(actual)) return;

            switch (operadorAnterior) {
                case '+':
                    resultado = anterior + actual;
                    break;
                case '-':
                    resultado = anterior - actual;
                    break;
                case '*':
                    resultado = anterior * actual;
                    break;
                case '/':
                    resultado = actual !== 0 ? anterior / actual : 'Error';
                    break;
                default:
                    return;
            }

            operacionActual = resultado.toString();
            operadorAnterior = '=';
            operandoAnterior = '';
            actualizarDisplay();
        }

        function limpiar() {
            operacionActual = '';
            operadorAnterior = '';
            operandoAnterior = '';
            actualizarDisplay();
        }

        function borrarUltimo() {
            operacionActual = operacionActual.slice(0, -1);
            actualizarDisplay();
        }

        function actualizarDisplay() {
            display.value = operacionActual || '0';
        }

        // Inicializar
        limpiar();
    </script>
</body>
</html>`

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
              <div className="text-sm text-gray-500">Semana 3</div>
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
                <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {lessonData.difficulty}
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {lessonData.duration}
                </div>
              </div>

              <p className="text-gray-700 mb-6">{lessonData.description}</p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Lo que aprenderás:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Variables y tipos de datos ES6+</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Funciones y arrow functions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Manipulación del DOM</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Event handling y interactividad</span>
                </div>
              </div>
            </div>

            {/* Interactive Code Tabs */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center mb-6">
                <Code className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Conceptos Fundamentales</h3>
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
                    {tab === 'variables' && 'Variables & Tipos'}
                    {tab === 'functions' && 'Funciones'}
                    {tab === 'dom' && 'DOM Manipulation'}
                    {tab === 'events' && 'Eventos'}
                  </button>
                ))}
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-100">
                  <code>{codeExamples[activeTab]}</code>
                </pre>
              </div>
              
              <div className="mt-4 flex gap-3">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Ejecutar Código
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  Copiar
                </button>
              </div>
            </div>

            {/* Interactive Quiz */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center mb-6">
                <Lightbulb className="h-5 w-5 text-yellow-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Evaluación de Conocimientos</h3>
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

            {/* Project Section */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center mb-6">
                <Calculator className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Proyecto: Calculadora Interactiva</h3>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-green-900 mb-2">Objetivo del Proyecto:</h4>
                <p className="text-green-800 text-sm mb-3">
                  Crear una calculadora completamente funcional que demuestre el uso de variables, funciones, 
                  manipulación del DOM y manejo de eventos.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-green-900">Características requeridas:</strong>
                    <ul className="mt-2 space-y-1 text-green-700">
                      <li>• Operaciones básicas (+, -, ×, ÷)</li>
                      <li>• Display para mostrar números y resultados</li>
                      <li>• Botón de limpiar (C)</li>
                      <li>• Manejo de errores (división por cero)</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-green-900">Conceptos aplicados:</strong>
                    <ul className="mt-2 space-y-1 text-green-700">
                      <li>• Event listeners en botones</li>
                      <li>• Manipulación del DOM</li>
                      <li>• Funciones para cada operación</li>
                      <li>• Validación de entrada</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
                <pre className="text-xs text-gray-100">
                  <code>{calculatorCode}</code>
                </pre>
              </div>

              <div className="flex gap-3">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                  Descargar Código Base
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  Ver Demo
                </button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Subir mi Proyecto
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <Link 
                href="/training/frontend-developer/week2/css-moderno"
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Semana anterior
              </Link>
              
              <Link 
                href="/training/frontend-developer/week4/js-avanzado" 
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
              <h3 className="font-semibold text-gray-900 mb-4">Semana 3: JavaScript</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-blue-600 font-medium">
                  <Zap className="h-4 w-4 mr-2" />
                  <span className="text-sm">Variables y Tipos</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm">Funciones</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm">DOM Manipulation</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm">Eventos</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium text-gray-900 mb-3">Recursos</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-blue-600 hover:text-blue-700">📚 MDN JavaScript Guide</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700">🎮 JavaScript Exercises</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700">🔧 Browser DevTools</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700">💡 ES6 Features</a>
                </div>
              </div>

              <div className="border-t pt-6 mt-6">
                <h4 className="font-medium text-gray-900 mb-3">Progreso</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Video:</span>
                    <span className="font-medium">0/6 capítulos</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Quiz:</span>
                    <span className="font-medium">0/3 preguntas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Proyecto:</span>
                    <span className="font-medium text-orange-600">Pendiente</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
