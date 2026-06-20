import type React from "react";

type FormInputProps = {
  label: string;
  type?: string;
  height?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FormInput({
  label,
  type = "text",
  height = "",
  value,
  onChange,
}: FormInputProps) {
  return (
    <div className="relative mt-6">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        className={`
      peer
      w-100
      p-4
      rounded-2xl
      bg-transparent
      border
      border-black
      text-black
      focus:outline-none
      focus:border-black
      ${height}
    `}
      />

      <label
        className="
      absolute
      left-4
      px-2
      bg-[oklch(0.61_0.11_210.56)]
      transition-all
      duration-200

      peer-placeholder-shown:top-4
      peer-placeholder-shown:text-base

      peer-focus:-top-3
      peer-focus:text-sm

      text-black
    "
      >
        {label}
      </label>
    </div>
  );
}

export default FormInput;
