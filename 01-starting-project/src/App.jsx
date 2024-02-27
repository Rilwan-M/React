import Header from "./components/Header";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

import { useState } from "react";

import TabButton from "./components/TabButton";

function CoreConcept({ title, image, description }) {
  return (
    <li>
      <img src={image} title={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function App() {
  console.log("app component executed");

  const [selectedComponent, setSelectedComponent] = useState();

  function handleClick(componentSelected) {
    setSelectedComponent(componentSelected);
    console.log(selectedComponent);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=><CoreConcept key={conceptItem.title} {...conceptItem}/>)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton selectedComponent = {(selectedComponent === "components")} onSelect={() => setSelectedComponent("components")}>
              Components
            </TabButton>
            <TabButton selectedComponent = {(selectedComponent === "jsx")} onSelect={() => setSelectedComponent("jsx")}>
              JSX
            </TabButton>
            <TabButton selectedComponent = {(selectedComponent === "props")} onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton selectedComponent = {(selectedComponent === "state")} onSelect={() => handleClick("state")}>State</TabButton>
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
        </section>
      </main>
    </div>
  );
}

export default App;
