import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
  const [tasks, setTasks] = useState([]);
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

      <div className="mt-8 flex flex-col items-center gap-4">
        {tasks.map((task: any, index) => (
          <div
            key={index}
            className="   w-full
    max-w-md
    p-6
    rounded-[32px]
    bg-white/5
    backdrop-blur-xl
    border
    border-white/20
    shadow-lg"
          >
            <h2>{task.taskName}</h2>
            <h3>{task.emoji}</h3>
            <p>{task.description}</p>
            <p>{task.category?.name}</p>
            <p>{task.deadline}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
