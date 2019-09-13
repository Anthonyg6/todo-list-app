import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="todo-delete" key={todo.id}>
          <span>{todo.content}</span>
          <button className="todo-btn" onClick={() => deleteTodo(todo.id)}>
            <FontAwesomeIcon icon="check" />
          </button>
        </div>
      );
    })
  ) : (
    <p>You have finished all of your todos!</p>
  );
  return <div className="todo-collection">{todoList}</div>;
};

export default Todos;
