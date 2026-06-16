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
      border-black
      text-black
      focus:outline-none
      focus:border-black
    "
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