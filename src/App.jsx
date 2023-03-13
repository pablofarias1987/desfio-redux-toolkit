import React from "react";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import TaskForm from "./components/TaskForm";
import "./App.css";

const App = () => {
  return (
    <div className="root">
      <TodoList />
      <TodoResults />
      <TaskForm />
    </div>
  );
};

export default App;
