import { BoxIcon, ChevronLeftIcon, DotIcon, EditIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";
import Button from "../components/Button";
import { useState } from "react";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [tasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const task = tasks.find((task) => task.id == id);

  function editTask() {
    const query = new URLSearchParams();
    query.set("id", id);
    navigate(`/task/edit?${query.toString()}`);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate("/")}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <div className="w-11/12">
              <h2 className="text-xl font-bold text-slate-600">{task.title}</h2>
              <span className="text-slate-600 flex">
                <DotIcon className="w-4 mw-4 min-w-4" />
                Categoria: {task.category}
              </span>
              <span className="text-slate-600 flex">
                <DotIcon className="w-4 mw-4 min-w-4" />
                Descrição: {task.description}
              </span>
            </div>
            <Button onClick={() => editTask()}>
              <EditIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
