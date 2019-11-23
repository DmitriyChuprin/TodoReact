import React from "react";
import ReactDOM from "react-dom";
import AppHead from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

<<<<<<< HEAD
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';

import './index.css';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 }
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

=======
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
>>>>>>> 83527d46e14b95654475c7e8b62f5376d7e626ad
      <TodoList todos={todoData} />
    </div>
  );
};
<<<<<<< HEAD

ReactDOM.render(<App />,
  document.getElementById('root'));
=======
ReactDOM.render(<App />, document.getElementById("root"));
>>>>>>> 83527d46e14b95654475c7e8b62f5376d7e626ad
