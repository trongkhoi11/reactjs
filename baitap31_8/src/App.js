import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

function App() {
  const todolist = [
    { text: "Take a trash out" },
    { text: "Pay apartment ren" },
    { text: "Pays Bill" },
    { text: "Take a trash out" },
    { text: "Pay apartment ren" },
    { text: "Pays Bill" },
  ];
  return (
    <div className="App">
      <Header />
      <TodoAdd />
      <TodoList todolist={todolist} />
    </div>
  );
}

export default App;
