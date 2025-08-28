import React from 'react';

export default function Week9TypeScriptReact() {
  return (
    <div className="prose mx-auto py-8">
      <h1>Semana 9: TypeScript para React</h1>
      <p>Esta semana aprenderás a usar TypeScript con React para crear aplicaciones más robustas y seguras.</p>
      <h2>1. ¿Qué es TypeScript?</h2>
      <p>TypeScript es un superset de JavaScript que añade tipado estático.</p>
      <h2>2. Tipos básicos y props tipadas</h2>
      <pre>{`type SaludoProps = { nombre: string };

function Saludo({ nombre }: SaludoProps) {
  return <h1>Hola, {nombre}</h1>;
}`}</pre>
      <h2>3. useState y useEffect tipados</h2>
      <pre>{`import { useState } from 'react';

const [contador, setContador] = useState<number>(0);`}</pre>
      <h2>4. Ejercicio guiado</h2>
      <p>Crea un componente que reciba props tipadas y muestre información en pantalla.</p>
      <h2>5. Proyecto semanal</h2>
      <p><strong>Typed React App:</strong> Crea una pequeña app de tareas usando React y TypeScript, asegurando el tipado de props y estado.</p>
      <h2>6. Recursos adicionales</h2>
      <ul>
        <li><a href="https://www.typescriptlang.org/docs/handbook/react.html" target="_blank">TypeScript + React Handbook</a></li>
        <li><a href="https://react-typescript-cheatsheet.netlify.app/" target="_blank">React TypeScript Cheatsheet</a></li>
      </ul>
    </div>
  );
}
