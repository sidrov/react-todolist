import "../themes/ToDoItem.css";

export interface Task {
  id: number;
  title: string;
  description?: string;
  completed?: boolean;
}

interface ToDoItemProps {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

function ToDoItem({ task, onDelete, onToggle }: ToDoItemProps) {
  return (
    <div className={`card-container ${task.completed ? "completed" : ""}`}>
      <h2 className="card-title">{task.title}</h2>
      <p className="card-description">{task.description}</p>
      <p className="card-completed">
        Task Completato:{" "}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
      </p>
      <button className="card-delete" onClick={() => onDelete(task.id)}>
        Elimina
      </button>
    </div>
  );
}

export default ToDoItem;
