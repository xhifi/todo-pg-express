import { Route, Routes } from "react-router-dom";
import { Home, AddTodo, UpdateTodo } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddTodo />} />
      <Route path="/:id/update" element={<UpdateTodo />} />
    </Routes>
  );
}

export default App;
