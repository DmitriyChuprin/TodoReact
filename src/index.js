import React from "react";
import ReactDOM from "react-dom";
import AppHead from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false },
    { label: "Make Awesome App", important: true },
    { label: "Have a lunch", important: false }
  ];
  return (
    <div>
      <AppHead />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
