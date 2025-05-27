import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addList = (inputText) => {
    if (inputText.trim() !== "") {
      const newTask = {
        text: inputText,
        date: new Date().toLocaleDateString("en-US"), // e.g., 04/23/2024
      };
      setListTodo([...listTodo, newTask]);
    }
  };

  const deleteListItem = (index) => {
    const newList = [...listTodo];
    newList.splice(index, 1);
    setListTodo(newList);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <ul className="list-wrapper">
          {listTodo.map((listItem, i) => (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
