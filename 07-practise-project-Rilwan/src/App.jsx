import { useState } from "react";

import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import Input from "./components/Input";

function App() {
  const [AddProjectButton, setAddProjectButton] = useState(false);

  function handleAddProjectButton() {
    setAddProjectButton(true);
  }

  let content = <NoProjectSelected onSelect={handleAddProjectButton} />;

  if (AddProjectButton) {
    content = <Input />;
  }

  return (
    <div className="flex items-center gap-8">
      <div>
        <Sidebar onSelect={handleAddProjectButton} />
      </div>
      {content}
    </div>
  );
}

export default App;
