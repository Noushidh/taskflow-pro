type FormSelectProps = {
  label: string;
};

function FormSelect({ label }: FormSelectProps) {
  return (
    <div className="mt-6">
      <label className="block mb-2 text-black">
        {label}
      </label>

      <select className="w-full p-4 rounded-2xl border border-black">
        <option value="">Select Category</option>
        <option value="coding">💻 Coding</option>
        <option value="education">📚 Education</option>
        <option value="work">💼 Work</option>
        <option value="personal">🏠 Personal</option>
        <option value="goals">🎯 Goals</option>
        <option value="other">📅 Other</option>
      </select>
    </div>
  );
}

export default FormSelect;