import type { IconColorProps } from "../components/Icons";

const IconApple = ({ className }: IconColorProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      className={className}
    >
      <title>Apple</title>
      <path
        fill="#A3AAAE"
        d="M16.73 3.5c-.94.56-1.57 1.49-1.45 2.57 1.39.09 2.56-.48 3.32-1.27.73-.78 1.23-1.89 1.08-2.99-1.07.04-2.21.65-2.95 1.69zM19.5 9.45c-1.55-.9-3.32-.36-4.14.36-.94.82-1.38.82-2.28.07-1.55-1.27-4-.94-5.33.43-1.94 1.99-1.62 5.7-.07 8.32.94 1.6 2.21 3.38 3.82 3.33 1.48-.05 1.65-.96 3.1-.96 1.45 0 1.58.96 3.1.92 1.61-.03 2.61-1.6 3.58-3.2.63-1.03.86-1.54 1.35-2.7-3.54-1.35-4.11-6.13-.13-7.57z"
      />
    </svg>
  );
};

export default IconApple;
