import { useState } from "react";

// function UseState() {
//   const [gift, setGift] = useState();
//   const gifts = ["gift1", "gift2", "gift3"];
//   const randomGift = () => {
//     const value = Math.floor(Math.random() * gifts.length);
//     setGift(gifts[value]);
//   };
//   return (
//     <>
//       <h1>{gift || "chua co thuong"}</h1>
//       <button onClick={randomGift}>lay thuonf</button>
//     </>
//   );
// }
function App() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: 32 }}>
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
}

export default UseState;
