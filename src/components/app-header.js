<<<<<<< HEAD
import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  );
};

export default AppHeader;
=======
import React from "react";

const AppHead = () => {
  return <h1>My Todo List</h1>;
};

export default AppHead;
>>>>>>> 83527d46e14b95654475c7e8b62f5376d7e626ad
