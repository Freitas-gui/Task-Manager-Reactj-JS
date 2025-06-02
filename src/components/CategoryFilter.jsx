import { useEffect, useState } from "react";

function CategoryFilter({ tasks, hideCategories, ShowHideCategories }) {
  const [categories, setCategories] = useState(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return [...new Set(tasks.map((task) => task.category).filter(Boolean))];
  });

  useEffect(() => {
    setCategories([
      ...new Set(tasks.map((task) => task.category).filter(Boolean)),
    ]);
  }, [tasks]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    ShowHideCategories();
    showAllTasks();
    hideTasksByCategory(category);
  };
  function hideTasksByCategory(category) {
    const tasksOnFilter = tasks.filter((task) => task.category !== category);
    tasksOnFilter.forEach((taskFilter) => {
      let taskElement = document.getElementById(taskFilter.id);
      if (taskElement) {
        taskElement.classList.add("hidden");
      }
    });
  }
  function showAllTasks() {
    tasks.forEach((task) => {
      let taskElement = document.getElementById(task.id);
      if (taskElement) {
        taskElement.classList.remove("hidden");
      }
    });
  }

  function clearFilter() {
    setSelectedCategory(null);
    showAllTasks();
  }
  return (
    <div>
      <div
        className={`space-y-4 p-6 mt-4 bg-slate-200 rounded-md shadow border border-slate-400 ${
          hideCategories ? "hidden" : ""
        }`}
      >
        {categories.map((value, index) => (
          <>
            <div
              className={`category flex items-center justify-between pl-2 hover:bg-slate-300 hover:rounded-md hover:cursor-pointer
              ${selectedCategory === value ? "bg-slate-300 rounded-md" : ""}`}
              onClick={() => handleCategoryClick(value)}
            >
              <span className="text-slate-600 font-medium">{value}</span>
            </div>
            {index === categories.length - 1 ? (
              ""
            ) : (
              <hr className="border-slate-400" />
            )}
          </>
        ))}
      </div>
      <div
        className={`p-1 mt-4 bg-slate-200 flex justify-between ${
          hideCategories && selectedCategory ? "" : "hidden"
        }`}
      >
        <span className="text-slate-600 font-medium w-10/12">
          Categoria: {selectedCategory}
        </span>
        <button
          className="bg-slate-400 text-white p-2 px-3 rounded-md"
          onClick={clearFilter}
        >
          Limpar
        </button>
      </div>
    </div>
  );
}

export default CategoryFilter;
