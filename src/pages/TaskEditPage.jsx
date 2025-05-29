import { useState } from "react";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";
import EditTask from "../components/EditTask";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [tasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const task = tasks.find((task) => task.id == id);

  function onEditTask(titleNew, descriptionNew) {
    const updatedTask = {
      ...task,
      title: titleNew,
      description: descriptionNew,
    };

    const updatedTasks = tasks.map((t) => (t.id === task.id ? updatedTask : t));

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    const query = new URLSearchParams();
    query.set("id", task.id);
    query.set("title", titleNew);
    query.set("description", descriptionNew);

    navigate(`/task?${query.toString()}`);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Editar Tarefa</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-600">{task.title}</h2>
              <p className="text-slate-600">{task.description}</p>
            </div>
          </div>
        </div>
        <EditTask task={task} onEditTask={onEditTask} />
      </div>
    </div>
  );
}

export default TaskPage;
