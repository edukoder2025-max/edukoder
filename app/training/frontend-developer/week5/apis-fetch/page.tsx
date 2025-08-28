'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Play, CheckCircle, Clock, Code, Lightbulb, Cloud, Zap, Globe } from 'lucide-react'

export default function APIsFetchPage() {
  const [activeTab, setActiveTab] = useState<'fetch' | 'async' | 'errors' | 'weather'>('fetch')
  const [quizAnswers, setQuizAnswers] = useState<{[key: number]: number}>({})

  const lessonData = {
    series: 'Frontend Developer',
    week: 5,
    title: 'APIs y Fetch',
    duration: '65 minutos',
    difficulty: 'Intermedio',
    description: 'Aprende a consumir APIs REST, manejar datos JSON y crear aplicaciones dinámicas con datos externos.'
  }

  const codeExamples = {
    fetch: `// Fetch API - Realizando peticiones HTTP
// GET request básico
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// POST request con datos
const nuevoPost = {
  title: 'Mi nuevo post',
  body: 'Contenido del post',
  userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(nuevoPost)
})
.then(response => response.json())
.then(data => console.log('Post creado:', data));

// PUT request para actualizar
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    id: 1,
    title: 'Post actualizado',
    body: 'Nuevo contenido',
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log('Post actualizado:', data));`,

    async: `// Async/Await con APIs
async function obtenerUsuarios() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const usuarios = await response.json();
    return usuarios;
  } catch (error) {
    console.error('Error obteniendo usuarios:', error);
    return [];
  }
}

// Función para obtener posts de un usuario
async function obtenerPostsUsuario(userId) {
  try {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${userId}\`);
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error obteniendo posts:', error);
    return [];
  }
}

// Usar las funciones
async function mostrarDatosUsuario() {
  const usuarios = await obtenerUsuarios();
  if (usuarios.length > 0) {
    const primerUsuario = usuarios[0];
    console.log('Usuario:', primerUsuario.name);
    
    const posts = await obtenerPostsUsuario(primerUsuario.id);
    console.log(\`Posts de \${primerUsuario.name}:\`, posts);
  }
}

mostrarDatosUsuario();`,

    errors: `// Manejo de errores y estados de carga
class APIService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = \`\${this.baseURL}\${endpoint}\`;
    
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });

      // Manejar diferentes códigos de estado
      if (response.status === 404) {
        throw new Error('Recurso no encontrado');
      }
      
      if (response.status === 401) {
        throw new Error('No autorizado');
      }
      
      if (!response.ok) {
        throw new Error(\`Error HTTP: \${response.status}\`);
      }

      return await response.json();
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error('Error de red - verifica tu conexión');
      }
      throw error;
    }
  }

  async get(endpoint) {
    return this.request(endpoint);
  }

  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
}

// Uso del servicio
const api = new APIService('https://jsonplaceholder.typicode.com');

async function cargarDatos() {
  try {
    const posts = await api.get('/posts');
    console.log('Posts cargados:', posts);
  } catch (error) {
    console.error('Error cargando datos:', error.message);
  }
}`,

    weather: `// Proyecto Weather App - Estructura completa
class WeatherApp {
  constructor() {
    this.apiKey = 'TU_API_KEY'; // Obtener de OpenWeatherMap
    this.baseURL = 'https://api.openweathermap.org/data/2.5';
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadCurrentLocation();
  }

  setupEventListeners() {
    const searchBtn = document.getElementById('search-btn');
    const cityInput = document.getElementById('city-input');
    
    searchBtn.addEventListener('click', () => {
      const city = cityInput.value.trim();
      if (city) {
        this.getWeatherByCity(city);
      }
    });

    cityInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
          this.getWeatherByCity(city);
        }
      }
    });
  }

  async getWeatherByCity(city) {
    this.showLoading(true);
    
    try {
      const response = await fetch(
        \`\${this.baseURL}/weather?q=\${city}&appid=\${this.apiKey}&units=metric&lang=es\`
      );
      
      if (!response.ok) {
        throw new Error('Ciudad no encontrada');
      }
      
      const data = await response.json();
      this.displayWeather(data);
      
    } catch (error) {
      this.showError(error.message);
    } finally {
      this.showLoading(false);
    }
  }

  async loadCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          await this.getWeatherByCoords(latitude, longitude);
        },
        () => {
          this.getWeatherByCity('Madrid'); // Ciudad por defecto
        }
      );
    }
  }

  async getWeatherByCoords(lat, lon) {
    try {
      const response = await fetch(
        \`\${this.baseURL}/weather?lat=\${lat}&lon=\${lon}&appid=\${this.apiKey}&units=metric&lang=es\`
      );
      
      const data = await response.json();
      this.displayWeather(data);
      
    } catch (error) {
      this.showError('Error obteniendo ubicación actual');
    }
  }

  displayWeather(data) {
    const weatherContainer = document.getElementById('weather-container');
    
    weatherContainer.innerHTML = \`
      <div class="weather-card">
        <h2>\${data.name}, \${data.sys.country}</h2>
        <div class="temperature">\${Math.round(data.main.temp)}°C</div>
        <div class="description">\${data.weather[0].description}</div>
        <div class="details">
          <span>Sensación térmica: \${Math.round(data.main.feels_like)}°C</span>
          <span>Humedad: \${data.main.humidity}%</span>
          <span>Viento: \${data.wind.speed} m/s</span>
        </div>
      </div>
    \`;
  }

  showLoading(show) {
    const loader = document.getElementById('loader');
    loader.style.display = show ? 'block' : 'none';
  }

  showError(message) {
    const errorContainer = document.getElementById('error-container');
    errorContainer.textContent = message;
    errorContainer.style.display = 'block';
    
    setTimeout(() => {
      errorContainer.style.display = 'none';
    }, 3000);
  }
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
  new WeatherApp();
});`
  }

  const quiz = [
    {
      question: '¿Cuál es la diferencia entre fetch() y XMLHttpRequest?',
      options: [
        'No hay diferencia, son sinónimos',
        'fetch() es más moderno y basado en Promises',
        'XMLHttpRequest es más rápido',
        'fetch() solo funciona con JSON'
      ],
      correct: 1,
      explanation: 'fetch() es la API moderna para hacer peticiones HTTP, basada en Promises y más fácil de usar que XMLHttpRequest.'
    },
    {
      question: '¿Qué método HTTP usarías para actualizar completamente un recurso?',
      options: [
        'GET',
        'POST',
        'PUT',
        'PATCH'
      ],
      correct: 2,
      explanation: 'PUT se usa para actualizar completamente un recurso, mientras que PATCH se usa para actualizaciones parciales.'
    },
    {
      question: '¿Cómo manejas errores de red con fetch()?',
      options: [
        'fetch() automáticamente lanza errores para códigos 4xx y 5xx',
        'Debes verificar response.ok y usar try/catch',
        'Los errores se manejan en el segundo parámetro de then()',
        'fetch() nunca falla'
      ],
      correct: 1,
      explanation: 'fetch() solo rechaza la Promise para errores de red. Debes verificar response.ok para códigos de estado HTTP de error.'
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
              <div className="text-sm text-gray-500">Semana 5</div>
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
                <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                  {lessonData.difficulty}
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {lessonData.duration}
                </div>
              </div>

              <p className="text-gray-700 mb-6">{lessonData.description}</p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Dominarás las APIs modernas:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Fetch API y métodos HTTP</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Manejo de datos JSON</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Gestión de errores y estados</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">APIs REST y autenticación</span>
                </div>
              </div>
            </div>

            {/* Interactive Code Tabs */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center mb-6">
                <Globe className="h-5 w-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">APIs y Fetch en Acción</h3>
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
                    {tab === 'fetch' && 'Fetch API'}
                    {tab === 'async' && 'Async/Await'}
                    {tab === 'errors' && 'Manejo de Errores'}
                    {tab === 'weather' && 'Weather App'}
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
                <h3 className="text-lg font-semibold text-gray-900">Evaluación APIs</h3>
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
                href="/training/frontend-developer/week4/js-avanzado"
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Semana anterior
              </Link>
              
              <Link 
                href="/training/frontend-developer/week6/react-foundations" 
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
              <h3 className="font-semibold text-gray-900 mb-4">Semana 5: APIs</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-blue-600 font-medium">
                  <Zap className="h-4 w-4 mr-2" />
                  <span className="text-sm">Fetch API</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm">Async/Await</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm">Error Handling</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-4 h-4 border-2 border-gray-300 rounded-full mr-2"></div>
                  <span className="text-sm">Weather Project</span>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-2">
                  <Cloud className="h-4 w-4 text-purple-600 mr-2" />
                  <h4 className="font-medium text-purple-900">Proyecto: Weather App</h4>
                </div>
                <p className="text-sm text-purple-800">
                  Crea una aplicación del clima que consuma APIs reales y maneje estados de carga y errores.
                </p>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-medium text-gray-900 mb-3">APIs Públicas</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-blue-600 hover:text-blue-700">🌤️ OpenWeatherMap</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700">📝 JSONPlaceholder</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700">🎭 REST Countries</a>
                  <a href="#" className="block text-blue-600 hover:text-blue-700">🐱 Cat API</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
