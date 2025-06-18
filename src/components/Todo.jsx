// Import component-specific styles
import "../components/Todo.css";
// Import React hook
import { useState } from "react";
// Import child components
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
// Import localStorage helper functions
import {
  getlocalStorageTodoData,
  setlocalStorageTodoData,
} from "./TodoLocalStorage";

// Todo component - main logic container
export const Todo = () => {
  // Initialize state with localStorage data
  const [task, setTask] = useState(() => getlocalStorageTodoData());
  const [dateTime, setDateTime] = useState("");

  // Add new task
  const handalSubmitForm = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return; // prevent empty input

    // Check for duplicate content
    const ifTodoValueMatched = task.find(
      (curTodo) => curTodo.content === content
    );
    if (ifTodoValueMatched) return;

    // Add task to state
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };

  // Toggle task check/uncheck
  const handalCheckedTod = (content) => {
    const updatedTask = task.map((curTodo) => {
      if (curTodo.content === content) {
        return { ...curTodo, checked: !curTodo.checked };
      } else {
        return curTodo;
      }
    });
    setTask(updatedTask);
  };

  // Delete a task
  const handalTodoItem = (value) => {
    const updateTask = task.filter((curTodo) => curTodo.content !== value);
    setTask(updateTask);
  };

  // Clear all tasks
  const handalAllTodo = () => {
    setTask([]);
  };

  // Save current tasks to localStorage
  setlocalStorageTodoData(task);

  // Update date & time every second
  setInterval(() => {
    const now = new Date();
    const formatedDate = now.toLocaleDateString();
    const formatedTime = now.toLocaleTimeString();
    setDateTime(`${formatedDate} - ${formatedTime}`);
  }, 1000);

  return (
    <section className="todo-container">
      <h1>Todo App</h1>
      <h3>{dateTime}</h3>
      <div className="wrapper">
        <TodoForm onAddTodo={handalSubmitForm} />
        <section className="My-ul">
          <ul className="todo-list">
            {/* Render each todo */}
            {task.map((curTodo) => {
              return (
                <TodoList
                  key={curTodo.id}
                  data={curTodo.content}
                  checked={curTodo.checked}
                  onhandalDeletTodo={handalTodoItem}
                  onhandalChechedTodo={handalCheckedTod}
                />
              );
            })}
          </ul>
        </section>
        <section className="clear-section">
          <button className="clear-btn" onClick={handalAllTodo}>
            Clear All
          </button>
        </section>
      </div>
    </section>
  );
};
