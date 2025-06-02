import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";
import TaskEditPage from "./pages/TaskEditPage.jsx";
import AddTaskPage from "./pages/AddTaskPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task/create",
    element: <AddTaskPage />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
  {
    path: "/task/edit",
    element: <TaskEditPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
