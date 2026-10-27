import { useState } from "react";
import './App.css'

export default function App() {
  const [count, setCount] = useState(0);

  function down() {
    setCount(count - 1)
  };

  function up() {
    setCount(count + 1)
  };

  return(
    <div>
      <h3 className="midasi">カウンター</h3>
      <p className="sample-3">{count}</p>
      <button onClick={down} className="btn-sticky">カウントダウン</button>
      <button onClick={up} className="btn-sticky">カウントアップ</button>
      <button onClick={() => setCount(0)} className="btn-sticky">リセット</button>
    </div>
  );
}
