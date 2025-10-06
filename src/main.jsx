/**
 * @file Punto de entrada principal de la aplicación React.
 * @description Configura el renderizado de la aplicación en el DOM.
 */

import { StrictMode } from 'react'; // Importa StrictMode para destacar problemas potenciales en una aplicación.
import { createRoot } from 'react-dom/client'; // Importa createRoot para la API de renderizado concurrente de React.
import './index.css'; // Importa los estilos CSS globales de la aplicación.
import App from './App.jsx'; // Importa el componente principal de la aplicación.

/**
 * Renderiza el componente principal de la aplicación en el elemento 'root' del DOM.
 * @param {HTMLElement} document.getElementById('root') - El elemento DOM donde se montará la aplicación.
 */
createRoot(document.getElementById('root')).render(
  // StrictMode activa comprobaciones y advertencias adicionales para sus descendientes.
  <StrictMode>
    <App /> {/* El componente principal de la aplicación. */}
  </StrictMode>,
);
