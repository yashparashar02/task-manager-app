import { useEffect, useState } from "react";
import TaskCard from "../components/TaskCard";

import {
  createTask,
  deleteTask,
  getTasks,
  updateTask
} from "../services/taskService";

function Dashboard() {

  const [tasks, setTasks] = useState([]);

  const [taskForm, setTaskForm] =
    useState({
      title: "",
      description: "",
      status: "TODO"
    });

  const loadTasks = async () => {

    const response =
      await getTasks();

    setTasks(response.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreateTask =
    async (e) => {

      e.preventDefault();

      await createTask(taskForm);

      setTaskForm({
        title: "",
        description: "",
        status: "TODO"
      });

      loadTasks();
    };

  const handleDelete =
    async (id) => {

      await deleteTask(id);

      loadTasks();
    };

  const handleStatusChange =
    async (
      task,
      newStatus
    ) => {

      await updateTask(
        task.id,
        {
          ...task,
          status: newStatus
        }
      );

      loadTasks();
    };

  const todo =
    tasks.filter(
      t => t.status === "TODO"
    );

  const inProgress =
    tasks.filter(
      t =>
        t.status ===
        "IN_PROGRESS"
    );

  const done =
    tasks.filter(
      t => t.status === "DONE"
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-4xl font-bold mb-6">
        Task Manager
      </h1>

      <form
        onSubmit={
          handleCreateTask
        }
        className="bg-white p-4 rounded-lg shadow mb-8"
      >

        <input
          className="border p-2 mr-2"
          placeholder="Task Title"
          value={taskForm.title}
          onChange={(e) =>
            setTaskForm({
              ...taskForm,
              title:
                e.target.value
            })
          }
        />

        <input
          className="border p-2 mr-2"
          placeholder="Description"
          value={
            taskForm.description
          }
          onChange={(e) =>
            setTaskForm({
              ...taskForm,
              description:
                e.target.value
            })
          }
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>

      </form>

      <div className="grid grid-cols-3 gap-6">

        <div>

          <h2 className="text-xl font-bold mb-3">
            TODO
          </h2>

          {todo.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={
                handleDelete
              }
              onStatusChange={
                handleStatusChange
              }
            />
          ))}
        </div>

        <div>

          <h2 className="text-xl font-bold mb-3">
            IN PROGRESS
          </h2>

          {inProgress.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={
                handleDelete
              }
              onStatusChange={
                handleStatusChange
              }
            />
          ))}
        </div>

        <div>

          <h2 className="text-xl font-bold mb-3">
            DONE
          </h2>

          {done.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={
                handleDelete
              }
              onStatusChange={
                handleStatusChange
              }
            />
          ))}
        </div>

      </div>

    </div>
  );
}

const logout = () => {
  localStorage.removeItem("token");
  navigate("/");
};

<button onClick={logout}>
  Logout
</button>

export default Dashboard;