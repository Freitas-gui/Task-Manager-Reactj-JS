import { useEffect, useState } from "react";
import FilterTask from "./components/FilterTask";
import Tasks from "./components/Tasks";
import Title from "./components/Title";
import { PlusIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const navigate = useNavigate();

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

  return (
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-5">
        <div className="flex justify-center relative mb-6">
          <Title>Gerenciador de Tarefas</Title>
          <button
            onClick={() => navigate("/task/create")}
            className="absolute right-0 top-0 bottom-0 text-slate-100 bg-slate-400 p-2 rounded-md flex items-center justify-center"
          >
            <PlusIcon />
          </button>
        </div>
        <FilterTask tasks={tasks} />
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
