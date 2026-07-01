import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TaskCard from "../components/TaskCard";
import { useNavigate } from "react-router-dom";
import DeleteTask from "../components/DeleteTask";
import { notyf } from "../utils/notyf";
import type { Task } from "../types/Task";
import ShowDetails from "../components/ShowTaskDetails";
import {
  BsThreeDotsVertical,
  BsPinFill,
  BsPinAngle,
  BsPencilSquare,
  BsCheckCircleFill,
  BsEyeFill,
  BsTrashFill,
} from "react-icons/bs";

import {
  MOTIVATIONAL_MESSAGES,
  EMPTY_STATE_DETAILS,
} from "../utils/taskMessages";

function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [deleteTask, setDeleteTask] = useState<{
    index: number;
    emoji: string;
    title: string;
  } | null>(null);

  const navigate = useNavigate();
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  const hour = new Date().getHours();

  let greeting = "";
  if (hour < 12) {
    greeting = "🌞 Good Morning";
  } else if (hour < 18) {
    greeting = "☀️ Good Afternoon";
  } else {
    greeting = "🌙 Good Evening";
  }

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % MOTIVATIONAL_MESSAGES.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const handleDelete = (indexToDelete: number) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);

    setTasks(updatedTasks);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setDeleteTask(null);

    setOpenMenu(null);

    notyf.success("Task deleted successfully!");
  };

  const handlePin = (index: number) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].pinned = !updatedTasks[index].pinned;

    updatedTasks.sort((a, b) => Number(b.pinned) - Number(a.pinned));

    setTasks(updatedTasks);

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setOpenMenu(null);
  };

  const handleComplete = (index: number) => {
    const updateTasks = [...tasks];

    updateTasks[index].completed = !updateTasks[index].completed;

    setTasks(updateTasks);

    localStorage.setItem("tasks", JSON.stringify(updateTasks));

    setOpenMenu(null);

    notyf.success(
      updateTasks[index].completed
        ? "Task completed!"
        : "Task marked as incomplete!",
    );

    useEffect(() => {
      if (openMenu === null) return;

      const handleOutsideClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;

        if (!target.closest(".task-card-container")) {
          setOpenMenu(null);
        }
      };

      document.addEventListener("click", handleOutsideClick);
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, [openMenu]);
  };

  return (
    <div className="p-6">
      <div
        className="
  relative
  overflow-hidden
  rounded-3xl
  p-6
  mb-5
  
  bg-gradient-to-br from-white/[0.12] via-white/[0.01] to-black/[0.2]
  backdrop-blur-2xl
  
  before:absolute before:inset-0
  before:bg-gradient-to-r before:from-transparent before:via-white/[0.06] before:to-transparent
  before:-rotate-45 before:scale-150
  before:pointer-events-none
  
  border-2 border-t-white/[0.25] border-l-white/[0.15] border-r-black/[0.15] border-b-black/[0.3]
  
  shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5),_inset_0_1px_0_rgba(255,255,255,0.4)]
"
      >
        <h1 className="text-3xl  font-bold mb-2">{greeting}</h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 text-lg"
          >
            {MOTIVATIONAL_MESSAGES[index]}
          </motion.p>
        </AnimatePresence>

        <p className="text-gray-700 mt-2">Let's make today count.</p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-5 w-full">
        {tasks.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full max-w-md mt-10 p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center text-center shadow-2xl"
          >
            <div className="relative mb-6 flex items-center justify-center">
              <div className="absolute w-24 h-24 rounded-full bg-yellow-500/10 blur-xl animate-pulse" />
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="text-6xl z-10"
              >
                {EMPTY_STATE_DETAILS.emoji}
              </motion.span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 tracking-wide">
              {EMPTY_STATE_DETAILS.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-[280px]">
              {EMPTY_STATE_DETAILS.description}
            </p>
          </motion.div>
        ) : (
          /* Render Active To-dos */
          tasks.map((task, idx) => {
            const isMenuOpen = openMenu === idx;

            return (
              <div
                key={idx}
className={`
  relative    
  w-full max-w-md
  p-6
  rounded-[32px]
  transition-all duration-200
  
  bg-gradient-to-br from-slate-950/70 via-white/[0.03] to-slate-900/50
  backdrop-blur-3xl
  
  before:absolute before:inset-0
  before:rounded-[32px]
  before:bg-gradient-to-bl before:from-fuchsia-500/10 before:via-violet-600/5 before:to-cyan-400/10
  before:pointer-events-none
  
  border border-white/[0.18]
  
  shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6),_0_0_40px_rgba(236,72,153,0.12),_inset_0_1px_2px_rgba(255,255,255,0.25)]
  
  hover:scale-[1.015]
  hover:border-white/[0.28]
  hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.7),_0_0_50px_rgba(168,85,247,0.25),_inset_0_1px_3px_rgba(255,255,255,0.4)]
  
  task-card-container
  ${isMenuOpen ? "z-40" : "z-10"}
`}
              >
                <button
                  className="absolute top-6 right-6 p-2 rounded-full transition-colors hover:bg-white/10 text-white z-20"
                  onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
                >
                  <BsThreeDotsVertical className="text-lg" />
                </button>

                <AnimatePresence>
                  {isMenuOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-20"
                        onClick={() => setOpenMenu(null)}
                      />

                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-14 right-6 w-48 rounded-2xl bg-slate-900/95 border border-white/10 backdrop-blur-xl shadow-2xl p-1.5 z-30 overflow-hidden text-sm font-medium text-white/90"
                      >
                        <button
                          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-colors hover:bg-white/10 text-left"
                          onClick={() => handlePin(idx)}
                        >
                          {task.pinned ? (
                            <BsPinFill className="text-amber-400" />
                          ) : (
                            <BsPinAngle />
                          )}
                          <span>{task.pinned ? "Unpin Task" : "Pin Task"}</span>
                        </button>

                        <button
                          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-colors hover:bg-white/10 text-left"
                          onClick={() => navigate(`/edit/${idx}`)}
                        >
                          <BsPencilSquare className="text-blue-400" />
                          <span>Edit Details</span>
                        </button>

                        <button
                          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-colors hover:bg-white/10 text-left"
                          onClick={() => handleComplete(idx)}
                        >
                          <BsCheckCircleFill
                            className={
                              task.completed
                                ? "text-slate-400"
                                : "text-emerald-400"
                            }
                          />
                          <span>
                            {task.completed ? "Mark Incomplete" : "Complete"}
                          </span>
                        </button>

                        <button
                          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-colors hover:bg-white/10 text-left"
                          onClick={() => {
                            setSelectedTask(task);
                            setOpenMenu(null);
                          }}
                        >
                          <BsEyeFill className="text-purple-400" />
                          <span>Show Details</span>
                        </button>

                        <div className="h-[1px] bg-white/10 my-1" />

                        <button
                          className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-colors hover:bg-red-500/20 text-red-400 text-left"
                          onClick={() => {
                            setDeleteTask({
                              index: idx,
                              emoji: task.emoji,
                              title: task.taskName,
                            });
                            setOpenMenu(null);
                          }}
                        >
                          <BsTrashFill />
                          <span>Delete Task</span>
                        </button>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

                <TaskCard task={task} />
              </div>
            );
          })
        )}

        <ShowDetails
          open={selectedTask !== null}
          task={selectedTask}
          onClose={() => setSelectedTask(null)}
        />

        <DeleteTask
          open={deleteTask !== null}
          emoji={deleteTask?.emoji ?? ""}
          title={deleteTask?.title ?? ""}
          onClose={() => setDeleteTask(null)}
          onDelete={() => {
            if (deleteTask) {
              handleDelete(deleteTask.index);
              setDeleteTask(null);
            }
          }}
        />
      </div>
    </div>
  );
}

export default Home;
