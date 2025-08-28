import "./App.css";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Fare i piatti",
      description: "Ricorda il piatto dentro il forno",
      completed: false,
    },
    {
      id: 2,
      title: "Pulire la casa",
      description: "Vengono i parenti, fallo bene",
      completed: true,
    },
  ]);

  const [filter, setFilter] = useState<"all" | "completed" | "active">("all");

  const filteredTasks = tasks.filter((t) => {
    if (filter === "completed") return t.completed;
    if (filter === "active") return !t.completed;
    return true;
  });

  const addTask = (task: { title: string; description: string }) => {
    setTasks([...tasks, { ...task, id: Math.random(), completed: false }]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <div className="navbar">
        <button onClick={() => setFilter("all")}>Tutte</button>
        <button onClick={() => setFilter("active")}>Non completate</button>
        <button onClick={() => setFilter("completed")}>Completate</button>
      </div>

      <div className="main-content">
        <ToDoForm addTask={addTask} />
        <ToDoList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggle={toggleTask}
        />
      </div>
    </>
  );
}

export default App;
