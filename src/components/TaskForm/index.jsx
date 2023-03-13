import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../../features/counter/pruebaSlider";
import { v4 as uuid } from "uuid";

function TaskForm() {
  const [task, setTask] = useState({
    lebel: "",
  });
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tasks.id) {
      dispatch(editTask({ ...task, id: task.id }));
    } else {
      dispatch(
        addTask({
          ...tasks,
          id: uuid(),
        })
      );
    }

  };

  useEffect(() => {
    if (task.id) {
      setTask(tasks.find((task) => task.id === task.id));
    }
  }, [ tasks]);

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label className="block text-sm font-bold">Task:</label>
      <input
        type="text"
        name="lebel"
        onChange={handleChange}
        value={task.lebel}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        placeholder="Write a title"
        autoFocus
      />
      
      <button type="submit" className="bg-indigo-600 px-2 py-1">Submit</button>
    </form>
  );
}

export default TaskForm;
