import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { AddTaskButton } from "./components/AddTaskButton";
import Home from "./pages/Home";
import AddTaskPage from "./pages/AddTaskPage";

function App() {
const backgrounds = [
  "#ef4444", // red
  "#3b82f6", // blue
  "#22c55e", // green
  "#a855f7", // purple
  "#1e293b", // slate
];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 10000); // change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
          <div
      className="min-h-screen"
      style={{
        backgroundColor: backgrounds[bgIndex],
        transition: "background-color 3s ease-in-out",
      }}
    >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <AddTaskButton />
              </>
            }
          />

          <Route path="/add-task" element={<AddTaskPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;