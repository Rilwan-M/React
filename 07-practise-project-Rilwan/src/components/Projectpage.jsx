import { useRef } from "react";

const ProjectPage = ({ projects, selectedProjectId, onAddTask, tasks, onDelete }) => {
  const task = useRef();

  function handleNewTask() {
    const enteredTask = task.current.value;

    const newTask = {
      id: selectedProjectId,
      task: enteredTask,
    };

    if (enteredTask.trim() !== "") {
      onAddTask(newTask);
      task.current.value = "";
    }
  }

  return (
    <div className="flex flex-col">
      <div>
        <ul>
          {projects.map((project) => {
            return (
              project.id === selectedProjectId && (
                <span>
                  <li>{project.details.title}</li>
                  <li>{project.details.dueDate}</li>
                  <li>{project.details.description}</li>
                </span>
              )
            );
          })}
        </ul>
      </div>
      <div>
        <input type="text" ref={task} />
        <button onClick={handleNewTask}>add Task</button>
        {tasks.map((task) => {
          return task.id === selectedProjectId && <li>{task.task}<button onClick={()=>onDelete(task.id)}>Cancel</button></li>;
        })}
      </div>
    </div>
  );
};

export default ProjectPage;
