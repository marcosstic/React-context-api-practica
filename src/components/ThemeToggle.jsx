/**
 * @file Componente ThemeToggle.
 * @description Este componente proporciona un botón para alternar entre el modo claro y oscuro de la aplicación.
 * Utiliza el hook `useTheme` para acceder al estado del tema y a la función para cambiarlo.
 */

import { useTheme } from '../context/ThemeContext'; // Importa el hook personalizado para acceder al contexto del tema.

/**
 * @component ThemeToggle
 * @description Un botón interactivo que permite al usuario cambiar el tema de la aplicación.
 * El texto y los estilos del botón cambian dinámicamente según el `isDarkMode` actual.
 * @returns {JSX.Element} El botón para alternar el tema.
 */
const ThemeToggle = () => {
  // Obtiene el estado actual del tema (isDarkMode) y la función para alternarlo (toggleTheme) del contexto.
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme} // Llama a toggleTheme cuando se hace clic en el botón.
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: isDarkMode ? '#333' : '#f0f0f0', // Fondo oscuro en modo oscuro, claro en modo claro.
        color: isDarkMode ? '#fff' : '#333', // Texto claro en modo oscuro, oscuro en modo claro.
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease' // Transición suave para los cambios de estilo.
      }}
    >
      {isDarkMode ? '🌞 Modo Claro' : '🌙 Modo Oscuro'} {/* Muestra el texto según el modo actual. */}
    </button>
  );
};

export default ThemeToggle; // Exporta el componente ThemeToggle como predeterminado.
