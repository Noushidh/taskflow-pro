type DeleteTaskProps = {
  open: boolean;
  emoji: string;
  title: string;
  onClose: () => void;
  onDelete: () => void;
};

function DeleteTask({
  open,
  emoji,
  title,
  onClose,
  onDelete,
}: DeleteTaskProps) {
  if (!open) return null;

  return (
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md">

  <div
    className="
      w-[450px]
      rounded-[32px]
      bg-white
      shadow-[0_25px_80px_rgba(0,0,0,0.35)]
      overflow-hidden
      animate-[fadeIn_.25s_ease]
    "
  >

    {/* Top Section */}
    <div className="bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 p-8 text-center">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl">
        <span className="text-5xl">🗑️</span>
      </div>

      <h2 className="mt-5 text-3xl font-bold text-white">
        Delete Task?
      </h2>

    </div>

    {/* Content */}

    <div className="px-8 py-7">

      <div className="flex flex-col items-center">

        <div className="text-6xl">
          {emoji}
        </div>

        <h3 className="mt-3 text-2xl font-bold">
          {title}
        </h3>

      </div>

      <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4">

        <p className="text-center text-red-700 leading-7">

          <span className="font-bold">
            ⚠️ This action is permanent.
          </span>

          <br />

          Once deleted, this task cannot be recovered.

        </p>

      </div>

      {/* Buttons */}

      <div className="mt-8 flex gap-4">

        <button
          onClick={onClose}
          className="
            flex-1
            rounded-xl
            border
            border-gray-300
            py-3
            font-semibold
            transition
            hover:bg-gray-100
          "
        >
          Keep Task
        </button>

        <button
          onClick={onDelete}
          className="
            flex-1
            rounded-xl
            bg-gradient-to-r
            from-red-500
            to-rose-600
            py-3
            font-semibold
            text-white
            transition
            hover:scale-105
            hover:shadow-xl
          "
        >
          Delete
        </button>

      </div>

    </div>

  </div>

</div>
  );
}

export default DeleteTask;