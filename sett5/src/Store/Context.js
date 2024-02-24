import { createContext, useState } from "react";

export const Context = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeProvider value={{ isDarkMode, toggleMode }}>{children}</ThemeProvider>
  );
};
