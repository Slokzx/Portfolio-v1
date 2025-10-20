import type { Theme } from "../hooks/themeTypes";

export const palette = {
  background: "#0f172a",
  surface: "#112240",
  surfaceMuted: "#14213d",
  primary: "007BFF#",
  accent: "#007BFF",
  textOnDark: "#ffffff",
  textMuted: "#a8b2d1",
  border: "#1f2a48",
  subtitle: "#8892B0",
};

export type ThemeColorTokens = {
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  primary: string;
  accent: string;
  border: string;
  subtitle: string;
};

export const themeColors: Record<Theme, ThemeColorTokens> = {
  dark: {
    background: palette.background,
    surface: palette.surface,
    text: palette.textOnDark,
    mutedText: palette.textMuted,
    primary: palette.accent,
    accent: palette.primary,
    border: palette.border,
    subtitle: palette.subtitle,
  },
  light: {
    background: palette.background,
    surface: palette.surfaceMuted,
    text: palette.textOnDark,
    mutedText: "#c1c9e8",
    primary: palette.primary,
    accent: palette.accent,
    border: palette.border,
    subtitle: palette.accent,
  },
};

export const getThemeColors = (theme: Theme): ThemeColorTokens =>
  themeColors[theme];

export type ThemeColorToken = keyof ThemeColorTokens;

export const cssVarName = (token: ThemeColorToken): string =>
  `--color-${token}`;
