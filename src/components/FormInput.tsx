type FormInputProps = {
  label: string;
  type?: string;
};

function FormInput({
  label,
  type = "text",
}: FormInputProps) {
  return (
    <div className="relative mt-6">
      <input
        type={type}
        placeholder=" "
        className="
          peer
          w-full
          p-4
          rounded-2xl
          bg-transparent
          border
          border-slate-500
          text-white
          focus:outline-none
          focus:border-purple-500
        "
      />

      <label
  className="
    absolute
    left-4
    -top-3
    px-2
    text-sm
    text-purple-500
    bg-[oklch(0.61_0.11_210.56)]
  "
      >
        {label}
      </label>
    </div>
  );
}

export default FormInput;