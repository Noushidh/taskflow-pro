import type { Task } from "../types/Task";

type ShowDetailsProps = {
  open: boolean;
  task: Task | null;
  onClose: () => void;
};

function ShowDetails({ open, task, onClose }: ShowDetailsProps) {
  if (!open || !task) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-[650px] rounded-3xl bg-slate-800 p-8 shadow-2xl border border-slate-700">
        <h2 className="mb-8 text-center text-4xl font-bold text-white">
          📋 Task Details
        </h2>

        <div className="space-y-5">
          <div className="flex justify-between border-b border-slate-600 pb-3">
            <span className="font-semibold text-white">😀 Emoji</span>
            <span className="text-white text-3xl">{task.emoji}</span>
          </div>

          <div className="flex justify-between border-b border-slate-600 pb-3">
            <span className="font-semibold text-white">📝 Task</span>
            <span className="text-white">{task.taskName}</span>
          </div>

          <div className="flex justify-between border-b border-slate-600 pb-3">
            <span className="font-semibold text-white">📌 Status</span>

            <span
              className={
                task.pinned ? "text-yellow-400 font-semibold" : "text-gray-400"
              }
            >
              {task.pinned ? "Pinned" : "Not Pinned"}
            </span>
          </div>

          <div className="flex justify-between border-b border-slate-600 pb-3">
            <span className="font-semibold text-white">✅ Status</span>

            <span
              className={`rounded-full px-3 py-1 text-sm font-semibold ${
                task.completed
                  ? "bg-green-500 text-white"
                  : "bg-gray-600 text-white"
              }`}
            >
              {task.completed ? "Completed" : "Pending"}
            </span>
          </div>

          <div className="flex justify-between border-b border-slate-600 pb-3">
            <span className="font-semibold text-white">🏷️ Category</span>

            <span className="text-white">
              {task.category?.emoji} {task.category?.name}
            </span>
          </div>

          <div className="flex justify-between border-b border-slate-600 pb-3">
            <span className="font-semibold text-white">📅 Deadline</span>

            <span className="text-white">
              {new Date(task.deadline).toLocaleString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              })}
            </span>
          </div>

          <div className="border-b border-slate-600 pb-4">
            <h3 className="mb-3 font-semibold text-white">📄 Description</h3>

            <p className="leading-7 text-slate-300 whitespace-pre-wrap">
              {task.description || "No description available."}
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="
            mt-8
            w-full
            rounded-2xl
            bg-blue-500
            py-3
            font-semibold
            text-white
            transition
            hover:bg-blue-600
          "
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ShowDetails;
