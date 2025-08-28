import ToDoItem from "./ToDoItem";
import type { Task } from "./ToDoItem";
import "../themes/ToDoList.css";

interface ToDoListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

function ToDoList({ tasks, onDelete, onToggle }: ToDoListProps) {
  return (
    <div className="list-container">
      {[...tasks].reverse().map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default ToDoList;
