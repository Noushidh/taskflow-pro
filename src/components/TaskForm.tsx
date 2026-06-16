import EmojiPickerButton from "./EmojiPickurButton";

function TaskForm() {
  return (
    <div className="max-w-lg mx-auto pt-10">
      <h1 className="text-center text-4xl font-bold text-white">
        Add New Task
      </h1>

      <EmojiPickerButton />

      {/* Task inputs here */}
    </div>
  );
}

export default TaskForm;