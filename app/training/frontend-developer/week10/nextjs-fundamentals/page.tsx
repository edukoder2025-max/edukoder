import React from 'react';

export default function Week10NextjsFundamentals() {
  return (
    <div className="prose mx-auto py-8">
      <h1>Semana 10: Next.js Fundamentals</h1>
      <p>Esta semana aprenderás los fundamentos de Next.js, el framework de React para producción.</p>
      <h2>1. ¿Qué es Next.js?</h2>
      <p>Next.js es un framework que permite crear aplicaciones React con routing, SSR y más.</p>
      <h2>2. Páginas y rutas</h2>
      <pre>{`// app/page.tsx
export default function Home() {
  return <h1>Inicio</h1>;
}`}</pre>
      <h2>3. Fetching de datos</h2>
      <pre>{`// app/page.tsx
export default async function Home() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`}</pre>
      <h2>4. Ejercicio guiado</h2>
      <p>Crea una página en Next.js que muestre una lista de elementos obtenidos de una API.</p>
      <h2>5. Proyecto semanal</h2>
      <p><strong>Blog con Next.js:</strong> Crea un blog simple con Next.js, con páginas para cada post y datos simulados.</p>
      <h2>6. Recursos adicionales</h2>
      <ul>
        <li><a href="https://nextjs.org/docs" target="_blank">Documentación oficial de Next.js</a></li>
        <li><a href="https://nextjs.org/learn" target="_blank">Next.js Learn</a></li>
      </ul>
    </div>
  );
}
