import { FaEdit, FaCheckDouble, FaRegTrashAlt } from "react-icons/fa";

const Task = ({ key, task, index, deleteTask, getSingleTask, setComplete }) => {
  return (
    <div className={task.completed ? "task completed" : "task"}>
      <p>
        <b>{index + 1} . </b>
        {task.name}
      </p>
      <div className="task-icons">
        <FaEdit color="purple" onClick={() => getSingleTask(task)} />
        <FaCheckDouble color="green" onClick={() => setComplete(task)} />
        <FaRegTrashAlt color="red" onClick={() => deleteTask(task._id)} />
      </div>
    </div>
  );
};

export default Task;
