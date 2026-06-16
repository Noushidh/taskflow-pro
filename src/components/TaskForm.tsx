import EmojiPickerButton from "./EmojiPickurButton";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

function TaskForm() {
  return (
    <div className="max-w-lg mx-auto pb-20">
      <h1 className="text-center text-4xl font-bold text-white">
        Add New Task
      </h1>

      <EmojiPickerButton />

    <FormInput label="Task Name *"/>
    <FormInput label="Task Deadline" type="date"/>
    <FormSelect label="Category"/>
    <FormInput label="Description" type="text" height="h-30"/>
    <button 
    type="submit"
      className="
          w-full
          mt-8
          p-4
          rounded-2xl
          bg-red-500
          text-white
          font-semibold
        "
    >Create Task</button>
    </div>
  );
}

export default TaskForm;