import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Login from "./LoginForm.jsx";
import Register from "./RegisterForm.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Login />
        <Register />
      </div>
    </>
  );
}

export default App;
