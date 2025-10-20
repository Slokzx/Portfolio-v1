import type { ComponentType } from "react";
import IconApple from "../Icons/apple";
import IconCypress from "../Icons/cypress";
import IconExternal from "../Icons/external";
import IconFigma from "../Icons/figma";
import IconGitHub from "../Icons/github";
import IconInstagram from "../Icons/instagram";
import IconJest from "../Icons/jest";
import IconLinkedin from "../Icons/linkedin";
import Logo from "../Icons/Logo";
import IconNpm from "../Icons/npm";
import IconReact from "../Icons/react";
import IconSketch from "../Icons/sketch";
import IconTailwind from "../Icons/tailwind";
import IconTwitter from "../Icons/twitter";
import IconWindows from "../Icons/windows";
import { useTheme } from "../hooks/useTheme";
import { getThemeColors, type ThemeColorTokens } from "../styles/colors";

interface IconRegistryEntry {
  component: ComponentType<IconColorProps>;
  defaultClassName?: string;
}

const ICON_REGISTRY: Record<string, IconRegistryEntry> = {
  apple: { component: IconApple },
  cypress: { component: IconCypress },
  external: { component: IconExternal },
  figma: { component: IconFigma },
  github: { component: IconGitHub },
  instagram: { component: IconInstagram },
  jest: { component: IconJest },
  linkedin: { component: IconLinkedin },
  logo: {
    component: Logo,
    defaultClassName: "h-12 w-12 flex-shrink-0 drop-shadow-sm",
  },
  npm: { component: IconNpm },
  react: { component: IconReact },
  sketch: { component: IconSketch },
  tailwind: { component: IconTailwind },
  twitter: { component: IconTwitter },
  windows: { component: IconWindows },
};

const Icon = ({ name, className }: IconProps) => {
  const { theme } = useTheme();
  const colors = getThemeColors(theme);
  const key = name.trim().toLowerCase();
  const { component: SelectedIcon, defaultClassName } =
    ICON_REGISTRY[key] ?? ICON_REGISTRY.external;

  const appliedClassName =
    className ?? defaultClassName ?? "h-6 w-6 flex-shrink-0 drop-shadow-sm";

  return <SelectedIcon color={colors} className={appliedClassName} />;
};

interface IconProps {
  name: string;
  className?: string;
}

export interface IconColorProps {
  className?: string;
  color: ThemeColorTokens;
}

export default Icon;
