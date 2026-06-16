import EmojiPickerButton from "./EmojiPickurButton";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

function TaskForm() {
  return (
    <div className="max-w-lg mx-auto pt-10">
      <h1 className="text-center text-4xl font-bold text-white">
        Add New Task
      </h1>

      <EmojiPickerButton />

    <FormInput label="Task Name *"/>
    <FormInput label="Task Deadline" type="date"/>
    <FormSelect label="Category"/>
    </div>
  );
}

export default TaskForm;