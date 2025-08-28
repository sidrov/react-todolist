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

  const addTask = (task: { title: string; description: string }) => {
    setTasks([...tasks, { ...task, id: Math.random(), completed: false }]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="todo-app-container">
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} onDelete={deleteTask} onToggle={toggleTask} />
    </div>
  );
}

export default App;
