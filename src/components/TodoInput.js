import React, { useState } from "react";

function TodoInput({ addList }) {
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    addList(inputText);
    setInputText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Add a task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="add-btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
