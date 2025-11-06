import { useState } from "react";

interface Design {
  id: string;
  content: string;
}

function App() {
  const [designs, setDesigns] = useState<Design[]>([
    { id: "1", content: "Custom Wedding Invitations" },
    { id: "2", content: "Business Logo Design" },
    { id: "3", content: "Hand-painted Greeting Cards" }
  ]);

  function createDesign() {
    const content = window.prompt("Enter design/creation name");
    if (content) {
      const newDesign: Design = {
        id: Date.now().toString(),
        content: content
      };
      setDesigns([...designs, newDesign]);
    }
  }

  function deleteDesign(id: string) {
    setDesigns(designs.filter(design => design.id !== id));
  }

  return (
    <main>
      <h1>Designs and Creation by Louise</h1>
      <p style={{ fontSize: "1.1em", marginBottom: "1em" }}>
        Welcome to my creative portfolio
      </p>
      <button onClick={createDesign}>+ Add New Design</button>
      <ul>
        {designs.map((design) => (
          <li key={design.id}>
            <span>{design.content}</span>
            <button 
              onClick={() => deleteDesign(design.id)}
              style={{ marginLeft: "10px", padding: "4px 8px", fontSize: "0.8em" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "2em", fontSize: "0.9em" }}>
        ✨ Portfolio app by Louise - Showcasing creative designs and creations
      </div>
    </main>
  );
}

export default App;
