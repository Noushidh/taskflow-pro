import { useState, useEffect } from "react";
import type { Category } from "./FormSelect";
import type { Task } from "../types/Task";
import EmojiPickerButton from "./EmojiPickurButton";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import { useNavigate } from "react-router-dom";
import { notyf } from "../utils/notyf";
import { useParams } from "react-router-dom";

function TaskForm() {
  const navigate = useNavigate();
  const [emoji, setEmoji] = useState("😀");
  const [taskName, setTaskName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [category, setCategory] = useState<Category | null>(null);
  const [description, setDiscription] = useState("");

  const { index } = useParams();
  const isEditing = index !== undefined;

  useEffect(() => {
    if (isEditing) {
      const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

      const task = tasks[Number(index)];

      setEmoji(task.emoji);
      setTaskName(task.taskName);
      setDeadline(task.deadline);
      setCategory(task.category);
      setDiscription(task.description);
    }
  }, [index, isEditing]);

  const handleSubmit = () => {
    if (!taskName.trim()) {
      notyf.error("task name required");
      return;
    }
    if (deadline && new Date(deadline) < new Date()) {
      notyf.error("Deadline cannot be in the past");
      return;
    }
    const task: Task = {
      emoji,
      taskName,
      deadline,
      category,
      description,
    };

    const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
    if (isEditing) {
      tasks[Number(index)] = task;
      notyf.success("Task updated successfully!");
    } else {
      tasks.push(task);
      notyf.success("Task created successfully!");
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto pb-20">
      <h1 className="text-center text-4xl font-bold text-white">
        {index !== undefined ? "Edit Task" : "Add New Task"}
      </h1>

      <EmojiPickerButton emoji={emoji} setEmoji={setEmoji} />

      <FormInput
        label="Task Name *"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      {taskName.trim() && (
        <small className={taskName.length > 50 ? "text-red-500" : "text-black"}>
          {taskName.length}/50
        </small>
      )}

      <FormInput
        label="Task Deadline"
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <FormSelect label="Category" value={category} onChange={setCategory} />

      <FormInput
        label="Description"
        type="text"
        height="h-30"
        value={description}
        onChange={(e) => setDiscription(e.target.value)}
      />
      {description.trim() && (
        <small
          className={description.length > 300 ? "text-red-700" : "text-black"}
        >
          {description.length}/300
        </small>
      )}

      <button
        onClick={handleSubmit}
        className="
          w-full
          mt-8
          p-4
          rounded-2xl
          bg-red-500
          text-white
          font-semibold
        "
      >
        {isEditing ? "Update Task" : "Create Task"}
      </button>
    </div>
  );
}

export default TaskForm;
