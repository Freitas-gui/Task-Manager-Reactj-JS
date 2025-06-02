import { useState } from "react";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import AddTasks from "../components/AddTasks";
import { v4 } from "uuid";

function AddTaskPage() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

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
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate("/")}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Criar Tarefa</Title>
        </div>
        <AddTasks onAddTask={onAddTask} />
      </div>
    </div>
  );
}

export default AddTaskPage;
