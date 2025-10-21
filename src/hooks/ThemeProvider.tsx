import React, { useEffect, useState, type ReactNode } from "react";
import type { Theme } from "./themeTypes";
import { ThemeContext } from "./ThemeContext";
import {
  cssVarName,
  getThemeColors,
  type ThemeColorToken,
} from "../styles/colors";

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);

    const tokens = getThemeColors(theme);
    (Object.entries(tokens) as Array<[ThemeColorToken, string]>).forEach(
      ([token, value]) => {
        root.style.setProperty(cssVarName(token), value);
      },
    );
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
