<<<<<<< HEAD
import React from 'react';

import TodoListItem from './todo-list-item';
import './todo-list.css';

const TodoList = ({ todos }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps } />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

=======
import React from "react";
import TodoListItem from "./todo-list-item";

const TodoList = ({ todos }) => {
  const elements = todos.map(item => {
    return (
      <li>
        <TodoListItem {...item} />
      </li>
    );
  });
  return <ul>{elements}</ul>;
};
>>>>>>> 83527d46e14b95654475c7e8b62f5376d7e626ad
export default TodoList;
