import { useState } from "react";
import CounterButton from "./components/CounterButton";
import './App.css'

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
      <h3 className="midasi">カウンター</h3>
      <p className="sample-3">{count}</p>
      <CounterButton onClick={down} label="カウントダウン" />
      <CounterButton onClick={up} label="カウントアップ" />
      <CounterButton onClick={reset} label="リセット" />
    </div>
  );
}