import type { IconColorProps } from "../components/Icons";

const IconWindows = ({ className }: IconColorProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 24 24"
      className={className}
    >
      <title>Windows</title>
      <path
        d="M1.5 3.5 11 2v9.5H1.5ZM11 12.5h-9.5V21L11 19.5Zm1.5-10 10-1.5V11H12.5Zm0 10H22.5V22l-10 1.5Z"
        fill="#00ADEF"
      />
    </svg>
  );
};

export default IconWindows;
