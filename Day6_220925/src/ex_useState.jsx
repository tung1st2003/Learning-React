import { useState } from "react";

function UseState() {
  const [plus, setPlus] = useState("");
  const courses = ["a1", "a2", "a3"];
  const add1 = () => {
    const value = Math.floor(Math.random() * courses.length);
    setPlus(courses[value]);
  };
  return (
    <>
      <p>{plus || "chua co gi"}</p>
      <button onClick={add1}>add 1</button>
    </>
  );
}
export default UseState;
