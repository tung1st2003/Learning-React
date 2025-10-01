import { useEffect, useState, useRef, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Content from "./content";

function App() {
  // const [count, setCount] = useState(30);
  // const itemCount = useRef();
  // const prevCount = useRef();
  // const startNum = () => {
  //   itemCount.current = setInterval(() => {
  //     setCount((prevCount) => prevCount - 1);
  //   }, 1000);
  // };
  // useEffect(() => {
  //   prevCount.current = count;
  //   console.log("render pre :" + prevCount.current);
  // }, [count]);
  // const stopNum = () => {
  //   clearInterval(itemCount.current);
  // };
  // console.log(count, prevCount.current);
  // return (
  //   <>
  //     <h1>{count}</h1>
  //     <button onClick={startNum}>start</button>
  //     <button onClick={stopNum}>stop</button>
  //   </>
  // );

  const [count, setCount] = useState(0);
  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <>
      <h1>{count}</h1>
      <Content onIncrease={handleIncrease} />
    </>
  );
}

export default App;
