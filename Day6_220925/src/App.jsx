import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  console.log(name);

  return (
    <div style={{ padding: 32 }}>
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default App;
