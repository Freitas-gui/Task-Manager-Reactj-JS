import Input from "./Input";
import { useState, useEffect } from "react";

function EditTask({ task, onEditTask }) {
  const [titleNew, setTitleNew] = useState("");
  const [descriptionNew, setDescriptionNew] = useState("");

  // Inicializa o estado com os valores da URL
  useEffect(() => {
    setTitleNew(task.title || "");
    setDescriptionNew(task.description || "");
  }, [task]);

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={titleNew}
        onChange={(event) => setTitleNew(event.target.value)}
      />
      <Input
        placeholder="Digite a descrição da tarefa"
        value={descriptionNew}
        onChange={(event) => setDescriptionNew(event.target.value)}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
        onClick={() => {
          onEditTask(titleNew, descriptionNew, task.id);
        }}
      >
        Editar
      </button>
    </div>
  );
}

export default EditTask;
