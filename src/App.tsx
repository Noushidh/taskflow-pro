import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddTaskButton } from "./components/AddTaskButton";

import Home from "./pages/Home";
import AddTaskPage from "./pages/AddTaskPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-red-500">
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
          <Route path="/add-task" element={<AddTaskPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
