import { ChevronDownIcon, SearchIcon } from "lucide-react";
import Input from "./Input";
import CategoryFilter from "./CategoryFilter";
import { useState } from "react";

function FilterTask({ tasks }) {
  const [hideCategories, setHideCategories] = useState(true);
  function ShowHideCategories() {
    setHideCategories(!hideCategories);
    return hideCategories;
  }

  return (
    <div className=" p-6 bg-slate-200 rounded-md shadow">
      <div className="flex items-center relative gap-2">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
          <SearchIcon />
        </span>
        <Input
          addclasName={"px-10 py-2 w-10/12"}
          type="text"
          placeholder="Pesquisar pelo título da tarefa"
          className="border border-slate-300 outline-slate-400 rounded-md"
        />
        <button
          className="bg-slate-400 text-white p-2 px-3 rounded-md w-auto flex"
          onClick={ShowHideCategories}
        >
          Categoria <ChevronDownIcon className="w-5" />
        </button>
      </div>
      <CategoryFilter
        tasks={tasks}
        hideCategories={hideCategories}
        ShowHideCategories={ShowHideCategories}
      />
    </div>
  );
}

export default FilterTask;
