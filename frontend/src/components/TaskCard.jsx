function TaskCard({
  task,
  onDelete,
  onStatusChange
}) {

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-3">

      <h3 className="font-bold text-lg">
        {task.title}
      </h3>

      <p className="text-gray-600">
        {task.description}
      </p>

      <div className="mt-3 flex gap-2">

        <select
          value={task.status}
          onChange={(e) =>
            onStatusChange(
              task,
              e.target.value
            )
          }
          className="border rounded p-1"
        >
          <option value="TODO">
            TODO
          </option>

          <option value="IN_PROGRESS">
            IN_PROGRESS
          </option>

          <option value="DONE">
            DONE
          </option>

        </select>

        <button
          onClick={() =>
            onDelete(task.id)
          }
          className="bg-red-500 text-white px-3 rounded"
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default TaskCard;