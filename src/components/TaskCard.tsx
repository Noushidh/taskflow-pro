import type { Task } from "../types/Task";
import { BsPinAngleFill, BsCheckCircleFill } from "react-icons/bs";

type Props = {
  task: Task;
};

function TaskCard({ task }: Props) {
  const isCompleted = task.completed;

  return (
    <div className={`transition-all duration-300 ${isCompleted ? "opacity-50 grayscale-[40%] pointer-events-none" : ""}`}>
      
      {task.pinned && (
        <div
          className="
          absolute
          top-5
          right-16
          flex
          items-center
          gap-1
          rounded-full
          bg-white
          px-3
          py-1
          shadow-lg
        "
        >
          <BsPinAngleFill className="text-sm text-yellow-500 rotate-45" />
          <span className="text-xs font-semibold text-yellow-500">Pinned</span>
        </div>
      )}
      
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{task.emoji}</span>

        <div>
          <h2 className={`text-xl font-bold text-white transition-all ${isCompleted ? "line-through text-white/50 decoration-white/40" : ""}`}>
            {task.taskName}
          </h2>

          <p className="text-sm text-white/70">{task.category?.name}</p>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-white/20 pt-3">
        <span className="text-sm text-white/70 flex items-center gap-1.5">
          <span>📅</span>
          <span>
            {new Date(task.deadline).toLocaleString("en-IN", {
              weekday: "short",
              day: "numeric",
              month: "short",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
          
          {!isCompleted ? (
            <span className="animate-vibrate text-2xl" title="Pending Task">
              ⏰
            </span>
          ) : (
            <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded ml-1" title="Completed">
              <BsCheckCircleFill className="text-[11px]" /> DONE
            </span>
          )}
        </span>

        {task.category && (
          <span
            className={`text-sm px-3 py-1 rounded-full text-white bg-gradient-to-r ${task.category.color}`}
          >
            <span>{task.category.emoji}</span>
            <span>{task.category.name}</span>
          </span>
        )}
      </div>
    </div>
  );
}

export default TaskCard;