import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onTrashClick }) {
  const navagate = useNavigate();

  function showTask(task) {
    const query = new URLSearchParams();
    query.set("id", task.id);
    query.set("title", task.title);
    query.set("description", task.description);

    navagate(`/task?${query.toString()}`);
  }

  return (
    <div>
      <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {tasks.map((task) => (
          <div key={task.id} id={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 text-white p-2 rounded-md text-left w-10/12 ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
            </button>
            <Button onClick={() => showTask(task)}>
              <ChevronRightIcon />
            </Button>

            <Button onClick={() => onTrashClick(task.id)}>
              <TrashIcon />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
