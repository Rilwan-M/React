import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSideBar from "./components/ProjectsSidebar";
import SelectedProject from "./components/Selectedproject";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  });

  function handleAddTask(text){
    const newTask = {
      taskId  : Math.random().toFixed(4),
      projectId : projectState.selectedProjectId,
      task : text

    }
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  }


  function handleDeleteTask(taskID){
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.taskId !== taskID )
      };
    });


  }
  function handleStartAddProject() {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  function handleAddNewProject(projectData) {
    const newProject = { ...projectData, id: Math.random() };
    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  function handleCancel() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectedProject(project) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: project.id,
      };
    });
  }



  function handleDeleteSelectedProject() {
    const filteredProjects = projectState.projects.filter(
      (project) => project.id !== projectState.selectedProjectId
    );

    setProjectState({
      selectedProjectId: undefined,
      projects: filteredProjects
    });
  }
  const selectedProject = projectState.projects.find(
    (proj) => proj.id === projectState.selectedProjectId
  );

  let content;

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddNewProject} onCancel={handleCancel} />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  } else {
    content = (
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteSelectedProject}
        onAddTask={handleAddTask}
        onDeleteTask = {handleDeleteTask}
        taskLists = {projectState.tasks}
        selectedProjectID = {projectState.selectedProjectId}
  
      />
    );
  }

  console.log(projectState.tasks)

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelect={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
