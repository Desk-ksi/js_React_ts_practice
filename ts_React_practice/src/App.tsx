import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function down() {
    setCount(count - 1)
  };

  function up() {
    setCount(count + 1)
  };

  function reset() {
    setCount(0)
  };

  return(
    <div>
      <h1>カウンター</h1>
      <p>{count}</p>
      <button onClick={down}>カウントダウン</button>
      <button onClick={up}>カウントアップ</button>
      <button onClick={reset}>リセット</button>
    </div>
  );
}