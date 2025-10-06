/**
 * @file Componente principal de la aplicación.
 * @description Configura la estructura básica de la aplicación, incluyendo el proveedor de tema y el contenido principal.
 */

import reactLogo from './assets/react.svg'; // Importa el logo de React.
import viteLogo from '/vite.svg'; // Importa el logo de Vite.
import './App.css'; // Importa los estilos específicos del componente App.
import { ThemeProvider } from './context/ThemeContext'; // Importa el proveedor de contexto del tema.
import ThemeToggle from './components/ThemeToggle'; // Importa el componente para alternar el tema.

/**
 * @component Content
 * @description Componente que muestra el contenido principal de la aplicación y utiliza el tema.
 * Incluye los logos de Vite y React, un título, una descripción y un área de contenido de ejemplo.
 * El estilo del fondo y el color del texto se adaptan al tema actual.
 * @returns {JSX.Element} El componente de contenido.
 */
const Content = () => {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '2rem',
      transition: 'background-color 0.3s ease, color 0.3s ease',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <ThemeToggle /> {/* Componente para alternar entre modo claro y oscuro. */}
        </div>

        <h1>Context API en React</h1>
        <p>Este es un ejemplo básico de cómo usar Context API para manejar el tema de la aplicación.</p>

        <div className="card">
          <h2>Contenido de ejemplo</h2>
          <p>Este texto cambiará de color según el tema seleccionado.</p>
          <p>¡Prueba a hacer clic en el botón de arriba para cambiar entre modo claro y oscuro!</p>
        </div>
      </div>
    </div>
  );
};

/**
 * @component App
 * @description Componente raíz de la aplicación.
 * Envuelve el componente `Content` con `ThemeProvider` para que el tema esté disponible en toda la aplicación.
 * @returns {JSX.Element} El componente principal de la aplicación.
 */
function App() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

export default App; // Exporta el componente App como predeterminado.
