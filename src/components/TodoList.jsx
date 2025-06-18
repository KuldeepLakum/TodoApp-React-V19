import { MdCheck, MdDeleteForever } from "react-icons/md";

// Renders a single todo item
export const TodoList = ({
  checked,
  onhandalChechedTodo,
  data,
  onhandalDeletTodo,
}) => {
  const handalTodoItem = () => {
    onhandalDeletTodo(data);
  };

  return (
    <li className="todo">
      <button
        className={checked ? "checked-btn" : "check-btn"}
        onClick={() => onhandalChechedTodo(data)}
      >
        <MdCheck />
      </button>
      <span className={checked ? "checklist" : "not-cheklist"}>{data}</span>
      <button className="delet-btn" onClick={handalTodoItem}>
        <MdDeleteForever className="delet-icon" />
      </button>
    </li>
  );
};
