import React from "react";
import ok from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../../redux/actions/todoActions";

const TodoItem = ({ completed, text, id }) => {
  const dispatch = useDispatch()
  const styled = {
    textDecoration: completed ? "line-through" : "none",
  };
  const handleToggle = () => dispatch(toggleTodo(id));
  const handleDelete = () => dispatch(deleteTodo(id));
  return (
    <div style={styled} className="todoInput">
      <p>{text}</p>
      <div>
        <span>
          <img src={ok} alt="ok" className="ok" onClick={handleToggle} />
        </span>
        <span>
          <img
            src={deleteLogo}
            alt="delete"
            className="delete"
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
