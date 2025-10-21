import type { Theme } from "../hooks/themeTypes";

export const palette = {
  background: "#0f172a",
  surface: "#112240",
  surfaceMuted: "#14213d",
  primary: "#007BFF",
  textOnDark: "#ffffff",
  textMuted: "#a8b2d1",
  border: "#1f2a48",
  subtitle: "#8892B0",
  textOnLight: "#272727",
  cardHoverDark: "rgba(30, 41, 59, 0.5)",
  cardHoverLight: "rgba(195, 197, 201, 0.5)",
};

export type ThemeColorTokens = {
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  primary: string;
  border: string;
  subtitle: string;
  cardHover: string;
};

export const themeColors: Record<Theme, ThemeColorTokens> = {
  dark: {
    background: palette.background,
    surface: palette.surface,
    text: palette.textOnDark,
    mutedText: palette.textMuted,
    primary: palette.primary,
    border: palette.border,
    subtitle: palette.subtitle,
    cardHover: palette.cardHoverDark,
  },
  light: {
    background: palette.textOnDark,
    surface: palette.surfaceMuted,
    text: palette.textOnDark,
    mutedText: palette.textOnLight,
    primary: palette.primary,
    border: palette.border,
    subtitle: palette.subtitle,
    cardHover: palette.cardHoverLight,
  },
};

export const getThemeColors = (theme: Theme): ThemeColorTokens =>
  themeColors[theme];

export type ThemeColorToken = keyof ThemeColorTokens;

export const cssVarName = (token: ThemeColorToken): string =>
  `--color-${token}`;
