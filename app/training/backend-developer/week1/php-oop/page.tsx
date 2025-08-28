import Link from 'next/link'
import { ArrowLeft, ArrowRight, Play, CheckCircle, Clock, Code, FileText, Database } from 'lucide-react'
import ProgressTracker from '@/components/ProgressTracker'

export default function PHPOOPPage() {
  const lessonData = {
    series: 'Backend Developer',
    week: 1,
    lesson: 1,
    title: 'PHP Orientado a Objetos - Clases y Objetos',
    duration: '60 minutos',
    difficulty: 'Intermedio',
    description: 'Domina los conceptos fundamentales de la programación orientada a objetos en PHP. Aprende a crear clases robustas y escalables.',
    objectives: [
      'Entender los principios de la programación orientada a objetos',
      'Crear clases y objetos en PHP',
      'Implementar propiedades y métodos',
      'Usar encapsulación y visibilidad'
    ]
  }

  const codeExample = `<?php

class Usuario {
    // Propiedades privadas (encapsulación)
    private string $nombre;
    private string $email;
    private array $roles;
    private DateTime $fechaCreacion;
    
    // Constructor
    public function __construct(string $nombre, string $email) {
        $this->nombre = $nombre;
        $this->email = $email;
        $this->roles = ['usuario'];
        $this->fechaCreacion = new DateTime();
    }
    
    // Getters (métodos públicos)
    public function getNombre(): string {
        return $this->nombre;
    }
    
    public function getEmail(): string {
        return $this->email;
    }
    
    public function getRoles(): array {
        return $this->roles;
    }
    
    // Setters con validación
    public function setEmail(string $email): void {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $this->email = $email;
        } else {
            throw new InvalidArgumentException('Email inválido');
        }
    }
    
    // Métodos de negocio
    public function agregarRol(string $rol): void {
        if (!in_array($rol, $this->roles)) {
            $this->roles[] = $rol;
        }
    }
    
    public function tieneRol(string $rol): bool {
        return in_array($rol, $this->roles);
    }
    
    public function esAdmin(): bool {
        return $this->tieneRol('admin');
    }
    
    // Método mágico para representación string
    public function __toString(): string {
        return "Usuario: {$this->nombre} ({$this->email})";
    }
}

// Uso de la clase
$usuario = new Usuario('Juan Pérez', 'juan@ejemplo.com');

echo $usuario->getNombre(); // Juan Pérez
echo $usuario->getEmail();  // juan@ejemplo.com

$usuario->agregarRol('editor');
var_dump($usuario->tieneRol('editor')); // true

echo $usuario; // Usuario: Juan Pérez (juan@ejemplo.com)

?>`

  const quiz = [
    {
      question: '¿Cuál es la principal ventaja de usar propiedades privadas?',
      options: [
        'Son más rápidas que las públicas',
        'Protegen los datos y controlan el acceso',
        'Usan menos memoria',
        'Son compatibles con versiones antiguas'
      ],
      correct: 1
    },
    {
      question: '¿Qué hace el método __construct()?',
      options: [
        'Destruye el objeto',
        'Inicializa el objeto cuando se crea',
        'Valida los datos',
        'Convierte el objeto a string'
      ],
      correct: 1
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="section-container">
          <div className="flex items-center justify-between py-4">
            <Link href="/training/backend-developer" className="flex items-center text-purple-600 hover:text-purple-700">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Backend Developer
            </Link>
            
            <div className="text-center">
              <div className="text-sm text-gray-500">Semana 1 - Lección 1</div>
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
              <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 transition-colors">
                <Play className="h-8 w-8" />
              </button>
            </div>

            {/* Lesson Info */}
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

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Objetivos de aprendizaje:</h3>
              <ul className="space-y-2">
                {lessonData.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Code Example */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <Code className="h-5 w-5 text-purple-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Ejemplo Práctico - Clase Usuario</h3>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-100">
                  <code>{codeExample}</code>
                </pre>
              </div>
              
              <div className="mt-4 flex gap-3">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                  Copiar Código
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  Ejecutar en REPL
                </button>
              </div>
            </div>

            {/* Key Concepts */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <Database className="h-5 w-5 text-yellow-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Conceptos Clave</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-900 mb-2">Encapsulación</h4>
                  <p className="text-sm text-gray-600">Ocultar datos internos y exponer solo lo necesario</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-900 mb-2">Propiedades</h4>
                  <p className="text-sm text-gray-600">Variables que pertenecen a la clase</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-900 mb-2">Métodos</h4>
                  <p className="text-sm text-gray-600">Funciones que definen el comportamiento del objeto</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-medium text-gray-900 mb-2">Visibilidad</h4>
                  <p className="text-sm text-gray-600">public, private, protected controlan el acceso</p>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Mejores Prácticas</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-medium text-green-900">✅ Hacer</h4>
                  <ul className="text-sm text-green-800 mt-2 space-y-1">
                    <li>• Usar propiedades privadas para datos sensibles</li>
                    <li>• Validar datos en setters</li>
                    <li>• Usar type hints en PHP 7+</li>
                    <li>• Seguir convenciones de nombres (camelCase)</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-medium text-red-900">❌ Evitar</h4>
                  <ul className="text-sm text-red-800 mt-2 space-y-1">
                    <li>• Hacer todas las propiedades públicas</li>
                    <li>• Crear clases con responsabilidades múltiples</li>
                    <li>• Nombres de clase genéricos (Data, Utils)</li>
                    <li>• Métodos extremadamente largos</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quiz */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">¿Qué has aprendido?</h3>
              
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
                          className="mr-3"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Verificar Respuestas
              </button>
            </div>

            {/* Exercise */}
            <div className="bg-white rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <FileText className="h-5 w-5 text-green-600 mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Ejercicio Práctico</h3>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                <h4 className="font-medium text-purple-900 mb-2">Tu misión:</h4>
                <p className="text-purple-800 text-sm">
                  Crea una clase `Producto` con propiedades: nombre, precio, stock, categoría. 
                  Incluye métodos para actualizar stock, aplicar descuentos y validar disponibilidad.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-gray-700">Usar propiedades privadas</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-gray-700">Implementar constructor</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-gray-700">Crear getters y setters</span>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="mr-3" />
                  <span className="text-gray-700">Validar datos de entrada</span>
                </div>
              </div>

              <button className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Subir mi solución
              </button>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <button className="flex items-center text-gray-400 cursor-not-allowed">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Lección anterior
              </button>
              
              <Link 
                href="/training/backend-developer/week1/herencia" 
                className="flex items-center bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Siguiente lección
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-8">
              <h3 className="font-semibold text-gray-900 mb-4">Progreso del Curso</h3>
              <ProgressTracker 
                currentModule={1}
                totalModules={10}
                currentLesson={1}
                totalLessons={4}
              />
              
              <div className="mt-6">
                <h4 className="font-medium text-gray-900 mb-3">Semana 1 - PHP OOP</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-purple-600">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                    Clases y Objetos
                  </div>
                  <div className="flex items-center text-gray-500">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                    Herencia y Polimorfismo
                  </div>
                  <div className="flex items-center text-gray-500">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                    Traits e Interfaces
                  </div>
                  <div className="flex items-center text-gray-500">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-2"></div>
                    Namespaces
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <h4 className="font-medium text-gray-900 mb-3">Recursos</h4>
                <div className="space-y-2 text-sm">
                  <a href="#" className="block text-purple-600 hover:text-purple-700">📄 PHP OOP Manual</a>
                  <a href="#" className="block text-purple-600 hover:text-purple-700">🔗 PHP Sandbox</a>
                  <a href="#" className="block text-purple-600 hover:text-purple-700">📚 PSR Standards</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
