import React from "react";

function TodoList({ item, index, deleteItem }) {
  return (
    <li className="list-item">
      <div>
        <div className="task-title">{item.text}</div>
        <div className="task-date">{item.date}</div>
      </div>
      <button className="delete-btn" onClick={() => deleteItem(index)}>
        Delete
      </button>
    </li>
  );
}

export default TodoList;
