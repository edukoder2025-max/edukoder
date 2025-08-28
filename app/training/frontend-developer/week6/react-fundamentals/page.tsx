import React from 'react';

export default function Week6ReactFundamentals() {
  return (
    <div className="prose mx-auto py-8">
      <h1>Semana 6: Fundamentos de React</h1>
      <p>Esta semana aprenderás los conceptos básicos de React, la librería más popular para construir interfaces de usuario.</p>
      <h2>1. ¿Qué es React?</h2>
      <p>React es una librería de JavaScript para construir interfaces de usuario basadas en componentes.</p>
      <h2>2. Componentes y props</h2>
      <pre>{`function Saludo(props) {
  return <h1>Hola, {props.nombre}</h1>;
}`}</pre>
      <h2>3. Estado y eventos</h2>
      <pre>{`import { useState } from 'react';

function Contador() {
  const [cuenta, setCuenta] = useState(0);
  return (
    <div>
      <p>Cuenta: {cuenta}</p>
      <button onClick={() => setCuenta(cuenta + 1)}>Sumar</button>
    </div>
  );
}`}</pre>
      <h2>4. Ejercicio guiado</h2>
      <p>Crea un componente <code>Saludo</code> que reciba un nombre por props y lo muestre en pantalla.</p>
      <h2>5. Proyecto semanal</h2>
      <p><strong>Counter App:</strong> Crea una aplicación de contador con React que permita incrementar y decrementar el valor.</p>
      <h2>6. Recursos adicionales</h2>
      <ul>
        <li><a href="https://es.react.dev/" target="_blank">Documentación oficial de React</a></li>
        <li><a href="https://react.dev/learn" target="_blank">React Learn</a></li>
      </ul>
    </div>
  );
}
