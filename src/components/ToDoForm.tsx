import { useState } from "react";
import "../themes/ToDoForm.css";

function ToDoForm({ addTask }) {
  //   const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const val =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;
    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
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
      </form>
      <button className="submitForm" onClick={handleSubmit}>
        Aggiungi ToDo
      </button>
    </div>
  );
}

export default ToDoForm;
