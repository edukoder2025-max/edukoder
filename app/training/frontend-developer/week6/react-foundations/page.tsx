'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Play, CheckCircle, Clock, Code, Lightbulb, Component, Zap, Atom } from 'lucide-react'

export default function ReactFoundationsPage() {
  const [activeTab, setActiveTab] = useState<'jsx' | 'components' | 'props' | 'state'>('jsx')
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: number}>({})

  const lessonData = {
    series: 'Frontend Developer',
    week: 6,
    title: 'React Foundations',
    duration: '80 minutos',
    difficulty: 'Intermedio',
    description: 'Inicia tu viaje en React: componentes, JSX, props, state y el ecosistema de desarrollo moderno.'
  }

  const codeExamples = {
    jsx: `// JSX - JavaScript XML
// JSX nos permite escribir HTML dentro de JavaScript
function Saludo() {
  const nombre = "María";
  const edad = 25;
  
  return (
    <div className="saludo">
      <h1>¡Hola, {nombre}!</h1>
      <p>Tienes {edad} años</p>
      {edad >= 18 ? (
        <span>Eres mayor de edad</span>
      ) : (
        <span>Eres menor de edad</span>
      )}
    </div>
  );
}

// Renderizar listas
function ListaUsuarios() {
  const usuarios = [
    { id: 1, nombre: "Ana", email: "ana@email.com" },
    { id: 2, nombre: "Carlos", email: "carlos@email.com" },
    { id: 3, nombre: "Laura", email: "laura@email.com" }
  ];

  return (
    <ul>
      {usuarios.map(usuario => (
        <li key={usuario.id}>
          <strong>{usuario.nombre}</strong> - {usuario.email}
        </li>
      ))}
    </ul>
  );
}

// Event handling en JSX
function Boton() {
  const manejarClick = (evento) => {
    console.log('¡Botón clickeado!', evento);
  };

  return (
    <button onClick={manejarClick}>
      Haz click aquí
    </button>
  );
}`,

    components: `// Componentes funcionales en React
// Componente simple
function Encabezado() {
  return (
    <header>
      <h1>Mi Aplicación React</h1>
      <nav>
        <a href="/">Inicio</a>
        <a href="/about">Acerca de</a>
      </nav>
    </header>
  );
}

// Componente con lógica
function Contador() {
  let count = 0;
  
  const incrementar = () => {
    count++;
    console.log('Contador:', count);
  };

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

// Componente reutilizable
function Tarjeta({ titulo, contenido, imagen }) {
  return (
    <div className="tarjeta">
      {imagen && <img src={imagen} alt={titulo} />}
      <h3>{titulo}</h3>
      <p>{contenido}</p>
    </div>
  );
}

// Composición de componentes
function App() {
  return (
    <div className="app">
      <Encabezado />
      <main>
        <Contador />
        <Tarjeta 
          titulo="React es genial"
          contenido="Aprende React paso a paso"
          imagen="/react-logo.png"
        />
      </main>
    </div>
  );
}`,

    props: `// Props - Pasando datos entre componentes
// Componente hijo que recibe props
function PerfilUsuario({ nombre, edad, avatar, esAdmin = false }) {
  return (
    <div className="perfil">
      <img src={avatar} alt={nombre} />
      <h2>{nombre}</h2>
      <p>Edad: {edad} años</p>
      {esAdmin && <span className="badge">Administrador</span>}
    </div>
  );
}

// Componente padre que pasa props
function ListaPerfiles() {
  const usuarios = [
    {
      id: 1,
      nombre: "Ana García",
      edad: 28,
      avatar: "/avatars/ana.jpg",
      esAdmin: true
    },
    {
      id: 2,
      nombre: "Carlos López",
      edad: 32,
      avatar: "/avatars/carlos.jpg",
      esAdmin: false
    }
  ];

  return (
    <div className="lista-perfiles">
      {usuarios.map(usuario => (
        <PerfilUsuario
          key={usuario.id}
          nombre={usuario.nombre}
          edad={usuario.edad}
          avatar={usuario.avatar}
          esAdmin={usuario.esAdmin}
        />
      ))}
    </div>
  );
}

// Props children
function Modal({ children, titulo, onCerrar }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <header className="modal-header">
          <h2>{titulo}</h2>
          <button onClick={onCerrar}>×</button>
        </header>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
}

// Uso del Modal
function App() {
  const cerrarModal = () => {
    console.log('Cerrando modal');
  };

  return (
    <Modal titulo="Confirmar acción" onCerrar={cerrarModal}>
      <p>¿Estás seguro de que quieres continuar?</p>
      <button>Sí, continuar</button>
      <button>Cancelar</button>
    </Modal>
  );
}`,

    state: `// State - Estado local del componente
import { useState } from 'react';

// Contador con estado
function Contador() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="contador">
      <h2>Contador: {count}</h2>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// Formulario controlado
function FormularioContacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    console.log('Datos del formulario:', formData);
    // Aquí enviarías los datos
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        name="nombre"
        placeholder="Tu nombre"
        value={formData.nombre}
        onChange={manejarCambio}
      />
      <input
        type="email"
        name="email"
        placeholder="Tu email"
        value={formData.email}
        onChange={manejarCambio}
      />
      <textarea
        name="mensaje"
        placeholder="Tu mensaje"
        value={formData.mensaje}
        onChange={manejarCambio}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

// Lista con estado
function ListaTareas() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender React', completada: false },
    { id: 2, texto: 'Hacer ejercicios', completada: true }
  ]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim()) {
      setTareas([
        ...tareas,
        {
          id: Date.now(),
          texto: nuevaTarea,
          completada: false
        }
      ]);
      setNuevaTarea('');
    }
  };

  const toggleTarea = (id) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id
        ? { ...tarea, completada: !tarea.completada }
        : tarea
    ));
  };

  return (
    <div>
      <input
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button onClick={agregarTarea}>Agregar</button>
      
      <ul>
        {tareas.map(tarea => (
          <li key={tarea.id}>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => toggleTarea(tarea.id)}
            />
            <span className={tarea.completada ? 'completada' : ''}>
              {tarea.texto}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}`
  }

  const quiz = [
    {
      question: '¿Qué es JSX en React?',
      options: [
        'Un nuevo lenguaje de programación',
        'Una extensión de sintaxis que permite escribir HTML en JavaScript',
        'Una librería separada de React',
        'Un framework de CSS'
      ],
      correct: 1,
      explanation: 'JSX es una extensión de sintaxis de JavaScript que permite escribir elementos HTML dentro del código JavaScript de manera más legible.'
    },
    {
      question: '¿Cuál es la forma correcta de pasar datos a un componente hijo?',
      options: [
        'A través de variables globales',
        'Usando props',
        'Modificando el DOM directamente',
        'A través de cookies'
      ],
      correct: 1,
      explanation: 'Los props son la forma estándar en React de pasar datos de un componente padre a un componente hijo.'
    },
    {
      question: '¿Qué hook se usa para manejar estado local en componentes funcionales?',
      options: [
        'useEffect',
        'useState',
        'useContext',
        'useReducer'
      ],
      correct: 1,
      explanation: 'useState es el hook básico para manejar estado local en componentes funcionales de React.'
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
              <div className="text-sm text-gray-500">Semana 6</div>
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
                <div className="bg-cyan-100 text-cyan-600 px-3 py-1 rounded-full text-sm font-medium">
                  {lessonData.difficulty}
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {lessonData.duration}
                </div>
              </div>

              <p className="text-gray-700 mb-6">{lessonData.description}</p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Fundamentos de React que aprenderás:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">JSX y sintaxis de React</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Componentes funcionales</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Props y comunicación entre componentes</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Estado local con useState</span>
                </div>
              </div>
            </div>

            {/* Interactive Code Tabs */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center mb-6">
                <Atom className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Conceptos de React</h3>
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
                    {tab === 'jsx' && 'JSX'}
                    {tab === 'components' && 'Componentes'}
                    {tab === 'props' && 'Props'}
                    {tab === 'state' && 'Estado'}
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
                <h3 className="text-lg font-semibold text-gray-900">Evaluación React</h3>
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
                href="/training/frontend-developer/week5/apis-fetch"
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Semana anterior
              </Link>
              
              <Link 
                href="/training/frontend-developer/week7/react-hooks" 
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
              <h3 className="font-semibold text-gray-900 mb-4">Semana 6: React</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-blue-600 font-medium">
                  <Zap className="h-4 w-4 mr-2" />
                  <span className="text-sm">JSX</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm">Componentes</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm">Props</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm">Estado</span>
                </div>
              </div>

              <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-2">
                  <Component className="h-4 w-4 text-cyan-600 mr-2" />
                  <h4 className="font-medium text-cyan-900">Proyecto: Counter App</h4>
                </div>
                <p className="text-sm text-cyan-800">
                  Crea una aplicación contador interactiva usando componentes, props y estado.
                </p>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium text-gray-900 mb-3">Recursos React</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-blue-600 hover:text-blue-700">⚛️ React Docs</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700">🛠️ Create React App</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700">🎯 React DevTools</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700">📚 Thinking in React</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
