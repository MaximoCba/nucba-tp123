import { Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio";
import Pokemon from "./components/Pokemon";
import NavBar from "./components/NavBar";
import ToDoList from "./components/ToDoList";
import Buscador from "./components/Buscador";

function AppRouter() {
  return (
    <>
      <NavBar />
      <Buscador />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="/todolist" element={<ToDoList />} />
      </Routes>
    </>
  );
}

export default AppRouter;
