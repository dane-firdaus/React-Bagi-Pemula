import react from "react";
import propTypes from "prop-types";
import Buttons from "./Button";
import DeleteModal from "./DeleteModal";
const TodoItem = ({ todo, del, open, opens }) => {
  const delById = (id) => {
    del(id);
  };

  return (
    <div style={todoItem}>
      <p>{todo.title}</p>
      <div style={button}>
        <Buttons text="edit" variant="btn-success" action={() => open(todo.id, todo.title)} />
        <Buttons
          text="delete"
          variant="btn-warning"
          //  action={() => delById(todo.id)}
          action={opens}
        />
      </div>
    </div>
  );
};
export default TodoItem;
TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
  del: propTypes.func,
};
const todoItem = {
  background: "rgb(107, 39, 124)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  height: "3rem",
  padding: "0 1rem",
  justifyContent: "space-between",
  margin: "0.5rem 0",
};
const button = {
  display: "inline-flex",
};
