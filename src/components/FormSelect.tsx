import { useState } from "react";

export type Category = {
  emoji: string;
  name: string;
  color: string;
};

type FormSelectProps = {
  label: string;
  value: Category | null;
  onChange: (category: Category) => void;
};

function FormSelect({ label, value, onChange }: FormSelectProps) {
  const [showCategories, setShowCategories] = useState(false);

  const categories: Category[] = [
    { emoji: "💻", name: "Coding", color: "from-violet-500 to-purple-500" },
    { emoji: "📚", name: "Education", color: "from-orange-400 to-orange-500" },
    { emoji: "💼", name: "Work", color: "from-blue-500 to-cyan-500" },
    { emoji: "👤", name: "Personal", color: "from-pink-400 to-purple-300" },
    { emoji: "🎯", name: "Goals", color: "from-green-400 to-emerald-500" },
    {
      emoji: "💪",
      name: "Health/Fitness",
      color: "from-yellow-300 to-yellow-500",
    },
    { emoji: "🛒", name: "Shopping", color: "from-red-400 to-rose-500" },
    { emoji: "💰", name: "Finance", color: "from-lime-400 to-green-500" },
    { emoji: "📖", name: "Reading", color: "from-indigo-400 to-blue-500" },
    { emoji: "🎨", name: "Creativity", color: "from-fuchsia-500 to-pink-500" },
    { emoji: "✈️", name: "Travel", color: "from-sky-400 to-cyan-500" },
    { emoji: "🎵", name: "Music", color: "from-purple-400 to-indigo-500" },
    { emoji: "🎮", name: "Gaming", color: "from-red-500 to-orange-500" },
    { emoji: "📅", name: "Other", color: "from-slate-500 to-slate-700" },
  ];

  const handleSelect = (category: Category) => {
    onChange(category);
    setShowCategories(false);
  };

  return (
    <div className="mt-6">
      <label className="block mb-2 font-medium text-black">{label}</label>

      <button
        type="button"
        onClick={() => setShowCategories((prev) => !prev)}
        className="
    w-full
    p-4
    rounded-2xl
    border
    border-black
    text-black
    flex
    items-center
    justify-between
        "
      >
        {value ? (
          <div
            className={`
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              font-medium
              text-black
              bg-gradient-to-r
              ${value.color}
            `}
          >
            <span>{value.emoji}</span>
            <span>{value.name}</span>
          </div>
        ) : (
          <span className="text-black">Choose Category</span>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5 text-white/80 transition-transform duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>{" "}
      </button>

      {showCategories && (
        <div
          className="
            mt-4
            max-h-[400px]
            overflow-y-auto
            rounded-3xl
            p-4
            bg-black/20
            space-y-3
          "
        >
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => handleSelect(category)}
              className={`
                w-full
                p-5
                rounded-3xl
                flex
                items-center
                gap-3
                text-white
                bg-gradient-to-r
                ${category.color}
                hover:scale-[1.02]
                transition
              `}
            >
              <span className="text-2xl">{category.emoji}</span>
              <span className="font-semibold">{category.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default FormSelect;
