import { useState } from "react";
import type { Category } from "./FormSelect";
import EmojiPickerButton from "./EmojiPickurButton";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import { useNavigate } from "react-router-dom";



function TaskForm() {
  const navigate = useNavigate()
  const [taskName,setTaskName]=useState('')
  const [deadline,setDeadline]=useState('')
  const [category,setCategory]=useState<Category|null>(null)
  const [description,setDiscription]=useState('')
  const handleSubmit=()=>{
    const task = {taskName,deadline,category,description}
     console.log(task)
     const tasks = JSON.parse(localStorage.getItem("tasks")||"[]")
     tasks.push(task)
     localStorage.setItem("tasks",JSON.stringify(tasks))
     navigate("/")
  }
  return (
    <div className="max-w-lg mx-auto pb-20">
      <h1 className="text-center text-4xl font-bold text-white">
        Add New Task
      </h1>

      <EmojiPickerButton />

    <FormInput label="Task Name *" value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
    <FormInput label="Task Deadline" type="datetime-local" value={deadline} onChange={(e)=>setDeadline(e.target.value)}/>
    <FormSelect label="Category" value={category} onChange={setCategory}/>
    <FormInput label="Description" type="text" height="h-30" value={description} onChange={(e)=>setDiscription(e.target.value)}/>
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
    >Create Task</button>
    </div>
  );
}

export default TaskForm;