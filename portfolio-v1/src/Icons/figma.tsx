import type { IconColorProps } from "../components/Icons";

const IconFigma = ({ className }: IconColorProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      className={className}
    >
      <title>Figma</title>
      <circle cx="8" cy="6" r="4" fill="#F24E1E" />
      <circle cx="16" cy="6" r="4" fill="#FF7262" />
      <circle cx="8" cy="12" r="4" fill="#A259FF" />
      <circle cx="16" cy="12" r="4" fill="#1ABCFE" />
      <circle cx="8" cy="18" r="4" fill="#0ACF83" />
    </svg>
  );
};

export default IconFigma;
