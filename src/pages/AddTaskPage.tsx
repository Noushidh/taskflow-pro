

function AddTaskPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Add New Task</h1>

        <input
          type="text"
          placeholder="Enter task..."
          className="w-full border p-3 rounded-lg"
        />
      </div>
    </div>
  );
}

export default AddTaskPage;