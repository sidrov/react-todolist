import { useState } from "react";
import "../themes/ToDoForm.css";

export type Task = {
  title: string;
  description: string;
  completed: boolean;
};

type TodoFormProps = {
  addTask: (task: Task) => void;
};

function ToDoForm({ addTask }: TodoFormProps) {
  //   const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const val = type == "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todoItem = {
      title: formData.title,
      description: formData.description,
      completed: formData.completed,
    };
    addTask(todoItem);

    setFormData({
      title: "",
      description: "",
      completed: false,
    });
    console.log("Submitted ToDo Item:", todoItem);
    // dispatch(add(todoItem));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="todo-form">
        <div>
          <input
            type="text"
            name="title"
            placeholder="Titolo Attività"
            value={formData.title}
            onChange={handleChange}
            className="inputTitle"
            required
          />
        </div>
        <div>
          <textarea
            name="description"
            placeholder="Descrizione Attività"
            value={formData.description}
            className="inputDescription"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submitForm">
          Aggiungi ToDo
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;
