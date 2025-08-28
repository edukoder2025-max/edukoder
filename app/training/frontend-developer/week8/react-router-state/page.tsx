import React from 'react';

export default function Week8ReactRouterState() {
  return (
    <div className="prose mx-auto py-8">
      <h1>Semana 8: React Router y State Management</h1>
      <p>Esta semana aprenderás a crear aplicaciones multipágina y a manejar el estado global en React.</p>
      <h2>1. React Router</h2>
      <pre>{`import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`}</pre>
      <h2>2. Context API</h2>
      <pre>{`import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {/* ... */}
    </UserContext.Provider>
  );
}`}</pre>
      <h2>3. Ejercicio guiado</h2>
      <p>Crea una app con dos páginas usando React Router y comparte el estado entre ellas usando Context API.</p>
      <h2>4. Proyecto semanal</h2>
      <p><strong>Multi-page App:</strong> Crea una aplicación multipágina con React Router y Context para manejar el estado global.</p>
      <h2>5. Recursos adicionales</h2>
      <ul>
        <li><a href="https://reactrouter.com/en/main" target="_blank">React Router</a></li>
        <li><a href="https://es.react.dev/learn/passing-data-deeply-with-context" target="_blank">React Context</a></li>
      </ul>
    </div>
  );
}
