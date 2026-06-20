import { useNavigate } from "react-router-dom";

export function AddTaskButton() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/add-task");
        }}
        className="
    fixed bottom-4 right-20
    md:bottom-6 md:right-6
    w-14 h-14 md:w-16 md:h-16
    rounded-full
    bg-white
    text-yellow-500
    text-3xl md:text-4xl
    flex items-center justify-center
    shadow-lg
    animate-pulse

  "
      >
        +
      </button>
    </>
  );
}
