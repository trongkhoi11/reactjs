import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { useState } from "react";
import Search from "./Search";

function App() {
  const [todolist, setTodoList] = useState([
    { text: "Take a trash out" },
    { text: "Pay apartment rent" },
    { text: "Pay Bills" },
    { text: "Buy dogs food" },
    { text: "Go to the Gym" },
    { text: "Piano class at 7pm" },
  ]);
  const [searchList, setSearchList] = useState([]);
  const todoAdd = (value) => {
    setTodoList([...todolist, { text: value }]);
  };
  const todoSearch = (value) => {
    const search = todolist.filter((item) => {
      return item.text.includes(value);
    });
    setSearchList(search);
  };

  return (
    <div className="App">
      <Header />
      <TodoAdd todoAdd={todoAdd} />
      <Search todoSearch={todoSearch} />
      <TodoList todolist={todolist} searchList={searchList} />
    </div>
  );
}

export default App;
