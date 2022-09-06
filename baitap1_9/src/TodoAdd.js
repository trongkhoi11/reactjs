import React, { useState } from "react";

function TodoAdd(props) {
  const [value, setValue] = useState("");
  const inputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="todo-add">
      <form>
        <input value={value} onChange={inputChange}></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            props.todoAdd(value);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoAdd;
