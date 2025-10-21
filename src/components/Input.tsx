import { forwardRef, type ChangeEvent } from "react";

export interface InputProps {
  placeholder: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>, section: string) => void;
  label: string;
  section: string;
  className?: string;
  id: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { placeholder, type = "text", value, onChange, label, section, id },
    ref,
  ) => (
    <div className="form-input grid-row-2 grid gap-2 p-1">
      <label className="input-label">{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event, section)}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  ),
);

export default Input;
