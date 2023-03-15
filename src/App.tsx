import { useState } from "react";
import Characters from "./components/Characters";

function App(): JSX.Element {
  const [showCharacters, setShowCharacters] = useState<boolean>(false);
  function toggleCharacters() {
    setShowCharacters((prev) => !prev);
  }
  return (
    <>
      <button onClick={toggleCharacters}>Show Characters</button>
      {showCharacters && <Characters />}
    </>
  );
}

export default App;
