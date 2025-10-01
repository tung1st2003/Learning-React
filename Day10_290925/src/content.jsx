import { memo } from "react";
function Content({ onIncrease }) {
  console.log("re-render");

  return (
    <>
      <button onClick={onIncrease}>CLick</button>
    </>
  );
}
export default memo(Content);
