import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsThreeDotsVertical } from "react-icons/bs";
import TaskCard from "../components/TaskCard";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
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
  const messages = [
    "Harness the power of productivity!",
    "Unlock your productivity potential.",
    "Let's make today count!",
    "Stay focused, stay productive.",
    "Small steps lead to big results.",
    "Success is built one task at a time.",
    "Every completed task is a victory.",
    "Progress beats perfection.",
    "Turn your plans into actions.",
    "Your future self will thank you.",
    "Consistency creates success.",
    "Make today your masterpiece.",
    "Focus on what matters most.",
    "Dream big, start small.",
    "One task closer to your goals.",
    "Productivity is a superpower.",
    "Keep moving forward.",
    "Believe in your progress.",
    "Great things take time.",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="p-6">
      <div
        className="
    relative
    overflow-hidden
    rounded-3xl
    p-6
    mb-5
    bg-white/80
    backdrop-blur-xl
    border-5
    border-white/10
    shadow-[0_8px_32px_rgba(255,255,255,0.15)]
  "
      >
        <h1 className="text-3xl font-bold mb-2">{greeting}</h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 text-lg"
          >
            {messages[index]}
          </motion.p>
        </AnimatePresence>

        <p className="text-gray-500 mt-2">Let's make today count.</p>
      </div>

      <div className="mt-8 flex flex-col items-center gap-5">
        {tasks.map((task: any, index) => (
          <div
            key={index}
            className="
        relative    
        w-full max-w-md
        p-6
        rounded-[32px]
        bg-white/10
        backdrop-blur-xl
        border border-white/20
        shadow-xl
      "
          >
            <button
              className="absolute top-10 right-7 text-white"
              onClick={() => setOpenMenu(openMenu === index ? null : index)}
            >
              <BsThreeDotsVertical />
            </button>

            {openMenu === index && (
              <div className="absolute top-12 right-4 bg-white rounded-lg shadow-lg z-10">
                <button className="block px-4 py-2 hover:bg-gray-100">
                  ✏️ Edit
                </button>

                <button className="block px-4 py-2 hover:bg-gray-100 text-red-500">
                  🗑️ Delete
                </button>
              </div>
            )}
            <TaskCard key={index} task={task} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
