import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import Title from "./components/Title";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  // const fetchTasks = async () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //     { method: "GET" }
  //   );
  //   const data = await response.json();
  //   setTasks(data);
  // };
  // To get the tasks from API
  // fetchTasks();
  // });

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function onTrashClick(taskId) {
    const newTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });

    setTasks(newTasks);
  }

  function onAddTask(title, description) {
    var newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-5">
        <Title>Gerenciador de Tarefas</Title>
        <AddTasks onAddTask={onAddTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTrashClick={onTrashClick}
        />
      </div>
    </div>
  );
}

export default App;
