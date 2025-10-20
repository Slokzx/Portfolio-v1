import { createContext } from "react";
import type { ThemeContextProps } from "./themeTypes";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);
