import { ChevronDownIcon } from "lucide-react";
import Input from "./Input";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

function AddTasks({ ShowHideCategories }) {
  const [title, setTtitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const navagate = useNavigate();

  const [tasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onAddTask(title, category, description) {
    var newTask = {
      id: v4(),
      title,
      category,
      description,
      isCompleted: false,
    };

    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  }

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTtitle(event.target.value)}
      />
      <textarea
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md resize-none h-24"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <div className="flex items-center relative gap-2">
        <Input
          addclasName={"px-4 py-2 w-10/12"}
          className="border border-slate-300 outline-slate-400 rounded-md"
          placeholder="Digite a categoria da tarefa"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button
          className="bg-slate-400 text-white p-2 px-3 rounded-md w-auto flex"
          onClick={ShowHideCategories}
        >
          Categorias <ChevronDownIcon className="w-5" />
        </button>
      </div>
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => {
          setTtitle("");
          setDescription("");
          setCategory("");
          onAddTask(title, category, description);
          navagate("/");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
