import { ChevronLeftIcon, EditIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";
import Button from "../components/Button";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const description = searchParams.get("description");

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
            <div>
              <h2 className="text-xl font-bold text-slate-600">{title}</h2>
              <p className="text-slate-600">{description}</p>
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
