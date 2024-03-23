import NewTask from "./NewTask";

export default function Tasks({ onAdd, onDelete, taskList, selectedProjectID }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {taskList.length > 0 ? (
        <ul>
          {taskList.map((item) => (
            <li key={item.taskId}>
             { item.projectId === selectedProjectID && <span className="text-stone-400 mb-4">{item.task}<button onClick={()=>onDelete(item.taskId)}>Cancel</button></span>}
            </li>
            
          ))}
        </ul>
      ) : (
        <p className="text-stone-400 mb-4">No Tasks</p>
      )}
    </section>
  );
}
