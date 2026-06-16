import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddTaskButton } from "./components/AddTaskButton";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-red-500">
        <AddTaskButton />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
