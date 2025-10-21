import type { IconColorProps } from "../components/Icons";

const IconTailwind = ({ className, color }: IconColorProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      className={className}
    >
      <title>Tailwind CSS</title>
      <path
        d="M12 5.5c2.5 0 4 1.2 5 3.6-.999-1.2-2.099-1.7-3.3-1.5-.718.12-1.228.552-1.838 1.092-.986.871-2.103 1.856-4.862 1.856-2.5 0-4-1.2-5-3.6 1 1.2 2.1 1.7 3.301 1.5.718-.12 1.228-.552 1.837-1.092.987-.871 2.104-1.856 4.862-1.856Zm0 7c2.5 0 4 1.2 5 3.6-.999-1.2-2.099-1.7-3.3-1.5-.718.12-1.228.552-1.838 1.092-.986.871-2.103 1.856-4.862 1.856-2.5 0-4-1.2-5-3.6 1 1.2 2.1 1.7 3.301 1.5.718-.12 1.228-.552 1.837-1.092.987-.871 2.104-1.856 4.862-1.856Z"
        fill={color.primary}
      />
    </svg>
  );
};

export default IconTailwind;
