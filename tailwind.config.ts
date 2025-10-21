import type { Config } from "tailwindcss";
import { palette } from "./src/styles/colors";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: palette.background,
        surface: palette.surface,
        surfaceMuted: palette.surfaceMuted,
        primary: palette.primary,
        accent: palette.accent,
        border: palette.border,
        text: palette.textOnDark,
        mutedText: palette.textMuted,
      },
    },
  },
  plugins: [],
};

export default config;
