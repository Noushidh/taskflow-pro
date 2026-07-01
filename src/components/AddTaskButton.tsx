import { HiPlus } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


export function AddTaskButton() {
  const navigate = useNavigate();
  
  return (
    <div className="fixed bottom-4 right-20 md:bottom-6 md:right-6 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-yellow-500/40 animate-ping [animation-duration:2s]" />
      
      <button
        onClick={() => navigate("/add-task")}
        className="
          relative w-full h-full
          rounded-full bg-white text-yellow-500
          flex items-center justify-center
          shadow-lg shadow-yellow-500/20
          transition-all duration-300 ease-out
          hover:scale-110 hover:shadow-yellow-500/40 hover:-translate-y-1
          active:scale-95 active:translate-y-0
        "
      >
        <HiPlus className="text-2xl md:text-3xl transition-transform duration-300 hover:rotate-90" />
      </button>
    </div>
  );
}
