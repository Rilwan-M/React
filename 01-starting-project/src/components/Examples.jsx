import TabButton from "./TabButton";

import { EXAMPLES } from "../data";

import { useState } from "react";

import Section from "./Section";

export default function Examples() {

    
  const [selectedComponent, setSelectedComponent] = useState();

  function handleClick(componentSelected) {
    setSelectedComponent(componentSelected);
    console.log(selectedComponent);
  }

  return (
    <Section id="examples" title="Examples">
      <menu>
        <TabButton
          isSelected={selectedComponent === "components"}
          onClick={() => setSelectedComponent("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedComponent === "jsx"}
          onClick={() => setSelectedComponent("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedComponent === "props"}
          onClick={() => handleClick("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedComponent === "state"}
          onClick={() => handleClick("state")}
        >
          State
        </TabButton>
      </menu>

      {selectedComponent === undefined ? (
        <p>Please select a topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedComponent].title}</h3>
          <p>{EXAMPLES[selectedComponent].description}</p>
          <pre>
            <code>{EXAMPLES[selectedComponent].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
