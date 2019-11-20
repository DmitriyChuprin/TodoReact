import React from "react";
import ReactDOM from "react-dom";
import AppHead from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
  return (
    <div>
      <AppHead />
      <SearchPanel />
      <TodoList />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
