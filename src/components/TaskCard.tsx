import type { Task } from "../types/Task";

type Props = {
  task: Task;
};

function TaskCard({ task }: Props) {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{task.emoji}</span>

        <div>
          <h2 className="text-xl font-bold text-white">{task.taskName}</h2>

          <p className="text-sm text-white/70">{task.category?.name}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-white/90 leading-relaxed mb-4">{task.description}</p>

      {/* Footer */}
      <div className="flex justify-between items-center border-t border-white/20 pt-3">
        <span className="text-sm text-white/70">
          📅 {new Date(task.deadline).toLocaleDateString()}
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
