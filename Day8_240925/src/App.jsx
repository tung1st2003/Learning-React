import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [post, setPost] = useState([]);
  const tab = ["posts", "comments", "albums"];
  const [nextTab, setNextTab] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${nextTab}`)
      .then((res) => res.json())
      .then((post) => setPost(post));
  }, [nextTab]);
  return (
    <>
      <div>
        {tab.map((tab) => {
          return (
            <button onClick={() => setNextTab(tab)} key={tab}>
              {tab}
            </button>
          );
        })}
      </div>
      <ul>
        {post.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
