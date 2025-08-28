import ToDoItem from "./ToDoItem";
import type { Task } from "./ToDoItem";

interface ToDoListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

function ToDoList({ tasks, onDelete, onToggle }: ToDoListProps) {
  return (
    <div>
      {tasks.map((task) => (
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
