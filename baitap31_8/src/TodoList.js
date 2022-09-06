import React from "react";

function TodoList(props) {
  return (
    <div className="todolist">
      <ul>
        {props.todolist.map((item, index) => {
          return (
            <li>
              {item.text}
              <button className="btn">Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
