import React from "react";
import { useState } from "react";

function Search(props) {
  const [value, setValue] = useState("");
  const inputChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="todo-search">
      <input onChange={inputChange} value={value}></input>
      <button
        onClick={(e) => {
          e.preventDefault();
          props.todoSearch(value);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
