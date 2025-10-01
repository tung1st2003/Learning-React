import { useState } from "react";
function Test() {
  const [count, setCount] = useState(true);
  return (
    <>
      <button onClick={() => setCount(!count)}>Toggle</button>
      {count && "Xin chao React"}
    </>
  );
}
export default Test;
