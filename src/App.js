import { useCallback, useEffect, useState } from "react"; // hooks
import "./App.css";

function App() {
  const [godina, setGodina] = useState(0);
  const [klik, setKlik] = useState(0);

  const init = useCallback(() => {
    console.log("component init");
  }, []);

  useEffect(() => {
    //console.log("render", godina);
    init();
  }, [init]);

  return (
    <div className="">
      <p>{godina}</p>
      <button onClick={() => setGodina(godina + 1)}>Dodaj broj</button>
      <p>{klik}</p>
      <button onClick={() => setKlik(klik + 1)}>Dodaj klik</button>
    </div>
  );
}

export default App;
