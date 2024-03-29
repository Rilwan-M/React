import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import AddNewProject from "./components/AddNewProject";
import ProjectPage from "./components/Projectpage";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleNewProject(newProject) {
    setProjectState((prevState) => {
      return { ...prevState, projects: [...prevState.projects, newProject] };
    });
  }

  // console.log(projectState.projects[0].id)
  // console.log(projectState.projects)

  function handleAddProjectButton() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  // when cancel button is pressed
  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  // once a project is selected
  function handleProjectPage(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  // for new added task

  function handleNewTask(newTask) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });


  }

  // delete a task
  

  console.log(projectState);

  let content = <NoProjectSelected onSelect={handleAddProjectButton} />;

  if (projectState.selectedProjectId === null) {
    content = (
      <AddNewProject onCancel={handleCancel} onAdd={handleNewProject} />
    );
  } else if (
    projectState.selectedProjectId !== undefined &&
    projectState.selectedProjectId !== null
  ) {
    content = (
      <ProjectPage
        projects={projectState.projects}
        selectedProjectId={projectState.selectedProjectId}
        onAddTask={handleNewTask}
        tasks={projectState.tasks}
      />
    );
  }

  return (
    <div className="flex items-center gap-8">
      <div>
        <Sidebar
          onSelect={handleAddProjectButton}
          projects={projectState.projects}
          onProjectSelection={handleProjectPage}
        />
      </div>
      {content}
    </div>
  );
}

export default App;
