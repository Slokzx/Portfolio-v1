import type { IconColorProps } from "../components/Icons";

const Logo = ({ className, color }: IconColorProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="375 250 500 400"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Slok Shah logo"
      className={className}
    >
      <g fill={color.background} stroke={color.primary} strokeWidth="16">
        <LogoLayer />

        <g transform="translate(0, 0)">
          <LogoLayer />
        </g>

        <g transform="translate(251.566, -8.90498)">
          <LogoLayer />
        </g>
      </g>
    </svg>
  );
};

const LogoLayer = () => (
  <>
    <polyline points="535.198 270.293 430.92 328.332 386.644 354.626 447.56 380.617 445.46 568.46 561.81 495.32 561.81 558.49 443.263 634.921 441.036 689.205 611.68 578.43 608.35 418.87 501.97 482.03 501.97 412.22 598.38 352.38 598.38 295.87 445.46 382.297" />
    <polyline points="386.512 617.121 380.131 615 380.112 670.368 441.036 689.205 443.263 634.95 380.131 615 445.449 568.476 385.649 546.303 385.62 355.7" />
    <polyline points="534.3 270.493 598.863 296.093" />
    <polyline points="608.876 419.646 559.9 394.05 500.907 430.781" />
    <polyline points="562.126 558.783 496.457 536.526" />
  </>
);

export default Logo;
