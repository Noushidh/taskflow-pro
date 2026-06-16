import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Home() {
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
  });
  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
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
    </div>
  );
}

export function Greet() {
  return (
    <>
      <button
        className="
    fixed bottom-4 right-20
    md:bottom-6 md:right-6
    w-14 h-14 md:w-16 md:h-16
    rounded-full
    bg-green-400
    text-white
    text-3xl md:text-4xl
    flex items-center justify-center
    shadow-lg
    animate-pulse
    
  "
      >
        +
      </button>
    </>
  );
}
