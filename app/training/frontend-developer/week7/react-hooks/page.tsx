'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Play, CheckCircle, Clock, Code, Lightbulb, ListTodo, Zap, RefreshCw } from 'lucide-react'

export default function Week7ReactHooks() {
  return (
    <div className="prose mx-auto py-8">
      <h1>Semana 7: React Hooks</h1>
      <p>Esta semana aprenderás a usar los hooks de React para manejar estado y efectos secundarios.</p>
      <h2>1. ¿Qué es un hook?</h2>
      <p>Un hook es una función especial que te permite "engancharte" a las características de React, como el estado y el ciclo de vida.</p>
      <h2>2. useState y useEffect</h2>
      <pre>{`import { useState, useEffect } from 'react';

function Reloj() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <p>{hora.toLocaleTimeString()}</p>;
}`}</pre>
      <h2>3. Ejercicio guiado</h2>
      <p>Crea un componente que muestre la hora actual y se actualice cada segundo usando <code>useEffect</code>.</p>
      <h2>4. Proyecto semanal</h2>
      <p><strong>Todo App avanzada:</strong> Crea una aplicación de tareas con React Hooks que permita agregar, marcar y eliminar tareas.</p>
      <h2>5. Recursos adicionales</h2>
      <ul>
        <li><a href="https://es.react.dev/reference/react/useState" target="_blank">useState</a></li>
        <li><a href="https://es.react.dev/reference/react/useEffect" target="_blank">useEffect</a></li>
      </ul>
    </div>
  );
}
