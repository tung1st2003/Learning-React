import { use, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Content from "./content";

// function App() {
//   const [checked, setChecked] = useState("");
//   const courses = [
//     { id: 1, name: "Tung1" },
//     { id: 2, name: "Tung2" },
//     { id: 3, name: "Tung3" },
//   ];

//   return (
//     <>
//       {courses.map((course) => (
//         <div key={course.id}>
//           <input
//             type="radio"
//             checked={checked === course.id}
//             onChange={() => setChecked(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button>Register</button>
//     </>
//   );
// }

// function App() {
//   const [mail, setMail] = useState("");
//   const [name, setName] = useState("");

//   return (
//     <>
//       <h2>Form Input</h2>
//       <div>
//         <label htmlFor="">Name</label>

//         <input type="text" onChange={(e) => setName(e.target.value)} />
//       </div>
//       <div>
//         <label htmlFor="">Mail</label>
//         <input type="text" onChange={(e) => setMail(e.target.value)} />
//       </div>

//       <p>name:{name}</p>
//       <p>mail:{mail}</p>
//     </>
//   );
// }

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content />}
    </>
  );
}
export default App;
