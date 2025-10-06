/**
 * @file Contexto y proveedor de tema para la aplicación.
 * @description Este archivo define el `ThemeContext`, `ThemeProvider` y el hook `useTheme`
 * para gestionar el estado del tema (claro/oscuro) en toda la aplicación React.
 */

import { createContext, useState, useContext, useEffect } from 'react';

/**
 * @constant {React.Context} ThemeContext
 * @description Contexto de React para el tema. Contiene el estado `isDarkMode` y la función `toggleTheme`.
 * Se inicializa sin un valor predeterminado, ya que el `ThemeProvider` lo proporcionará.
 */
export const ThemeContext = createContext();

/**
 * @component ThemeProvider
 * @description Componente proveedor que envuelve la aplicación para hacer el contexto del tema disponible.
 * Gestiona el estado `isDarkMode`, lo persiste en `localStorage` y actualiza el atributo `data-theme` en el `html`.
 * @param {object} props - Las propiedades del componente.
 * @param {React.ReactNode} props.children - Los componentes hijos que tendrán acceso al contexto del tema.
 * @returns {JSX.Element} Un proveedor de contexto que envuelve a los hijos.
 */
export const ThemeProvider = ({ children }) => {
  /**
   * @state {boolean} isDarkMode - Indica si el modo oscuro está activado.
   * Se inicializa comprobando `localStorage` o la preferencia del sistema operativo.
   */
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  /**
   * @effect
   * @description Este efecto se ejecuta cada vez que `isDarkMode` cambia.
   * 1. Actualiza el atributo `data-theme` en el elemento `html` para aplicar estilos globales.
   * 2. Guarda la preferencia del tema actual en `localStorage` para persistencia.
   */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  /**
   * @function toggleTheme
   * @description Alterna el estado de `isDarkMode` (de claro a oscuro y viceversa).
   */
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * @hook useTheme
 * @description Hook personalizado para consumir el `ThemeContext`.
 * Proporciona un acceso conveniente a `isDarkMode` y `toggleTheme` desde cualquier componente descendiente de `ThemeProvider`.
 * @returns {{isDarkMode: boolean, toggleTheme: Function}} El estado del tema y la función para alternarlo.
 * @throws {Error} Si `useTheme` se usa fuera de un `ThemeProvider`.
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider');
  }
  return context;
};
