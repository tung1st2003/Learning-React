import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [countdown, setCountdown] = useState(0);
  useEffect(() => {
    console.log(`re-render lan ${countdown}`);
    return () => console.log(`clean lan ${countdown}`);
  }, [countdown]);
  return (
    <>
      <div>
        <p>{countdown}</p>
        <button onClick={() => setCountdown(countdown + 1)}>add1</button>
      </div>
    </>
  );
}

export default App;
