import { CORE_CONCEPTS } from "../data";

import Section from "./Section";

function CoreConcept({ title, image, description }) {
    return (
      <li>
        <img src={image} title={title} />
        <h2>{title}</h2>
        <p>{description}</p>
      </li>
    );
  }

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}
