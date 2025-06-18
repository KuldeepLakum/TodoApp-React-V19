import { useState } from "react";

// Form to add new todos
export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  // Handle input change
  const handalInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  // Handle form submission
  const handalSubmitForm = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };

  return (
    <section className="form">
      <form onSubmit={handalSubmitForm}>
        <input
          type="text"
          placeholder="write task and hit enter to add task"
          autoComplete="off"
          value={inputValue.content}
          onChange={(event) => handalInputChange(event.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </section>
  );
};
