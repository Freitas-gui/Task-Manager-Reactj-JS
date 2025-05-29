import Input from "./Input";
import { useState } from "react";

function AddTasks({ onAddTask }) {
  const [title, setTtitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTtitle(event.target.value)}
      />
      <Input
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => {
          setTtitle("");
          setDescription("");
          onAddTask(title, description);
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
