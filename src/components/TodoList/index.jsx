import React, { useEffect } from "react";
import "./styles.css";
import { fetchAllTask, deletedTa, deleteTask, editTask } from "../../features/counter/pruebaSlider";
import { useDispatch, useSelector } from "react-redux";
import TodoListItem from "components/TodoListItem";

const TodoList = () => {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    // Fix an ability to delete task
    
 dispatch(deleteTask(id))
  };


  const handleEdit = (id) => {
    
 dispatch(editTask(id))
  };

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
  };
  const {todos:getTasks} = useSelector(state => state.tasks)
  const users = []
  useEffect (() => {
    dispatch(fetchAllTask())
  }, [dispatch])

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        {/* Fix an ability to render todos */}
        <div className="raw">
        {getTasks.map((element) =>
        
        <div key={element.id}>

          <p>
            <input type="checkbox" />
            {element.label}
            <button className="button" type="submit" onClick={() => handleDelete(element.id)}>x</button>
            <button className="button" type="submit" onClick={() => handleEdit(element.id)}>Editar</button>
          </p>
          </div>
          )
        }
          
          </div>
      </div>
      <div className="no-todos">
        Looks like you&apos;re absolutely free today!
      </div>
    </div>
  );
};

export default TodoList;
