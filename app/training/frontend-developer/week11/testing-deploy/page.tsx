import React from 'react';

export default function Week11TestingDeploy() {
  return (
    <div className="prose mx-auto py-8">
      <h1>Semana 11: Testing y Deploy</h1>
      <p>Esta semana aprenderás a testear tus aplicaciones y a desplegarlas en producción.</p>
      <h2>1. Testing básico en React</h2>
      <pre>{`import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza el título', () => {
  render(<App />);
  expect(screen.getByText(/Hola/i)).toBeInTheDocument();
});`}</pre>
      <h2>2. Deploy en Vercel/Netlify</h2>
      <p>Para desplegar tu app, sube tu código a GitHub y conéctalo a Vercel o Netlify.</p>
      <h2>3. Ejercicio guiado</h2>
      <p>Agrega un test a un componente y haz deploy de una app de ejemplo en Vercel.</p>
      <h2>4. Proyecto semanal</h2>
      <p><strong>App con tests:</strong> Crea una pequeña app con al menos un test y haz deploy en Vercel o Netlify.</p>
      <h2>5. Recursos adicionales</h2>
      <ul>
        <li><a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank">React Testing Library</a></li>
        <li><a href="https://vercel.com/docs" target="_blank">Vercel Docs</a></li>
        <li><a href="https://www.netlify.com/docs/" target="_blank">Netlify Docs</a></li>
      </ul>
    </div>
  );
}
