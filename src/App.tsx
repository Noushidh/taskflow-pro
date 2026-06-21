import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { AddTaskButton } from "./components/AddTaskButton";
import Home from "./pages/Home";
import AddTaskPage from "./pages/AddTaskPage";
import { APP_BACKGROUNDS } from "./constants/colors";
import TaskForm from "./components/TaskForm";

function App() {

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % APP_BACKGROUNDS.length);
    }, 10000); // change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <BrowserRouter>
          <div
      className="min-h-screen"
      style={{
        backgroundColor: APP_BACKGROUNDS[bgIndex],
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
          <Route path="/edit/:index" element={<TaskForm/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;